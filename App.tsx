import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import homeScreen from './App/Screen/homeScreen/homeScreen';
import productScreen from './App/Screen/productScreen/productScreen';
import LoginScreen from './Web/Screen/loginScreens';
import SignOut from './Web/Screen/signOut';
import CheckInScreen from './App/Screen/check.in.ListScreen/check_InScreen';
import StorageScreen from './App/Screen/storageScreen/storageScreen';
import location from './App/Screen/productScreen/location';
import getGoodsScreen from './App/Screen/getGoods-Screen/getGoodsScreen';
import locationScreen from './App/Screen/viewLocationScreen/locationScreen';
import rotationScreen from './App/Screen/rotationScreen/rotationScreen';
import {navigationRef} from './navigation/navigationRef';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={homeScreen} />
        <Stack.Screen name="product" component={productScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signOut" component={SignOut} />
        <Stack.Screen name="checkIn" component={CheckInScreen} />
        <Stack.Screen name="storage" component={StorageScreen} />
        <Stack.Screen name="location" component={location} />
        <Stack.Screen name="getgoods" component={getGoodsScreen} />
        <Stack.Screen name="locationScreen" component={locationScreen} />
        <Stack.Screen name="rotation" component={rotationScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
