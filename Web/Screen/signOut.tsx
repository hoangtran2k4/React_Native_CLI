import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {logout} from '../../shared/common/token-validity';

export default function SignOut() {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      await logout();
      navigation.reset({
        index: 0,
        routes: [{name: 'login' as never}],
      });
    } catch (error) {
      console.error('Lỗi khi đăng xuất:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bạn có chắc muốn đăng xuất không?</Text>
      <Button title="Đăng xuất" onPress={handleSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {marginBottom: 16, fontSize: 16},
});
//  {/* Tồn kho */}
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => toggleExpandSub('stock')}>
//               <Image source={icons.import} style={styles.icons} />
//               <Text style={styles.label}>Tồn kho</Text>
//               <Animated.Image
//                 source={icons.lefticon}
//                 style={[
//                   styles.lefticons,
//                   {transform: [{rotate: getRotation(rotationStock)}]},
//                 ]}
//               />
//             </TouchableOpacity>
//             {expandStock && (
//               <TouchableOpacity style={[styles.button]}>
//                 <Text style={styles.subLabel}>Điều chỉnh tồn</Text>
//               </TouchableOpacity>
//             )}
//             {/* Vận chuyển */}
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => toggleExpandSub('transport')}>
//               <Image source={icons.import} style={styles.icons} />
//               <Text style={styles.label}>Vận chuyển</Text>
//               <Animated.Image
//                 source={icons.lefticon}
//                 style={[
//                   styles.lefticons,
//                   {transform: [{rotate: getRotation(rotationTransport)}]},
//                 ]}
//               />
//             </TouchableOpacity>
//             {expandTransport && (
//               <>
//                 <TouchableOpacity style={[styles.button]}>
//                   <Text style={styles.subLabel}>Bàn giao nhà vận chuyển</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[styles.button]}>
//                   <Text style={styles.subLabel}>Cập nhật đơn xuất</Text>
//                 </TouchableOpacity>
//               </>
//             )}
//             {/* Nâng xuất kho */}
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => toggleExpandSub('nangxuat')}>
//               <Image source={icons.import} style={styles.icons} />
//               <Text style={styles.label}>Nâng xuất kho</Text>
//               <Animated.Image
//                 source={icons.lefticon}
//                 style={[
//                   styles.lefticons,
//                   {transform: [{rotate: getRotation(rotationNangxuat)}]},
//                 ]}
//               />
//             </TouchableOpacity>
//             {expandNangxuat && (
//               <>
//                 <TouchableOpacity style={[styles.button]}>
//                   <Text style={styles.subLabel}>KPI kho</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[styles.button]}>
//                   <Text style={styles.subLabel}>Tính lương cho nhân viên</Text>
//                 </TouchableOpacity>
//               </>
//             )}
//             {/* Tiện ích */}
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => toggleExpandSub('tienich')}>
//               <Image source={icons.import} style={styles.icons} />
//               <Text style={styles.label}>Tiện ích</Text>
//               <Animated.Image
//                 source={icons.lefticon}
//                 style={[
//                   styles.lefticons,
//                   {transform: [{rotate: getRotation(rotationTienIch)}]},
//                 ]}
//               />
//             </TouchableOpacity>
//             {expandTienIch && (
//               <>
//                 <TouchableOpacity style={[styles.button]}>
//                   <Text style={styles.subLabel}>KPI kho</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[styles.button]}>
//                   <Text style={styles.subLabel}>Tính lương cho nhân viên</Text>
//                 </TouchableOpacity>
//               </>
//             )}
//             {/* Kiểm kê */}
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => toggleExpandSub('kiemke')}>
//               <Image source={icons.import} style={styles.icons} />
//               <Text style={styles.label}>Kiểm kê</Text>
//               <Animated.Image
//                 source={icons.lefticon}
//                 style={[
//                   styles.lefticons,
//                   {transform: [{rotate: getRotation(rotationKiemKe)}]},
//                 ]}
//               />
//             </TouchableOpacity>
//             {expandKiemKe && (
//               <>
//                 <TouchableOpacity style={[styles.button]}>
//                   <Text style={styles.subLabel}>KPI kho</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[styles.button]}>
//                   <Text style={styles.subLabel}>Tính lương cho nhân viên</Text>
//                 </TouchableOpacity>
//               </>
//             )}