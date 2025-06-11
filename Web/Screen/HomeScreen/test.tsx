import React, {useState, useEffect} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import HomeHeader from './homeHeader';
import SideBar from '../Sidebar/sideBar';
import Welcome from './welcome';
import Overview from '../Panel/overview';
import Detailed from '../Panel/Detailed/detailed';
import Pickup from '../Panel/pickup';
import SalesChannel from '../Panel/salesChannel';
import EmployeeProductivity from '../Panel/EmployeeProductivity';
import KPI from '../Panel/KPI';
import Warehouselocation from '../Panel/Warehouselocation';
import DataExport from '../DataExport/dataExport';
import ReportScreen from '../Report/reportScreen';
import ConfigurationScreen from '../Setting/Configuration/configurationScreen';
import EquipmentScreen from '../Setting/Equipment/equipmentScreen';
import LocationScreen from '../Setting/Location/locationScreen';
import AccountScreen from '../Setting/User/Account/accountScreen';
import Group_permissionsScreen from '../Setting/User/Group-permissions/group_permissions';
import ProductScreen from '../Product/ProductScreen/productScreen';
import Dimension_ProductScreen from '../Product/Dimension_Product/dimension_ProductScreen';
import PackScreen from '../Operate/Exports/Pack/packScreen';
import ImportsScreen from '../Operate/Imports/importsScreen';
import Pick_upScreen from '../Operate/Exports/Pick_Up/pick_upScreen';
import Pick_UpB2BScreen from '../Operate/Exports/Pick_UpB2B/pick_UpB2BScreen';
import Request_ExportsScreen from '../Operate/Exports/Request_Exports/request_ExportsScreen';
import Delivery_TransportScreen from '../Operate/Transport/Delivery_Transport/delivery_TransportScreen';
import Update_ExportScreen from '../Operate/Transport/Update_Export/update_ExportScreen';
import InventoryScreen from '../Operate/Inventory/inventoryScreen';
import Employee_PayrollScreen from '../Operate/Productivity/Employee_Payroll/employee_PayrollScreen';
import KPIScreen from '../Operate/Productivity/KPI/KPIScreen';
import Inventory_managementScreen from '../Operate/Inventory_management/inventory_managementScreen';
import Storage_EquipmentScreen from '../Operate/Utilities/Storage_Equipment/storage_EquipmentScreen';
import Product_locationScreen from '../Operate/Utilities/Product _Location/product_locationScreen';
import Location_InformationScreen from '../Operate/Utilities/Location_Information/location_InformationScreen';
import Product_HistoryScreen from '../Operate/Utilities/Product_History/product_HistoryScreen';
import Working_SessionScreen from '../Operate/Utilities/Working_Session/working_SessionScreen';
import Order_Of_ShipmentScreen from '../Operate/Utilities/Order_Of_Shipment/order_Of_ShipmentScreen';
import Print_LabelsScreen from '../Operate/Utilities/Print_Labels/print_LabelsScreen';
import Update_DocumentsScreen from '../Operate/Utilities/Update_Documents/update_DocumentsScreen';
import Update_Product_Specifications from '../Operate/Utilities/Update_Product_Specifications/update_Product_Specifications';
import Problems_AriseScreen from '../Operate/Utilities/Problems_Arise/problems_AriseScreen';
import Update_TTHHScreen from '../Operate/Utilities/Update_TTHH/update_TTHHScreen';
const {height: windowHeight} = Dimensions.get('window');

