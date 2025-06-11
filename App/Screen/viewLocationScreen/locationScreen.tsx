import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import LocationHeader from './locationHeader';
import LocationInput from './locationInput';
import LocationContent from './locationContent';

const LocationScreem = () => {
  const [finalCode, setFinalCode] = useState('');
  return (
    <View style={styles.container}>
      <LocationHeader />
      <LocationInput setFinalCode={setFinalCode} />
      <LocationContent finalCode={finalCode} />
    </View>
  );
};

export default LocationScreem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
