import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function HeaderGoods() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.button}>
            <Text style={styles.buttonTile}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Lấy hàng</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTile}>Làm mới</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  headerContainer: {
    padding: 10,
    backgroundColor: '#4a6783',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    padding: 5,
  },
  buttonTile: {
    color: '#ffff',
  },
});
