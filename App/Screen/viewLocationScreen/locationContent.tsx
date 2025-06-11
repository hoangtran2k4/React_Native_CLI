import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  finalCode: string;
};
const locationContent = ({finalCode}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{finalCode}</Text>
    </View>
  );
};

export default locationContent;

const styles = StyleSheet.create({
  container: {},
});
