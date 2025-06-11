/* eslint-disable no-alert */
import {ScrollView, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const HEADERS = ['Tổng cộng', 'N+0', 'N+1', 'N+2', 'N+3', 'N+4', 'N5+'];
const COLUMNS = ['#', 'Đối tác', '-', '-', '-', '-', '-', '-', '-'];

const DATA = [
  {
    index: 1,
    partner: 'KPL-Kids Plaza',
    values: ['22 (35)', '-', '-', '-', '-', '-', '22 (35)'],
  },
];

const Content2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đơn hàng trễ theo đối tác</Text>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View>
          {/* Header Group Row */}
          <View style={styles.groupHeaderRow}>
            <View style={styles.headerGroupCell} />
            <View style={styles.headerGroupCell} />
            {HEADERS.map((header, idx) => (
              <View key={idx} style={styles.headerGroupCell}>
                <Text style={styles.boldText}>{header}</Text>
              </View>
            ))}
          </View>

          {/* Column Titles Row */}
          <View style={styles.headerRow}>
            {COLUMNS.map((col, idx) => (
              <View key={idx} style={styles.headerCell}>
                <Text style={styles.boldText}>{col}</Text>
              </View>
            ))}
          </View>

          {/* Data Rows */}
          {DATA.map((item, rowIndex) => (
            <View key={rowIndex} style={styles.dataRow}>
              <View style={styles.cell}>
                <Text style={styles.boldText}>{item.index}</Text>
              </View>
              <View style={styles.cell}>
                <Text>{item.partner}</Text>
              </View>

              {item.values.map((val, idx) => (
                <View key={idx} style={styles.cell}>
                  {val === '-' ? (
                    <Text style={styles.dash}>-</Text>
                  ) : (
                    <Pressable onPress={() => alert(`Chi tiết: ${val}`)}>
                      <Text style={styles.link}>{val}</Text>
                    </Pressable>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Content2;

const CELL_WIDTH = 140;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#ffff',
    flex: 1,
    marginTop: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontWeight: 'bold',
    color: '#3366cc',
    fontSize: 16,
    marginBottom: 12,
  },
  groupHeaderRow: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
  },
  headerGroupCell: {
    width: CELL_WIDTH,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#ccc',
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f2f4f8',
  },
  headerCell: {
    width: CELL_WIDTH,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  dataRow: {
    flexDirection: 'row',
  },
  cell: {
    width: CELL_WIDTH,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  dash: {
    fontSize: 13,
    color: '#555',
  },
  link: {
    color: '#3366cc',
    fontSize: 13,
  },
});
