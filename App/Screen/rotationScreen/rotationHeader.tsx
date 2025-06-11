import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const RotationHeader = () => {
  const navigator = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Luân chuyển</Text>
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={styles.checkboxWrapper}
              onPress={() => setIsChecked(!isChecked)}>
              <View
                style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
                {isChecked && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.headerButtonText}>SL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigator.goBack()}
              style={styles.button}>
              <Text style={styles.buttonTile}>Kết thúc</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RotationHeader;

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
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerButtonText: {
    color: '#fff',
  },
  button: {
    padding: 5,
  },
  buttonTile: {
    color: '#ffff',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  checkboxChecked: {
    backgroundColor: 'red',
  },
  checkmark: {
    color: '#ffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
