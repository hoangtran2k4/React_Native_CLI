import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import icons from '../../../shared/constans/icons';

interface HomeHeaderProps {
  onMenuPress: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({onMenuPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={onMenuPress}>
          <Image source={icons.menuicon} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>WARENA</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.userText}>User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    width: 18,
    height: 18,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  userText: {
    fontSize: 12,
  },
});
