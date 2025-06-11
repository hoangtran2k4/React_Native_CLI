import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  finalCode: string;
};

const RotationContent = ({finalCode}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{finalCode}</Text>
    </View>
  );
};

export default RotationContent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
