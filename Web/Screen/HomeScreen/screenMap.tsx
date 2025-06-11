import React from 'react';
import {JSX} from 'react';
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

export const screenMap: Record<string, JSX.Element> = {
  overview: <Overview />,
  detailed: <Detailed />,
  pickup: <Pickup />,
  salesChannel: <SalesChannel />,
  EmployeeProductivity: <EmployeeProductivity />,
  KPI: <KPI />,
  Warehouselocation: <Warehouselocation />,
  report: <ReportScreen />,
  exportData: <DataExport />,
  configuration: <ConfigurationScreen />,
  equipment: <EquipmentScreen />,
  locations: <LocationScreen />,
  'Tài khoản': <AccountScreen />,
  'Nhóm quyền': <Group_permissionsScreen />,
  'Yêu cầu nhập kho': <ImportsScreen />,
  'Yêu cầu xuất kho': <Request_ExportsScreen />,
  'Lấy hàng B2B': <Pick_UpB2BScreen />,
  'Lấy hàng': <Pick_upScreen />,
  'Đóng gói': <PackScreen />,
  Inventory: <InventoryScreen />,
  'KPI kho': <KPIScreen />,
  'Tính lương cho nhân viên': <Employee_PayrollScreen />,
  'Bàn giao nhà vận chuyển': <Delivery_TransportScreen />,
  'Cập nhật đơn xuất': <Update_ExportScreen />,
  inventory_management: <Inventory_managementScreen />,
  'Thiết bị chứa hàng': <Storage_EquipmentScreen />,
  'Vị trí sản phẩm': <Product_locationScreen />,
  'Thông tin vị trí': <Location_InformationScreen />,
  'Lịch sử sản phẩm': <Product_HistoryScreen />,
  'Phiên làm việc': <Working_SessionScreen />,
  'Thứ tự xuất hàng': <Order_Of_ShipmentScreen />,
  'In nhãn': <Print_LabelsScreen />,
  'Cập nhật chứng từ': <Update_DocumentsScreen />,
  'Cập nhật thông số sản phẩm': <Update_Product_Specifications />,
  'Vấn đề phát sinh': <Problems_AriseScreen />,
  'Cập nhật TTHH': <Update_TTHHScreen />,
  dimension: <Dimension_ProductScreen />,
  products: <ProductScreen />,
};
