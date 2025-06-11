import {View, StyleSheet} from 'react-native';
import React from 'react';
import withAuth from '../../../components/withAuth';
import HomeHeader from './homeHeader';
import HomeContent from './homeContent';
const homeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <HomeContent />
    </View>
  );
};

// export default homeScreen;
export default withAuth(homeScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
