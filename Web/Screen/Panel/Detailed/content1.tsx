import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const COLUMN_HEADERS = [
  'Mới',
  'Chờ xác định vị trí',
  'Xác định vị trí một phần',
  'Sẵn sàng lấy hàng',
  'Đang lấy hàng',
  'Đã lấy hàng',
  'Đang đóng gói',
  'Sẵn sàng bàn giao',
  'Đã bàn giao vận chuyển',
  'Lấy hàng thành công',
];

const ROW_LABELS = ['N+0', 'N+1', 'N+2', 'N+3', 'N+4', 'N5+'];

const DATA: Record<string, string[]> = {
  'N+0': ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
  'N+1': ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
  'N+2': ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
  'N+3': ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
  'N+4': ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
  'N5+': [
    '-',
    '11 (18)',
    '-',
    '-',
    '5 (9)',
    '4 (5)',
    '1 (2)',
    '1 (1)',
    '-',
    '-',
  ],
};

const DelayOrderTable = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Đơn hàng trễ theo ngày</Text>
        <Text style={styles.subtitle}>Số ngày trễ lớn nhất: 72</Text>
      </View>

      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View>
          {/* Header Row */}
          <View style={styles.row}>
            <View style={styles.cellLabel}>
              <Text />
            </View>
            {COLUMN_HEADERS.map((header, colIndex) => (
              <View style={styles.cell} key={colIndex}>
                <Text style={styles.headerText}>{header}</Text>
              </View>
            ))}
          </View>

          {/* Data Rows */}
          {ROW_LABELS.map((label, rowIndex) => (
            <View style={styles.row} key={rowIndex}>
              <View style={styles.cellLabel}>
                <Text style={styles.rowLabel}>{label}</Text>
              </View>
              {DATA[label].map((value, colIndex) => (
                <View style={styles.cells} key={colIndex}>
                  <Text
                    style={[
                      styles.cellText,
                      value !== '-' && styles.valueHighlight,
                    ]}>
                    {value}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DelayOrderTable;

const CELL_WIDTH = 140;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#ffff',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    color: '#3366cc',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#3366cc',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  cellLabel: {
    width: 60,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cell: {
    width: CELL_WIDTH,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f2f2f2',
  },
  cells: {
    width: CELL_WIDTH,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  headerText: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 13,
  },
  rowLabel: {
    fontWeight: '500',
    fontSize: 13,
  },
  cellText: {
    fontSize: 13,
  },
  valueHighlight: {
    color: '#3366cc',
    fontWeight: '500',
  },
});
