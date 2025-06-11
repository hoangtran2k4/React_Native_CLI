import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import icons from '../../../shared/constans/icons';

const operateOptions = [
  'Thống kê hàng sắp hết hạn',
  'Chi tiết thống kê hàng sắp hết hạn',
  'Xuất hàng tổng hợp',
  'Hư hỏng/hết hạn',
  'Lệch tồn tổng hợp và tồn vị trí',
  'Thống kê sản phẩm xuất kho',
  'Đơn hàng đã bàn giao cho DVVC',
  'Các đơn hàng trả hàng chưa xử lý',
  'Báo cáo chuyển đổi TTHH / ĐVT',
  'Báo cáo xác định vị trí',
];

const Operate = () => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleExpand}>
        <Text style={styles.title}>Vận hành</Text>
        <Image source={icons.lefticon} style={styles.icon} />
      </TouchableOpacity>

      {expanded && (
        <View style={styles.subList}>
          {operateOptions.map((item, index) => (
            <TouchableOpacity key={index}>
              <Text style={styles.subItem}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Operate;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // width: 250,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#4da6ff',
  },
  icon: {
    width: 12,
    height: 12,
    tintColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  subList: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#ffff',
  },
  subItem: {
    fontSize: 14,
    paddingVertical: 4,
    color: '#4da6ff',
  },
});
