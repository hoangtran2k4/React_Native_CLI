import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import icons from '../../../shared/constans/icons';
import {RootStackParamList} from '../../storage/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'home'>;
export default function HomeContent() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('checkIn')}
          style={styles.button}>
          <Image source={icons.receive} style={styles.icon} />
          <Text style={styles.text}>Nhận hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('storage')}
          style={styles.button}>
          <Image source={icons.storage} style={styles.icon} />
          <Text style={styles.text}>Lưu kho</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('getgoods')}
          style={styles.button}>
          <Image source={icons.pickUp} style={styles.icon} />
          <Text style={styles.text}>Lấy hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('locationScreen')}
          style={styles.button}>
          <Image source={icons.itemLcation} style={styles.icon} />
          <Text style={styles.text}>Xem vị trí</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('rotation')}
          style={styles.button}>
          <Image source={icons.rotatory} style={styles.icon} />
          <Text style={styles.text}>Luân chuyển</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Sắp xếp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Nhận hàng trả</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Lưu kho hàng hủy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Lấy lại hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Kiểm hàng thiếu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Cập nhật kích thước</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Chuyển đổi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Bàn giao</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Hàng tồn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Hoàn tất lấy hàng </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Kiểm kê</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Hàng thất lạc</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Phân loại hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Đóng gói - vận đơn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Kiểm điểm thường nhật</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Gom hàng/ Xả lẻ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>QC hàng hóa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.arrange} style={styles.icon} />
          <Text style={styles.text}>Niêm phong hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('product')}
          style={styles.button}>
          <Image source={icons.product} style={styles.icon} />
          <Text style={styles.text}>Xem sản phẩm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  button: {
    width: 100,
    height: 110,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  icon: {
    width: 60,
    height: 60,
    marginBottom: 6,
    resizeMode: 'contain',
  },

  text: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});
