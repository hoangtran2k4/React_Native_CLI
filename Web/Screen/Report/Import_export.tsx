import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import icons from '../../../shared/constans/icons';

const Import_exportOptions = [
  'Nhập xuất tồn',
  'Nhập hàng tổng hợp',
  'Xuất hàng tổng hợp',
  'Lịch sử thay đổi tồn',
  'Nhập xuất chi tiết',
  'Nhập xuất chi tiết theo ngày nhập, HSD & Số lô',
  'Nhập xuất tồn theo lô vị trí',
  'Nhập xuất chi tiết theo serial',
  'Nhận hàng hoàn/hàng trả',
  'QC hàng',
  'Đơn hàng đã đóng gói theo ngày',
  'Nhập xuất tồn theo kỳ',
];

const Import_export = () => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleExpand}>
        <Text style={styles.title}>Nhập,Xuất</Text>
        <Image source={icons.lefticon} style={styles.icon} />
      </TouchableOpacity>

      {expanded && (
        <View style={styles.subList}>
          {Import_exportOptions.map((item, index) => (
            <TouchableOpacity key={index}>
              <Text style={styles.subItem}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Import_export;

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
