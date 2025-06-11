import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import HomeHeader from './homeHeader';
import SideBar from '../Sidebar/sideBar';
import ScreenRenderer from '../HomeScreen/ScreenRenderer';
import withAuth from '../../../components/withAuth';

// const {height: windowHeight} = Dimensions.get('window');

const HomeScreen = () => {
  const [sidebarState, setSidebarState] = useState<
    'hidden' | 'collapsed' | 'expanded'
  >('hidden');
  const [activeKey, setActiveScreen] = useState<string | null>(null);

  useEffect(() => {
    const updateLayout = () => {
      const isLarge = Dimensions.get('window').width >= 768;
      setSidebarState(isLarge ? 'collapsed' : 'hidden');
    };
    updateLayout();
    const sub = Dimensions.addEventListener('change', updateLayout);
    return () => sub.remove();
  }, []);

  const toggleSidebar = () => {
    setSidebarState(prev =>
      prev === 'hidden'
        ? 'collapsed'
        : prev === 'collapsed'
        ? 'expanded'
        : 'collapsed',
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HomeHeader onMenuPress={toggleSidebar} />
      </View>
      <View style={styles.main}>
        <View style={styles.left}>
          {sidebarState !== 'hidden' && (
            <View style={styles.sidebarWrapper}>
              <SideBar
                state={sidebarState}
                setActiveScreen={setActiveScreen}
                onToggleExpand={() => setSidebarState('expanded')}
                setSidebarState={setSidebarState}
              />
            </View>
          )}
        </View>
        <View style={styles.content}>
          <ScrollView
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <ScreenRenderer activeKey={activeKey} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default withAuth(HomeScreen);

const styles = StyleSheet.create({
  container: {backgroundColor: '#f0f0f0'},
  header: {boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'},
  main: {flexDirection: 'row'},
  left: {},
  sidebarWrapper: {},
  content: {
    flex: 1,
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  scroll: {
    flexGrow: 1,
    padding: 0,
    paddingBottom: 40, // chừa chỗ phía dưới nếu cần
  },
});
