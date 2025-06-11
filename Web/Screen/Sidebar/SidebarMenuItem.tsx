/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  Image,
  SafeAreaView,
} from 'react-native';
import icons from '../../../shared/constans/icons';

interface SubMenuItem {
  label: string;
  menuId: string;
  iconKey?: keyof typeof icons;
  subSubMenuItems: string[];
}
interface SidebarMenuItemProps {
  menuId: string;
  label: string;
  iconKey?: keyof typeof icons;
  activeKey: string;
  hoveredKey: string;
  setActiveKey: (key: string) => void;
  setHoveredKey: (key: string) => void;
  expandedMenus: string[];
  toggleExpand: (key: string) => void;
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
  subMenuItems: SubMenuItem[];
  getOrCreateRotationAnimation: (_: string) => Animated.Value;
  parentKeyPath: string;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  menuId,
  label,
  iconKey,
  activeKey,
  hoveredKey,
  setActiveKey,
  setHoveredKey,
  expandedMenus,
  toggleExpand,
  collapsed,
  subMenuItems,
  setCollapsed,
}) => {
  const isExpanded = expandedMenus.includes(menuId);
  const rotateAnim = useRef(new Animated.Value(isExpanded ? 1 : 0)).current;
  const hoverOutTimer = useRef<NodeJS.Timeout | null>(null);

  const hoverPath = hoveredKey;
  const fullPath = menuId;
  const isHovered = hoverPath.startsWith(fullPath);
  const isActive = activeKey.startsWith(fullPath);

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isExpanded ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isExpanded]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-90deg'],
  });

  const subMenuAnimRefs = useRef<{[key: string]: Animated.Value}>({});
  subMenuItems.forEach(sub => {
    if (!subMenuAnimRefs.current[sub.menuId]) {
      subMenuAnimRefs.current[sub.menuId] = new Animated.Value(
        expandedMenus.includes(sub.menuId) ? 1 : 0,
      );
    }
  });

  useEffect(() => {
    subMenuItems.forEach(sub => {
      const isSubExpanded = expandedMenus.includes(sub.menuId);
      Animated.timing(subMenuAnimRefs.current[sub.menuId], {
        toValue: isSubExpanded ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  }, [expandedMenus, subMenuItems]);

  const handleHoverIn = (path: string) => {
    if (hoverOutTimer.current) {
      clearTimeout(hoverOutTimer.current);
    }
    setHoveredKey(path);
  };

  const handleHoverOut = () => {
    if (hoverOutTimer.current) {
      clearTimeout(hoverOutTimer.current);
    }
    hoverOutTimer.current = setTimeout(() => {
      setHoveredKey('');
    }, 100);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      {/* Bậc 1 */}
      <Pressable
        style={styles.menuItem}
        onPress={() => {
          if (collapsed) {
            setCollapsed(false);
            toggleExpand(menuId);
          } else {
            if (subMenuItems.length === 0) {
              setActiveKey(menuId);
            } else {
              toggleExpand(menuId);
            }
          }
        }}
        onHoverIn={() => handleHoverIn(menuId)}
        onHoverOut={handleHoverOut}>
        {iconKey && icons[iconKey] && (
          <Image
            source={icons[iconKey]}
            style={[
              collapsed ? styles.leftIconCollapsed : styles.leftIcon,
              {
                tintColor: isHovered
                  ? '#2a63bf'
                  : isActive
                  ? '#0046b8'
                  : '#000',
              },
            ]}
          />
        )}
        {!collapsed && (
          <>
            <Text
              style={[
                styles.menuLabel,
                isHovered && styles.menuLabelHovered,
                isActive && styles.menuLabelActive,
              ]}>
              {label}
            </Text>
            {subMenuItems.length > 0 && (
              <Animated.Image
                source={icons.lefticon}
                style={[
                  styles.rightIcons,
                  {transform: [{rotate: rotateInterpolate}]},
                ]}
              />
            )}
          </>
        )}
      </Pressable>

      {/* Bậc 2 + 3 */}
      {!collapsed &&
        isExpanded &&
        subMenuItems.map(sub => {
          const subPath = `${menuId}/${sub.menuId}`;
          const isSubExpanded = expandedMenus.includes(sub.menuId);
          const isSubHovered = hoverPath.startsWith(subPath);
          const isSubActive = activeKey.startsWith(subPath);

          const rotateInterpolateSub = subMenuAnimRefs.current[
            sub.menuId
          ].interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-90deg'],
          });

          return (
            <View key={sub.menuId} style={styles.subMenu}>
              <Pressable
                onPress={() => {
                  if (!sub.subSubMenuItems.length) {
                    setActiveKey(subPath);
                  } else {
                    toggleExpand(sub.menuId);
                  }
                }}
                style={styles.subMenuItem }
                onHoverIn={() => handleHoverIn(subPath)}
                onHoverOut={handleHoverOut}>
                {sub.iconKey && icons[sub.iconKey] && (
                  <Image
                    source={icons[sub.iconKey]}
                    style={[
                      styles.leftIconSub,
                      {
                        tintColor: isSubHovered
                          ? '#2a63bf'
                          : isSubActive
                          ? '#0046b8'
                          : '#000',
                      },
                    ]}
                  />
                )}
                <Text
                  style={[
                    styles.subLabel,
                    isSubHovered && styles.subLabelHovered,
                    isSubActive && styles.subLabelActive,
                  ]}>
                  {sub.label}
                </Text>
                {sub.subSubMenuItems.length > 0 && (
                  <Animated.Image
                    source={icons.lefticon}
                    style={[
                      styles.rightIcon,
                      {transform: [{rotate: rotateInterpolateSub}]},
                    ]}
                  />
                )}
              </Pressable>

              {/* Bậc 3 */}
              {sub.subSubMenuItems.length > 0 && isSubExpanded && (
                <View style={styles.subSubMenu}>
                  {sub.subSubMenuItems.map(item => {
                    const itemPath = `${subPath}/${item}`;
                    const isItemHovered = hoverPath === itemPath;
                    const isItemActive = activeKey === itemPath;

                    return (
                      <Pressable
                        key={item}
                        onPress={() => setActiveKey(itemPath)}
                        style={styles.subSubMenuItem}
                        onHoverIn={() => handleHoverIn(itemPath)}
                        onHoverOut={handleHoverOut}>
                        <Text
                          style={[
                            styles.subSubLabel,
                            isItemHovered && styles.subSubLabelHovered,
                            isItemActive && styles.subSubLabelActive,
                          ]}>
                          {item}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              )}
            </View>
          );
        })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {marginLeft: 10},
  menuItem: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  leftIconCollapsed: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  leftIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  menuLabel: {fontSize: 14, flex: 1, color: '#000'},
  menuLabelHovered: {
    color: '#2a63bf',
  },
  menuLabelActive: {
    color: '#0046b8',
  },
  rightIcons: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    marginRight: 10,
  },
  rightIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    marginRight: 10,
  },
  subMenu: {paddingLeft: 20},
  subMenuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIconSub: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 10,
  },
  subLabel: {
    fontSize: 14,
    flex: 1,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    color: '#000',
  },
  subLabelHovered: {
    color: '#2a63bf',
  },
  subLabelActive: {
    color: '#0046b8',
  },
  subSubMenu: {
    paddingLeft: 20,
  },
  subSubMenuItem: {
    paddingVertical: 5,
    backgroundColor: 'transparent',
  },
  subSubLabel: {
    fontSize: 14,
    color: '#555',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  subSubLabelHovered: {
    color: '#0046b8',
  },
  subSubLabelActive: {
    color: '#0046b8',
  },
});

export default SidebarMenuItem;
