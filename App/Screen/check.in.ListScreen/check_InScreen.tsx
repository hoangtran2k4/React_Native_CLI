/* eslint-disable react/self-closing-comp */
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
export default function CheckInScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.button}>
            <Text style={styles.buttonTile}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Danh sách check-in</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTile}>Làm mới</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TextInput
          placeholder="Tìm theo mã check-in hoặc mã nhập kho"
          style={styles.input}></TextInput>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => (
          <View style={styles.cardItem}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>19:20</Text>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.infoContainer}>
                <Text style={styles.companyName}>
                  Công ty cổ phần Kids Plaza
                </Text>
                <Text style={styles.orderCode}>CKSIRKLV1IP434480 - KPL</Text>
                <Text style={styles.deliveryCode}>
                  LRKPLV1IP434 - HNOTO/04-25/01899
                </Text>
              </View>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.buttonText}>Nhận hàng</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

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
    paddingHorizontal: 15,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  button: {},
  buttonTile: {
    color: '#fff',
    fontSize: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
  },
  cardItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  timeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    width: 40,
  },
  timeText: {
    color: 'gray',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flex: 1,
  },
  companyName: {
    fontSize: 14,
    color: '#333',
  },
  orderCode: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#007BFF',
    marginVertical: 4,
  },
  deliveryCode: {
    fontSize: 12,
    color: '#666',
  },
  actionButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});
