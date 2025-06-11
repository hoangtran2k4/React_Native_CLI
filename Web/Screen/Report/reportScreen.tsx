import {
  useWindowDimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Productivity from './productivity';
import Inventory from './inventory';
import Operate from './operate';
import Import_export from './Import_export';
import Storage from './storage';

const ReportScreen = () => {
  const {width} = useWindowDimensions();

  const numColumns = width >= 800 ? 4 : 1;
  const cardWidth = `${100 / numColumns}%` as `${number}%`;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Text style={styles.title}>Báo cáo</Text>

        <View style={styles.cardContainer}>
          {[Inventory, Import_export, Storage, Operate, Productivity].map(
            (Component, index) => (
              <View key={index} style={[styles.card, {width: cardWidth}]}>
                <Component />
              </View>
            ),
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    margin: 12,
  },
  scroll: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 32,
  },
  title: {
    fontSize: 20,
    color: 'blue',
    marginBottom: 12,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 12,
    paddingHorizontal: 6,
  },
});
