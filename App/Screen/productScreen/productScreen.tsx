import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import LocationProduct from '../productScreen/locationProduct';
import InfoProduct from '../productScreen/infoProduct';
import BarcodeScannerScreen from './Barcode';
import Package from './Package';
import {RootStackParamList} from '../../storage/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import withAuth from '../../../components/withAuth';
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'home'>;
const ProductScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedTab, setSelectedTab] = useState<
    'thong_tin' | 'vi_tri' | 'kien_hang'
  >('thong_tin');
  const [code, setCode] = useState('');
  const [finalCode, setFinalCode] = useState('');
  const handleSubmit = () => {
    setFinalCode(code);
    setCode('');
    Keyboard.dismiss();
  };
  useEffect(() => {
    const requestCameraPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'Ứng dụng cần quyền truy cập camera để quét mã.',
              buttonNeutral: 'Hỏi lại sau',
              buttonNegative: 'Từ chối',
              buttonPositive: 'Cho phép',
            },
          );
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Camera permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestCameraPermission();
  }, []);
  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.button}>
              <Text style={styles.headerText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>Xem sản phẩm</Text>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('location')}
                style={styles.button}>
                <Text style={styles.headerText}>Button</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.scanBox}>
          <Text style={styles.scanTitle}>Quét mã sản phẩm</Text>
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
        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            onPress={() => setSelectedTab('thong_tin')}
            style={[
              styles.tabButton,
              selectedTab === 'thong_tin' && styles.activeTab,
            ]}>
            <Text style={styles.tabText}>Thông tin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab('vi_tri')}
            style={[
              styles.tabButton,
              selectedTab === 'vi_tri' && styles.activeTab,
            ]}>
            <Text style={styles.tabText}>Vị trí</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab('kien_hang')}
            style={[
              styles.tabButton,
              selectedTab === 'kien_hang' && styles.activeTab,
            ]}>
            <Text style={styles.tabText}>Kiện hàng</Text>
          </TouchableOpacity>
        </View>
        {/* Content */}
        <View style={styles.content}>
          {selectedTab === 'thong_tin' && <InfoProduct code={finalCode} />}
          {selectedTab === 'vi_tri' && <LocationProduct code={finalCode} />}
          {selectedTab === 'kien_hang' && <Package />}
        </View>
      </View>
    </>
  );
};
export default withAuth(ProductScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#4a6783',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  button: {
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
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
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    paddingHorizontal: 12,
    marginHorizontal: 20,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#4a6783',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 10,
  },
});
