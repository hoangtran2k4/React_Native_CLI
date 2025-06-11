import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/navigation';
import withAuth from '../../components/withAuth';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('signOut')}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('product')}>
          <Text>Product</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withAuth(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contents: {
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
  },
});
