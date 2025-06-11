import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import loginService from '../../shared/services/user.Service';
import {setTokens} from '../../shared/common/token-validity';
export default function LoginScreen() {
  const [employeeCode, setEmployeeCode] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const res = await loginService.login(employeeCode, password);
      if (res.success && res.data) {
        const {accessToken, refreshToken, expiresIn} = res.data;
        setTokens(accessToken, refreshToken, expiresIn);
        console.log('Tokens have been set, redirecting...');
        navigation.reset({
          index: 0,
          routes: [{name: 'home' as never}],
        });
      } else {
        Alert.alert(
          'Đăng nhập thất bại',
          res.message || 'Vui lòng kiểm tra lại',
        );
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Lỗi kết nối', 'Có lỗi xảy ra trong quá trình đăng nhập');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Mã nhân viên"
        value={employeeCode}
        onChangeText={setEmployeeCode}
        style={styles.input}
      />
      <TextInput
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Đăng nhập" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    marginTop: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    marginBottom: 12,
    padding: 10,
    borderRadius: 6,
  },
});
