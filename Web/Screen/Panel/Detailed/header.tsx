/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    Dimensions.get('window').width < 768,
  );

  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = Dimensions.get('window').width;
      setIsSmallScreen(screenWidth < 768);
    };

    const subscription = Dimensions.addEventListener('change', updateLayout);

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Chọn dịch vụ vận chuyển" style={styles.input} />
      </View>
      <View
        style={[
          styles.statusContainer,
          {flexDirection: isSmallScreen ? 'column' : 'row'},
        ]}>
        <View style={styles.box}>
          <Text style={styles.number}>0</Text>
          <Text>0</Text>
          <Text>Mới</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.number}>0</Text>
          <Text>0</Text>
          <Text>Đang xử lý</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.number}>0</Text>
          <Text>0</Text>
          <Text>Sẵn sàng bàn giao</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    width: 470, // hoặc 280 như ở mobile
    maxWidth: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },

  statusContainer: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    gap: 10,
  },

  box: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    flex: 1, // Giúp mỗi box chiếm đều chiều ngang
    margin: 5, // Giãn cách giữa các box
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    minWidth: 100, // Đảm bảo không bị quá nhỏ
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },

  number: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
});
