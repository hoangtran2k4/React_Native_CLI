import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import icons from '../../../shared/constans/icons';

const inventoryOptions = [
  'Tồn kho theo thời gian thực',
  'Tồn kho theo ngày',
  'Tồn kho theo hạn sử dụng',
  'Tồn kho theo vị trí',
  'Tồn kho theo đơn hàng',
  'Tồn kho theo tuổi',
  'Tồn kho theo số lô',
  'Tồn kho theo Serial',
  'Sản phẩm quá hạn xuất kho',
];

const Inventory = () => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleExpand}>
        <Text style={styles.title}>Tồn kho</Text>
        <Image source={icons.lefticon} style={styles.icon} />
      </TouchableOpacity>

      {expanded && (
        <View style={styles.subList}>
          {inventoryOptions.map((item, index) => (
            <TouchableOpacity key={index}>
              <Text style={styles.subItem}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Inventory;

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
