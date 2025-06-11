import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import RotationHeader from './rotationHeader';
import RotationInput from './rotationInput';
import RotationContent from './rotationContent';

const RotationScreen = () => {
  const [finalCode, setFinalCode] = useState('');

  return (
    <View style={styles.container}>
      <RotationHeader />
      <RotationInput setFinalCode={setFinalCode} />
      <RotationContent finalCode={finalCode} />
    </View>
  );
};

export default RotationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
