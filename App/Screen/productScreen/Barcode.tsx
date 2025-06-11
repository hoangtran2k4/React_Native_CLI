/* eslint-disable curly */
import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  AppState,
  AppStateStatus,
} from 'react-native';
import {
  Camera,
  useCameraDevices,
  useCodeScanner,
  getCameraDevice,
} from 'react-native-vision-camera';
interface Props {
  onScan: (code: string) => void;
}
const BarcodeScannerScreen: React.FC<Props> = ({onScan}) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [isAppActive, setIsAppActive] = useState(true);
  const lastScanned = useRef<string | null>(null);
  const devices = useCameraDevices();
  const device = getCameraDevice(devices, 'back');
  // Theo dõi trạng thái app
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      (nextAppState: AppStateStatus) => {
        setIsAppActive(nextAppState === 'active');
      },
    );
    return () => subscription.remove();
  }, []);
  // Xin quyền camera
  useEffect(() => {
    const getPermissions = async () => {
      const permission = await Camera.requestCameraPermission();
      setHasPermission(permission === 'granted');
    };
    getPermissions();
  }, []);
  const codeScanner = useCodeScanner({
    codeTypes: ['ean-13'],
    onCodeScanned: codes => {
      for (const code of codes) {
        if (code.value && code.value !== lastScanned.current) {
          lastScanned.current = code.value;
          onScan(code.value);
          setTimeout(() => {
            lastScanned.current = null;
          }, 3000);
        }
      }
    },
  });
  if (device == null) return <Text>Loading camera...</Text>;
  if (!hasPermission) return <Text>No camera permission</Text>;
  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isAppActive}
        codeScanner={codeScanner}
        onError={err => {
          console.error('Camera error:', err);
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default BarcodeScannerScreen;
