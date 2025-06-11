import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const LocationHeader = () => {
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
          <Text style={styles.headerTitle}>Xem vị trí</Text>
        </View>
      </View>
    </View>
  );
};

export default LocationHeader;

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    padding: 10,
    backgroundColor: '#4a6783',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    padding: 5,
  },
  buttonTile: {
    color: '#ffff',
    marginRight: 20,
  },
});
