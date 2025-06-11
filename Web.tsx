import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './navigation/navigationRef';
import LoginScreen from './Web/Screen/loginScreens';
import SignOut from './Web/Screen/signOut';
import {linking} from './Web/linking/linkingConfig';
import HomeScreen from './Web/Screen/HomeScreen/homeScreen';
import Overview from './Web/Screen/Panel/overview';
import pickup from './Web/Screen/Panel/pickup';
import salesChannel from './Web/Screen/Panel/salesChannel';
import EmployeeProductivity from './Web/Screen/Panel/EmployeeProductivity';
import KPI from './Web/Screen/Panel/KPI';
import Warehouselocation from './Web/Screen/Panel/Warehouselocation';
import DataExport from './Web/Screen/DataExport/dataExport';
import Detailed from './Web/Screen/Panel/Detailed/detailed';
import ReportScreen from './Web/Screen/Report/reportScreen';
import configurationScreen from './Web/Screen/Setting/Configuration/configurationScreen';
import equipmentScreen from './Web/Screen/Setting/Equipment/equipmentScreen';
import locationScreen from './Web/Screen/Setting/Location/locationScreen';
import accountScreen from './Web/Screen/Setting/User/Account/accountScreen';
import productScreen from './Web/Screen/Product/ProductScreen/productScreen';
import update_TTHHScreen from './Web/Screen/Operate/Utilities/Update_TTHH/update_TTHHScreen';
import problems_AriseScreen from './Web/Screen/Operate/Utilities/Problems_Arise/problems_AriseScreen';
import Update_Product_Specifications from './Web/Screen/Operate/Utilities/Update_Product_Specifications/update_Product_Specifications';
import update_DocumentsScreen from './Web/Screen/Operate/Utilities/Update_Documents/update_DocumentsScreen';
import print_LabelsScreen from './Web/Screen/Operate/Utilities/Print_Labels/print_LabelsScreen';
import order_Of_ShipmentScreen from './Web/Screen/Operate/Utilities/Order_Of_Shipment/order_Of_ShipmentScreen';
import working_SessionScreen from './Web/Screen/Operate/Utilities/Working_Session/working_SessionScreen';
import Product_HistoryScreen from './Web/Screen/Operate/Utilities/Product_History/product_HistoryScreen';
import location_InformationScreen from './Web/Screen/Operate/Utilities/Location_Information/location_InformationScreen';
import product_locationScreen from './Web/Screen/Operate/Utilities/Product _Location/product_locationScreen';
import storage_EquipmentScreen from './Web/Screen/Operate/Utilities/Storage_Equipment/storage_EquipmentScreen';
import inventory_managementScreen from './Web/Screen/Operate/Inventory_management/inventory_managementScreen';
import KPIScreen from './Web/Screen/Operate/Productivity/KPI/KPIScreen';
import employee_PayrollScreen from './Web/Screen/Operate/Productivity/Employee_Payroll/employee_PayrollScreen';
import inventoryScreen from './Web/Screen/Operate/Inventory/inventoryScreen';
import update_ExportScreen from './Web/Screen/Operate/Transport/Update_Export/update_ExportScreen';
import delivery_TransportScreen from './Web/Screen/Operate/Transport/Delivery_Transport/delivery_TransportScreen';
import request_ExportsScreen from './Web/Screen/Operate/Exports/Request_Exports/request_ExportsScreen';
import pick_UpB2BScreen from './Web/Screen/Operate/Exports/Pick_UpB2B/pick_UpB2BScreen';
import pick_upScreen from './Web/Screen/Operate/Exports/Pick_Up/pick_upScreen';
import importsScreen from './Web/Screen/Operate/Imports/importsScreen';
import packScreen from './Web/Screen/Operate/Exports/Pack/packScreen';
import dimension_ProductScreen from './Web/Screen/Product/Dimension_Product/dimension_ProductScreen';
import Group_permissionsScreen from './Web/Screen/Setting/User/Group-permissions/group_permissions';

// Import các màn hình bạn đã liệt kê

const Stack = createNativeStackNavigator();

export default function Web() {
  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signOut" component={SignOut} />

        {/* Thêm các màn hình bạn đã import */}
        <Stack.Screen name="overview" component={Overview} />
        <Stack.Screen name="Detailed" component={Detailed} />
        <Stack.Screen name="Pickup" component={pickup} />
        <Stack.Screen name="SalesChannel" component={salesChannel} />
        <Stack.Screen
          name="EmployeeProductivity"
          component={EmployeeProductivity}
        />
        <Stack.Screen name="KPI" component={KPI} />
        <Stack.Screen name="Warehouselocation" component={Warehouselocation} />
        <Stack.Screen name="DataExport" component={DataExport} />
        <Stack.Screen name="ReportScreen" component={ReportScreen} />
        <Stack.Screen
          name="ConfigurationScreen"
          component={configurationScreen}
        />
        <Stack.Screen name="EquipmentScreen" component={equipmentScreen} />
        <Stack.Screen name="LocationScreen" component={locationScreen} />
        <Stack.Screen name="AccountScreen" component={accountScreen} />
        <Stack.Screen
          name="Group_permissionsScreen"
          component={Group_permissionsScreen}
        />
        <Stack.Screen name="ProductScreen" component={productScreen} />
        <Stack.Screen
          name="Dimension_ProductScreen"
          component={dimension_ProductScreen}
        />
        <Stack.Screen name="PackScreen" component={packScreen} />
        <Stack.Screen name="ImportsScreen" component={importsScreen} />
        <Stack.Screen name="Pick_upScreen" component={pick_upScreen} />
        <Stack.Screen name="Pick_UpB2BScreen" component={pick_UpB2BScreen} />
        <Stack.Screen
          name="Request_ExportsScreen"
          component={request_ExportsScreen}
        />
        <Stack.Screen
          name="Delivery_TransportScreen"
          component={delivery_TransportScreen}
        />
        <Stack.Screen
          name="Update_ExportScreen"
          component={update_ExportScreen}
        />
        <Stack.Screen name="InventoryScreen" component={inventoryScreen} />
        <Stack.Screen
          name="Employee_PayrollScreen"
          component={employee_PayrollScreen}
        />
        <Stack.Screen name="KPIScreen" component={KPIScreen} />
        <Stack.Screen
          name="Inventory_managementScreen"
          component={inventory_managementScreen}
        />
        <Stack.Screen
          name="Storage_EquipmentScreen"
          component={storage_EquipmentScreen}
        />
        <Stack.Screen
          name="Product_locationScreen"
          component={product_locationScreen}
        />
        <Stack.Screen
          name="Location_InformationScreen"
          component={location_InformationScreen}
        />
        <Stack.Screen
          name="Product_HistoryScreen"
          component={Product_HistoryScreen}
        />
        <Stack.Screen
          name="Working_SessionScreen"
          component={working_SessionScreen}
        />
        <Stack.Screen
          name="Order_Of_ShipmentScreen"
          component={order_Of_ShipmentScreen}
        />
        <Stack.Screen
          name="Print_LabelsScreen"
          component={print_LabelsScreen}
        />
        <Stack.Screen
          name="Update_DocumentsScreen"
          component={update_DocumentsScreen}
        />
        <Stack.Screen
          name="Update_Product_Specifications"
          component={Update_Product_Specifications}
        />
        <Stack.Screen
          name="Problems_AriseScreen"
          component={problems_AriseScreen}
        />
        <Stack.Screen name="Update_TTHHScreen" component={update_TTHHScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
