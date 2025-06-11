import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Location = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('lay_duoc'); // mặc định chọn "Lấy được"

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}>
            <Text style={styles.headerText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Loại vị trí</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentTitle}>Loại vị trí:</Text>

        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setSelected('lay_duoc')}>
          <View style={styles.radioCircle}>
            {selected === 'lay_duoc' && <View style={styles.radioDot} />}
          </View>
          <Text style={styles.radioText}>Lấy được</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setSelected('khong_lay_duoc')}>
          <View style={styles.radioCircle}>
            {selected === 'khong_lay_duoc' && <View style={styles.radioDot} />}
          </View>
          <Text style={styles.radioText}>Không lấy được</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Cập nhật</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    backgroundColor: '#4a6783',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 40,
  },
  button: {
    marginRight: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffff',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4a6783',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  radioText: {
    fontSize: 16,
    color: '#ffff',
  },
  buttonContainer: {
    backgroundColor: '#666',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
