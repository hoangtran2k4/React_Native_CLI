/* eslint-disable react-native/no-inline-styles */

import {FlatList, StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const LocationProduct = ({code}: {code: string}) => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder={`Tìm kiếm mã: ${code}`} style={styles.input} />
      </View>
      <View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={() => (
            <View style={styles.cardItem}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{marginVertical: 12}}>
                  <Text>Vị trí: 01.01.2</Text>
                  <Text>Tình trạng: New</Text>
                  <Text>Đối tác: KPL - Kids Plaza</Text>
                </View>
                <View style={{marginVertical: 10}}>
                  <Text>Lấy được</Text>
                  <Text>Đơn vị: HOP</Text>
                </View>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Tồn :88</Text>
                <Text>Chờ sản xuất:0</Text>
                <Text>Khả dụng:103</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default LocationProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 50,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  cardItem: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
});
