/* eslint-disable quotes */
import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

export default function Package() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder={`Tìm kiếm `} style={styles.input} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
