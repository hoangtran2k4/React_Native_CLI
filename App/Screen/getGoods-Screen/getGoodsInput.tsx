import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

export default function getGoodsContent() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput placeholder="Tìm theo mã OR" style={styles.input} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginBottom: 10,
    borderRadius: 8,
  },
});
