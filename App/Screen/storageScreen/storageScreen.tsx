import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BarcodeScannerScreen from '../productScreen/Barcode';
const StorageScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [code, setCode] = useState('');
  const [finalCode, setFinalCode] = useState('');
  const handleSubmit = () => {
    setFinalCode(code);
    setCode('');
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.headerSection}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <Text style={styles.headerButtonText}>Back</Text>
            </TouchableOpacity>

            <View style={styles.headerSectionCenter}>
              <Text style={styles.headerTitle}>Lưu kho</Text>
            </View>
          </View>
          <View style={styles.headerSectionRight}>
            <TouchableOpacity>
              <Text style={styles.headerButtonText}>Làm mới</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkboxWrapper}
              onPress={() => setIsChecked(!isChecked)}>
              <View
                style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
                {isChecked && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.headerButtonText}>SL</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.headerButtonText}>Kết thúc</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.scanBox}>
          <Text style={styles.scanTitle}>Quét thiết bị chứa hàng</Text>
          <View style={styles.scanInputContainer}>
            <TextInput
              style={styles.input}
              value={code}
              onChangeText={setCode}
              placeholder=""
              onSubmitEditing={handleSubmit}
            />
            <TouchableOpacity style={styles.scanButton} onPress={handleSubmit}>
              <Text>Enter</Text>
            </TouchableOpacity>
          </View>
          <BarcodeScannerScreen
            onScan={(scannedCode: string) => {
              setCode(scannedCode);
              setFinalCode(scannedCode);
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default StorageScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#4a6783',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 40,
  },
  headerSection: {
    flexDirection: 'row',
    width: '70%',
  },
  headerSectionCenter: {
    alignItems: 'flex-start',
  },
  headerSectionRight: {
    width: '30%',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  headerButtonText: {
    color: '#fff',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
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
  backButton: {
    marginRight: 20,
  },
  scanBox: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanTitle: {
    color: 'orange',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scanInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 1,
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    maxWidth: 150,
  },
  scanButton: {
    backgroundColor: '#ffff',
    marginLeft: 10,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
