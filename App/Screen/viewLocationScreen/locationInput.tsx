import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BarcodeScannerScreen from '../productScreen/Barcode';

type Props = {
  setFinalCode: (code: string) => void;
};
const LocationContent = ({setFinalCode}: Props) => {
  const [code, setCode] = useState('');
  const handleSubmit = () => {
    setFinalCode(code);
    setCode('');
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <View style={styles.scanBox}>
        <Text style={styles.scanTitle}>Quét mã vị trí</Text>
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
  );
};

export default LocationContent;

const styles = StyleSheet.create({
  container: {},
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
