/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';
import IMG from '../../../shared/constans/images';

const WelCome = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    Dimensions.get('window').width < 768,
  );

  // Animation values
  const textTranslateY = useRef(new Animated.Value(500)).current;
  const imageTranslateX = useRef(new Animated.Value(800)).current;

  useEffect(() => {
    const onChange = ({window}: {window: {width: number}}) => {
      setIsSmallScreen(window.width < 768);
    };
    const subscription = Dimensions.addEventListener('change', onChange);

    // Run animation on mount
    Animated.parallel([
      Animated.timing(textTranslateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(imageTranslateX, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    return () => subscription.remove();
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: isSmallScreen ? 'column' : 'row',
          alignItems: 'center',
        },
      ]}>
      <Animated.View
        style={[
          styles.textWrapper,
          {
            transform: [{translateY: textTranslateY}],
            marginBottom: isSmallScreen ? 24 : 0,
            marginRight: isSmallScreen ? 0 : 48,
            width: isSmallScreen ? '100%' : '50%',
          },
        ]}>
        <Text style={styles.title}>WMS</Text>
        <Text style={styles.subtitle}>Hệ thống quản lý kho thông minh</Text>
        <Text style={styles.description}>
          WARENA có nhiều tính năng hữu ích, đơn giản hoá việc kiểm kho. Hỗ trợ
          kiểm soát hồ sơ khách hàng, liên kết các kênh bán hàng thương mại điện
          tử giúp tra soát đơn hàng trong kho dễ dàng.
        </Text>
      </Animated.View>

      <Animated.Image
        style={[
          {
            transform: [{translateX: imageTranslateX}],
            width: isSmallScreen ? '100%' : 400,
            height: isSmallScreen ? 180 : 450,
          },
        ]}
        resizeMode="contain"
        source={IMG.Kho}
      />
    </View>
  );
};

export default WelCome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 10,
    height: '100vh',
  },
  textWrapper: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});
