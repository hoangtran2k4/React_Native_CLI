/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import SidebarMenuItem from './SidebarMenuItem';
import {navigationRef} from '../../../navigation/navigationRef';

interface Props {
  state: 'collapsed' | 'expanded';
  onToggleExpand: () => void;
  setSidebarState: (state: 'collapsed' | 'expanded') => void;
  setActiveScreen: (key: string) => void;
}

const SideBar: React.FC<Props> = ({
  state,
  setSidebarState,
  setActiveScreen,
}) => {
  const widthAnim = useRef(new Animated.Value(0)).current;

  const [activeKey, setActiveKey] = useState('');
  const [hoveredKey, setHoveredKey] = useState('');
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const [collapsed, setCollapsed] = useState(state === 'collapsed');

  const toggleExpand = (key: string) => {
    setExpandedMenus(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key],
    );
  };

  const getOrCreateRotationAnimation = (_: string) => new Animated.Value(0); // demo

  const onMenuItemPress = (key: string) => {
    setActiveKey(key);
    setActiveScreen(key);
    navigationRef.navigate(key as never);
  };
  useEffect(() => {
    const targetWidth = state === 'collapsed' ? 50 : 250;
    Animated.timing(widthAnim, {
      toValue: targetWidth,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setCollapsed(state === 'collapsed');
  }, [state]);

  return (
    <SafeAreaView
      style={[styles.container, {width: state === 'collapsed' ? 50 : 250}]}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <SidebarMenuItem
          menuId="control"
          label="Bảng điều khiển"
          iconKey="control"
          activeKey={activeKey}
          hoveredKey={hoveredKey}
          setActiveKey={onMenuItemPress}
          setHoveredKey={setHoveredKey}
          expandedMenus={expandedMenus}
          toggleExpand={toggleExpand}
          getOrCreateRotationAnimation={getOrCreateRotationAnimation}
          subMenuItems={[
            {
              label: 'Bảng vận hành tổng quan',
              menuId: 'overview',
              subSubMenuItems: [],
            },
            {
              label: 'Bảng vận hành chi tiết',
              menuId: 'detailed',
              subSubMenuItems: [],
            },
            {
              label: 'Bảng quản lý lấy hàng',
              menuId: 'pickup',
              subSubMenuItems: [],
            },
            {
              label: 'Bảng kênh bán hàng',
              menuId: 'salesChannel',
              subSubMenuItems: [],
            },
            {
              label: 'Bảng tính năng xuất nhân viên',
              menuId: 'EmployeeProductivity',
              subSubMenuItems: [],
            },
            {
              label: 'Bảng KPI',
              menuId: 'KPI',
              subSubMenuItems: [],
            },
            {
              label: 'Quản lý vị trí kho',
              menuId: 'Warehouselocation',
              subSubMenuItems: [],
            },
          ]}
          parentKeyPath=""
          collapsed={collapsed}
          setCollapsed={v => setSidebarState(v ? 'collapsed' : 'expanded')}
        />
        <SidebarMenuItem
          menuId="operate"
          label="Vận hành"
          iconKey="operate"
          activeKey={activeKey}
          hoveredKey={hoveredKey}
          setActiveKey={onMenuItemPress}
          setHoveredKey={setHoveredKey}
          expandedMenus={expandedMenus}
          toggleExpand={toggleExpand}
          getOrCreateRotationAnimation={getOrCreateRotationAnimation}
          subMenuItems={[
            {
              label: 'Nhập kho',
              menuId: 'imports',
              iconKey: 'imports',
              subSubMenuItems: ['Yêu cầu nhập kho'],
            },
            {
              label: 'Xuất kho',
              menuId: 'exports',
              iconKey: 'exports',
              subSubMenuItems: [
                'Yêu cầu xuất kho',
                'Lấy hàng',
                'Lấy hàng B2B',
                'Đóng gói',
              ],
            },
            {
              label: 'Tồn kho',
              iconKey: 'Inventory',
              menuId: 'Inventory',
              subSubMenuItems: ['Điều chỉnh tồn'],
            },
            {
              label: 'Vận chuyển',
              iconKey: 'transport',
              menuId: 'transport',
              subSubMenuItems: ['Bàn giao nhà vận chuyển', 'Cập nhật đơn xuất'],
            },
            {
              label: 'Năng xuất kho',
              iconKey: 'Productivity',
              menuId: 'Productivity',
              subSubMenuItems: ['KPI kho', 'Tính lương cho nhân viên'],
            },
            {
              label: 'Tiện ích',
              iconKey: 'Utilities',
              menuId: 'Utilities',
              subSubMenuItems: [
                'Thiết bị chứa hàng',
                'Vị trí sản phẩm',
                'Thông tin vị trí',
                'Lịch sử sản phẩm',
                'Phiên làm việc',
                'Thứ tự xuất hàng',
                'In nhãn',
                'Cập nhật chứng từ',
                'Cập nhật thông số sản phẩm',
                'Vấn đề phát sinh',
                'Cập nhật TTHH',
              ],
            },
            {
              label: 'Kiểm kê',
              iconKey: 'inventory_management',
              menuId: 'inventory_management',
              subSubMenuItems: ['Danh sánh phiên kiểm kê'],
            },
          ]}
          parentKeyPath=""
          collapsed={collapsed}
          setCollapsed={v => setSidebarState(v ? 'collapsed' : 'expanded')}
        />
        <SidebarMenuItem
          menuId="stock"
          label="Quản lý sản phẩm"
          iconKey="stock"
          activeKey={activeKey}
          hoveredKey={hoveredKey}
          setActiveKey={onMenuItemPress}
          setHoveredKey={setHoveredKey}
          expandedMenus={expandedMenus}
          toggleExpand={toggleExpand}
          getOrCreateRotationAnimation={getOrCreateRotationAnimation}
          subMenuItems={[
            {
              label: 'Cập nhật kích thước sản phẩm',
              iconKey: 'dimension',
              menuId: 'dimension',
              subSubMenuItems: [],
            },
            {
              label: 'Sản phẩm',
              iconKey: 'products',
              menuId: 'products',
              subSubMenuItems: [],
            },
          ]}
          parentKeyPath=""
          collapsed={collapsed}
          setCollapsed={v => setSidebarState(v ? 'collapsed' : 'expanded')}
        />
        <SidebarMenuItem
          menuId="setting"
          label="Thiết lập"
          iconKey="setting"
          activeKey={activeKey}
          hoveredKey={hoveredKey}
          setActiveKey={onMenuItemPress}
          setHoveredKey={setHoveredKey}
          expandedMenus={expandedMenus}
          toggleExpand={toggleExpand}
          getOrCreateRotationAnimation={getOrCreateRotationAnimation}
          subMenuItems={[
            {
              label: 'Quản lý nhân viên',
              iconKey: 'user',
              menuId: 'user',
              subSubMenuItems: ['Tài khoản', 'Nhóm quyền'],
            },
            {
              label: 'Quản lý vị trí',
              iconKey: 'locations',
              menuId: 'locations',
              subSubMenuItems: [],
            },
            {
              label: 'Quản lý thiết bị chứa hàng',
              iconKey: 'equipment',
              menuId: 'equipment',
              subSubMenuItems: [],
            },
            {
              label: 'Cấu hình chung',
              iconKey: 'setting',
              menuId: 'configuration',
              subSubMenuItems: [],
            },
          ]}
          parentKeyPath=""
          collapsed={collapsed}
          setCollapsed={v => setSidebarState(v ? 'collapsed' : 'expanded')}
        />
        <SidebarMenuItem
          menuId="report"
          label="Báo cáo"
          iconKey="report"
          activeKey={activeKey}
          hoveredKey={hoveredKey}
          setActiveKey={onMenuItemPress}
          setHoveredKey={setHoveredKey}
          expandedMenus={expandedMenus}
          toggleExpand={toggleExpand}
          getOrCreateRotationAnimation={getOrCreateRotationAnimation}
          subMenuItems={[]}
          parentKeyPath=""
          collapsed={collapsed}
          setCollapsed={v => setSidebarState(v ? 'collapsed' : 'expanded')}
        />
        <SidebarMenuItem
          menuId="exportData"
          label="Phiên xuất dữ liệu"
          iconKey="exportData"
          activeKey={activeKey}
          hoveredKey={hoveredKey}
          setActiveKey={onMenuItemPress}
          setHoveredKey={setHoveredKey}
          expandedMenus={expandedMenus}
          toggleExpand={toggleExpand}
          getOrCreateRotationAnimation={getOrCreateRotationAnimation}
          subMenuItems={[]}
          parentKeyPath=""
          collapsed={collapsed}
          setCollapsed={v => setSidebarState(v ? 'collapsed' : 'expanded')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SideBar;

const styles = StyleSheet.create({
  container: {
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    backgroundColor: '#fff',
    paddingTop: 10,
    height: '100vh',
  },
  scrollContainer: {
    marginBottom: 40,
  },
});