const HomeScreen = () => {
  const [sidebarState, setSidebarState] = useState<
    'hidden' | 'collapsed' | 'expanded'
  >('hidden');
  const [activeKey, setActiveScreen] = useState<string | null>(null);
  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = Dimensions.get('window').width;
      const isLarge = screenWidth >= 768;
      setSidebarState(isLarge ? 'collapsed' : 'hidden');
    };

    updateLayout();
    const subscription = Dimensions.addEventListener('change', updateLayout);
    return () => {
      subscription.remove();
    };
  }, []);

  const toggleSidebar = () => {
    if (sidebarState === 'hidden') {
      setSidebarState('collapsed');
    } else if (sidebarState === 'collapsed') {
      setSidebarState('expanded');
    } else {
      setSidebarState('collapsed');
    }
  };
  const renderRightScreen = () => {
    //Bảng điều khiển
    if (activeKey?.includes('overview')) {
      return <Overview />;
    }
    if (activeKey?.includes('detailed')) {
      return <Detailed />;
    }
    if (activeKey?.includes('pickup')) {
      return <Pickup />;
    }
    if (activeKey?.includes('salesChannel')) {
      return <SalesChannel />;
    }
    if (activeKey?.includes('EmployeeProductivity')) {
      return <EmployeeProductivity />;
    }
    if (activeKey?.includes('KPI')) {
      return <KPI />;
    }
    if (activeKey?.includes('Warehouselocation')) {
      return <Warehouselocation />;
    }
    //Báo cáo
    if (activeKey?.includes('report')) {
      return <ReportScreen />;
    }
    // Phiên xuất dữ liệu
    if (activeKey?.includes('exportData')) {
      return <DataExport />;
    }
    //Thiết Lập
    if (activeKey?.includes('configuration')) {
      return <ConfigurationScreen />;
    }
    if (activeKey?.includes('equipment')) {
      return <EquipmentScreen />;
    }
    if (activeKey?.includes('locations')) {
      return <LocationScreen />;
    }
    if (activeKey?.includes('Tài khoản')) {
      return <AccountScreen />;
    }
    if (activeKey?.includes('Nhóm quyền')) {
      return <Group_permissionsScreen />;
    }
    //Vận hành
    ////Nhập kho
    if (activeKey?.includes('Yêu cầu nhập kho')) {
      return <ImportsScreen />;
    }
    ////Xuất kho
    if (activeKey?.includes('Yêu cầu xuất kho')) {
      return <Request_ExportsScreen />;
    }
    if (activeKey?.includes('Lấy hàng B2B')) {
      return <Pick_UpB2BScreen />;
    }
    if (activeKey?.includes('Lấy hàng')) {
      return <Pick_upScreen />;
    }

    if (activeKey?.includes('Đóng gói')) {
      return <PackScreen />;
    }
    ////Tồn kho
    if (activeKey?.includes('Inventory')) {
      return <InventoryScreen />;
    }
    ////Năng xuất kho
    if (activeKey?.includes('KPI kho')) {
      return <KPIScreen />;
    }
    if (activeKey?.includes('Tính lương cho nhân viên')) {
      return <Employee_PayrollScreen />;
    }
    ////Vận chuyển
    if (activeKey?.includes('Bàn giao nhà vận chuyển')) {
      return <Delivery_TransportScreen />;
    }
    if (activeKey?.includes('Cập nhật đơn xuất')) {
      return <Update_ExportScreen />;
    }
    ////Kiểm kê
    if (activeKey?.includes('inventory_management')) {
      return <Inventory_managementScreen />;
    }
    ////Tiện ích
    if (activeKey?.includes('Thiết bị chứa hàng')) {
      return <Storage_EquipmentScreen />;
    }
    if (activeKey?.includes('Vị trí sản phẩm')) {
      return <Product_locationScreen />;
    }
    if (activeKey?.includes('Thông tin vị trí')) {
      return <Location_InformationScreen />;
    }
    if (activeKey?.includes('Lịch sử sản phẩm')) {
      return <Product_HistoryScreen />;
    }
    if (activeKey?.includes('Phiên làm việc')) {
      return <Working_SessionScreen />;
    }
    if (activeKey?.includes('Thứ tự xuất hàng')) {
      return <Order_Of_ShipmentScreen />;
    }
    if (activeKey?.includes('In nhãn')) {
      return <Print_LabelsScreen />;
    }
    if (activeKey?.includes('Cập nhật chứng từ')) {
      return <Update_DocumentsScreen />;
    }
    if (activeKey?.includes('Cập nhật thông số sản phẩm')) {
      return <Update_Product_Specifications />;
    }
    if (activeKey?.includes('Vấn đề phát sinh')) {
      return <Problems_AriseScreen />;
    }
    if (activeKey?.includes('Cập nhật TTHH')) {
      return <Update_TTHHScreen />;
    }
    //Quản lý sản phẩm
    if (activeKey?.includes('dimension')) {
      return <Dimension_ProductScreen />;
    }
    if (activeKey?.includes('products')) {
      return <ProductScreen />;
    }
    return <Welcome />;
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
                onToggleExpand={() => {
                  if (sidebarState === 'collapsed') {
                    setSidebarState('expanded');
                  }
                }}
                setSidebarState={setSidebarState}
              />
            </View>
          )}
        </View>
        <View style={styles.content}>{renderRightScreen()}</View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },
  header: {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  main: {
    flexDirection: 'row',
  },
  left: {},
  sidebarWrapper: {},
  content: {
    flex: 1,
    height: '100%',
  },
});
