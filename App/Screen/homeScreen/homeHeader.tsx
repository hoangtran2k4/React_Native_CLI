import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../../../shared/constans/images';

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text>Fulfillment</Text>
        <Text>Xin chào, {'Ad'}</Text>
      </View>
      <Image style={styles.img} source={images.bannerHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  text: {
    fontSize: 22,
  },
  info: {
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 200,
  },
});
