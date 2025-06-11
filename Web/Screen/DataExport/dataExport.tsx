/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import {TextField} from '@mui/material';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';

const DataExport = () => {
  const {width} = useWindowDimensions();
  const isSmallScreen = width < 600;

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <View style={{padding: 12}}>
        <Text style={styles.title}>QUẢN LÝ PHIÊN XUẤT DỮ LIỆU</Text>

        <View
          style={[
            styles.inputContainer,
            isSmallScreen ? styles.column : styles.row,
          ]}>
          <View
            style={[
              styles.datePickerWrapper,
              isSmallScreen && {width: '100%'},
            ]}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Từ ngày"
                value={startDate}
                onChange={newValue => setStartDate(newValue)}
                renderInput={params => (
                  <TextField fullWidth size="small" {...params} />
                )}
              />
            </LocalizationProvider>
          </View>

          <View
            style={[
              styles.datePickerWrapper,
              isSmallScreen && {width: '100%'},
            ]}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Đến ngày"
                value={endDate}
                onChange={newValue => setEndDate(newValue)}
                renderInput={params => (
                  <TextField fullWidth size="small" {...params} />
                )}
              />
            </LocalizationProvider>
          </View>

          <TextInput
            style={[styles.input, isSmallScreen && {width: '100%'}]}
            placeholder="Tìm kiếm theo mã xuất file..."
          />
        </View>

        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.cell}>#</Text>
              <Text style={styles.cell}>Mã yêu cầu</Text>
              <Text style={styles.cell}>Trạng thái</Text>
              <Text style={styles.cell}>Tiêu đề</Text>
              <Text style={styles.cell}>Nội dung</Text>
              <Text style={styles.cell}>Ngày tạo</Text>
              <Text style={styles.cell}>Người tạo</Text>
              <Text style={styles.cell}>Thời gian bắt đầu</Text>
              <Text style={styles.cell}>Thời gian kết thúc</Text>
              <Text style={styles.cell}>Tổng dòng</Text>
              <Text style={styles.cell}>Dung lượng</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.texts}>Không có dữ liệu</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DataExport;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 12,
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
    color: 'blue',
  },
  inputContainer: {
    gap: 12,
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  datePickerWrapper: {
    flex: 1,
    marginVertical: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    padding: 12,
  },
  table: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    minWidth: 800,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 16,
    justifyContent: 'center',
  },
  cell: {
    flex: 1,
    fontWeight: 'bold',
    padding: 12,
    borderRightWidth: 1,
    borderColor: '#ddd',
    minWidth: 120,
  },
  texts: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
