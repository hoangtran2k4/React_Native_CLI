import {StyleSheet, View} from 'react-native';
import React from 'react';
import HeaderGoods from './headerGoods';
import GetGoodsInput from './getGoodsInput';

export default function getGoodsScreen() {
  return (
    <View style={styles.container}>
      <HeaderGoods />
      <GetGoodsInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
