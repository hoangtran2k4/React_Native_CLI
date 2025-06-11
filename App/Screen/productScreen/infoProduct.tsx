import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InfoProduct = ({code}: {code: string}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Product Title Section */}
        <View style={styles.productHeader}>
          <View>
            <Text style={styles.productName}>Sữa Aptamil anh s1 900g</Text>
            <Text style={styles.productCode}>5000378998207</Text>
            <Text style={styles.productCode}>{code || '21110001'}</Text>
          </View>
        </View>

        {/* Details Section */}
        <View style={styles.detailRow}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            <Text style={styles.detailText}>Hàng không có serial</Text>
            <Text style={styles.detailText}>Hàng lẻ</Text>
            <Text style={styles.detailText}>Quản lí Lot: không</Text>
            <Text style={styles.detailText}>D*R*C(cm): 1.0*1.0*1.0</Text>
            <Text style={styles.detailText}>Đơn vị: HOP</Text>
            <Text style={styles.detailText}>
              Loại xuất kho: Không định nghĩa
            </Text>
            <Text style={styles.detailText}>HSD tối thiểu nhập kho(%): 0</Text>
            <Text style={styles.detailText}>HSD tối thiểu xuất kho(%): 0</Text>
            <Text style={styles.detailText}>
              HSD tối thiểu xuất kho(ngày): 0
            </Text>
            <Text style={styles.detailText}>Danh mục: Sữa cho bé</Text>
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            <Text style={styles.detailText}>Kho thường</Text>
            <Text style={styles.detailText}>Quản lí HSD: không</Text>
            <Text style={styles.detailText}>Barcode: có</Text>
            <Text style={styles.detailText}>Trọng lượng: 1.0 gram</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default InfoProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
  productHeader: {
    marginBottom: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  productName: {},
  productCode: {
    color: '#333',
  },
  productLot: {
    color: '#333',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftColumn: {
    flex: 1,
    marginRight: 10,
  },
  rightColumn: {
    flex: 1,
  },
  detailText: {
    marginBottom: 4,
    color: '#444',
  },
});
