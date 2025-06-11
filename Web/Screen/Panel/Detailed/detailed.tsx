import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from './header';
import Content1 from './content1';
import Content2 from './content2';

const detailed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Header />
      </View>
      <View style={styles.item}>
        <Content1 />
      </View>
      <View style={styles.item}>
        <Content2 />
      </View>
    </View>
  );
};

export default detailed;

const styles = StyleSheet.create({
  container: {margin: 12, backgroundColor: '#f0f0f0'},
  item: {marginBottom: 10},
});
