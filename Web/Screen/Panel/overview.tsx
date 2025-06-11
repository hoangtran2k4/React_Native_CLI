import React from 'react';
import {
  // Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
// const {height: windowHeight} = Dimensions.get('window');

const Overview = () => {
  const {width} = useWindowDimensions();
  const isSmallScreen = width < 600;

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View
            style={[
              styles.orderSection,
              isSmallScreen
                ? styles.orderSectionColumn
                : styles.orderSectionRow,
            ]}>
            <View
              style={[
                styles.orderBox,
                isSmallScreen
                  ? styles.orderBoxFullWidth
                  : styles.orderBoxThirdWidth,
              ]}>
              <Text style={styles.orderNumber}>22</Text>
              <Text style={styles.orderSum}>35</Text>
              <Text style={styles.orderLabel}>Đơn hàng</Text>
            </View>
            <View
              style={[
                styles.orderBox,
                isSmallScreen
                  ? styles.orderBoxFullWidth
                  : styles.orderBoxThirdWidth,
              ]}>
              <Text style={styles.orderNumber}>22</Text>
              <Text style={styles.orderSum}>35</Text>
              <Text style={styles.orderLabel}>Đơn hàng</Text>
            </View>
            <View
              style={[
                styles.orderBox,
                isSmallScreen
                  ? styles.orderBoxFullWidth
                  : styles.orderBoxThirdWidth,
              ]}>
              <Text style={styles.orderNumber}>22</Text>
              <Text style={styles.orderSum}>35</Text>
              <Text style={styles.orderLabel}>Đơn hàng</Text>
            </View>
          </View>

          <View
            style={[
              styles.contentSection,
              isSmallScreen
                ? styles.contentSectionColumn
                : styles.contentSectionRow,
            ]}>
            <View
              style={[
                styles.contentBox,
                isSmallScreen
                  ? styles.contentBoxFullWidth
                  : styles.contentBoxAuto,
              ]}>
              <View>
                <View style={styles.line}>
                  <Text style={styles.Title}>Đơn hàng</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Mới</Text>
                  <Text style={styles.value}>11(18)</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Chờ</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Chờ xác định vị trí</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Xác định vị trí một phần</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Sẵn sàng lấy hàng</Text>
                  <Text style={styles.value}>5(9)</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đang lấy hàng</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đã lấy hàng</Text>
                  <Text style={styles.value}>1(2)</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đang đóng gói</Text>
                  <Text style={styles.value}>1(2)</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Sẵn sàng giao hàng</Text>
                  <Text style={styles.value}>1(1)</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đang giao</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đã giao</Text>
                  <Text style={styles.value}>0</Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.contentBoxs,
                isSmallScreen
                  ? styles.contentBoxFullWidth
                  : styles.contentBoxAuto,
              ]}>
              <View style={styles.contentBox}>
                <View style={styles.line}>
                  <Text style={styles.Title}>Đơn nhập</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Mới</Text>
                  <Text style={styles.value}>434</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đã nhận</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Chờ lưu kho</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đang lưu kho</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đã lưu kho</Text>
                  <Text style={styles.value}>0</Text>
                </View>
              </View>
              <View style={styles.contentBox}>
                <Text style={styles.Title}>Chuyển kho</Text>
                <View style={styles.line}>
                  <Text style={styles.label}>Mới</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đang sử lý</Text>
                  <Text style={styles.value}>0</Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.contentBox,
                isSmallScreen
                  ? styles.contentBoxFullWidth
                  : styles.contentBoxAuto,
              ]}>
              <Text style={styles.Title}>Công việc</Text>
            </View>
          </View>

          <View style={styles.summarySection}>
            <Text style={styles.Title}>Số lượng sản phẩm xuất/nhập</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      <SafeAreaView>
        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View
            style={[
              styles.orderSection,
              isSmallScreen
                ? styles.orderSectionColumn
                : styles.orderSectionRow,
            ]}>
            <View
              style={[
                styles.orderBox,
                isSmallScreen
                  ? styles.orderBoxFullWidth
                  : styles.orderBoxThirdWidth,
              ]}>
              <Text style={styles.orderNumber}>22</Text>
              <Text style={styles.orderSum}>35</Text>
              <Text style={styles.orderLabel}>Đơn hàng</Text>
            </View>
            <View
              style={[
                styles.orderBox,
                isSmallScreen
                  ? styles.orderBoxFullWidth
                  : styles.orderBoxThirdWidth,
              ]}>
              <Text style={styles.orderNumber}>22</Text>
              <Text style={styles.orderSum}>35</Text>
              <Text style={styles.orderLabel}>Đơn hàng</Text>
            </View>
            <View
              style={[
                styles.orderBox,
                isSmallScreen
                  ? styles.orderBoxFullWidth
                  : styles.orderBoxThirdWidth,
              ]}>
              <Text style={styles.orderNumber}>22</Text>
              <Text style={styles.orderSum}>35</Text>
              <Text style={styles.orderLabel}>Đơn hàng</Text>
            </View>
          </View>

          <View
            style={[
              styles.contentSection,
              isSmallScreen
                ? styles.contentSectionColumn
                : styles.contentSectionRow,
            ]}>
            <View
              style={[
                styles.contentBox,
                isSmallScreen
                  ? styles.contentBoxFullWidth
                  : styles.contentBoxAuto,
              ]}>
              <View>
                <View style={styles.line}>
                  <Text style={styles.Title}>Đơn hàng</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Mới</Text>
                  <Text style={styles.value}>11(18)</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Chờ</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Chờ xác định vị trí</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Xác định vị trí một phần</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Sẵn sàng lấy hàng</Text>
                  <Text style={styles.value}>5(9)</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đang lấy hàng</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đã lấy hàng</Text>
                  <Text style={styles.value}>1(2)</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đang đóng gói</Text>
                  <Text style={styles.value}>1(2)</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Sẵn sàng giao hàng</Text>
                  <Text style={styles.value}>1(1)</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đang giao</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đã giao</Text>
                  <Text style={styles.value}>0</Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.contentBoxs,
                isSmallScreen
                  ? styles.contentBoxFullWidth
                  : styles.contentBoxAuto,
              ]}>
              <View style={styles.contentBox}>
                <View style={styles.line}>
                  <Text style={styles.Title}>Đơn nhập</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Mới</Text>
                  <Text style={styles.value}>434</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đã nhận</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Chờ lưu kho</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đang lưu kho</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đã lưu kho</Text>
                  <Text style={styles.value}>0</Text>
                </View>
              </View>
              <View style={styles.contentBox}>
                <Text style={styles.Title}>Chuyển kho</Text>
                <View style={styles.line}>
                  <Text style={styles.label}>Mới</Text>
                  <Text style={styles.value}>0</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.label}>Đang sử lý</Text>
                  <Text style={styles.value}>0</Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.contentBox,
                isSmallScreen
                  ? styles.contentBoxFullWidth
                  : styles.contentBoxAuto,
              ]}>
              <Text style={styles.Title}>Công việc</Text>
            </View>
          </View>

          <View style={styles.summarySection}>
            <Text style={styles.Title}>Số lượng sản phẩm xuất/nhập</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  //   container: {
  //
  //     padding: 10,
  //     marginBottom: 10,
  //   },
  container: {flex: 1},
  scroll: {
    // height: windowHeight,
  },
  orderSection: {
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  orderSectionRow: {
    flexDirection: 'row',
  },
  orderSectionColumn: {
    flexDirection: 'column',
  },
  orderBox: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
  orderBoxThirdWidth: {
    width: '33%',
  },
  orderBoxFullWidth: {
    width: '100%',
  },
  orderLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  orderNumber: {
    color: 'green',
    fontSize: 25,
    fontWeight: 'bold',
  },
  orderSum: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  contentSection: {
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  contentSectionRow: {
    flexDirection: 'row',
  },
  contentSectionColumn: {
    flexDirection: 'column',
  },
  contentBox: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    marginBottom: 20,
    flex: 1,
  },
  contentBoxs: {
    backgroundColor: '#f0f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
    flex: 1,
  },
  contentBoxAuto: {
    width: 'auto',
  },
  contentBoxFullWidth: {
    width: '100%',
  },
  summarySection: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  Title: {
    fontSize: 16,
    color: 'blue',
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
  value: {
    fontSize: 16,
    marginRight: 10,
  },
});
