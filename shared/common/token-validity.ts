import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import environment from '../../environments/environments';

/**
 * Lưu access token, refresh token và thời gian hết hạn vào AsyncStorage.
 *
 * @param accessToken - Mã truy cập
 * @param refreshToken - Mã làm mới
 * @param expiresIn - Thời gian hết hạn
 */
const setTokens = async (
  accessToken: string,
  refreshToken: string,
  expiresIn: number,
): Promise<void> => {
  const expiresAt = Date.now() + expiresIn * 1000;
  await AsyncStorage.multiSet([
    ['accessToken', accessToken],
    ['refreshToken', refreshToken],
    ['expiresAt', expiresAt.toString()],
  ]);
  //console.log('Tokens saved:', {accessToken, refreshToken, expiresAt});
};
/**
 * Lấy access token hiện tại từ AsyncStorage.
 *
 * @returns accessToken hoặc null nếu không có
 */
const getAccessToken = async (): Promise<string | null> => {
  return await AsyncStorage.getItem('accessToken');
};

/**
 * Kiểm tra xem access token đã hết hạn chưa.
 *
 * @returns true nếu token đã hết hạn hoặc không tồn tại
 */
const isTokenExpired = async (): Promise<boolean> => {
  const expiresAt = await AsyncStorage.getItem('expiresAt');
  if (!expiresAt) return true;

  const bufferTime = 60 * 1000; // 1 phút
  const expired = Date.now() > parseInt(expiresAt) - bufferTime;
  //console.log('Token expired:', expired); // Kiểm tra xem token có hết hạn không
  return expired;
};

/**
 * Gửi request để làm mới access token bằng refresh token.
 *
 * @returns accessToken mới nếu thành công, ngược lại là null
 */
const refreshAccessToken = async (): Promise<string | null> => {
  const refreshToken = await AsyncStorage.getItem('refreshToken');
  if (!refreshToken) return null;

  try {
    const {apiUrl} = environment();
    const res = await axios.post(`${apiUrl}/users/refresh`, {refreshToken});
    //console.log('Refresh API response:', res.data); // Log phản hồi API
    const {accessToken, expiresIn} = res.data;
    if (accessToken && expiresIn) {
      await setTokens(accessToken, refreshToken, expiresIn);
      return accessToken;
    } else {
      //console.error('Invalid response from refresh API:', res.data);
      return null;
    }
  } catch (err) {
    //console.error('Error refreshing token:', err); // Log lỗi nếu có
    return null;
  }
};
/**
 * Lấy access token hợp lệ, tự động làm mới nếu cần.
 *
 * @returns accessToken hợp lệ hoặc null nếu không thể lấy được
 */
let refreshingPromise: Promise<string | null> | null = null;
const getValidAccessToken = async (): Promise<string | null> => {
  const expired = await isTokenExpired();
  if (expired) {
    if (!refreshingPromise) {
      refreshingPromise = refreshAccessToken().finally(() => {
        refreshingPromise = null;
      });
    }
    return refreshingPromise;
  }
  return AsyncStorage.getItem('accessToken');
};
const logout = async (): Promise<void> => {
  await AsyncStorage.multiRemove(['accessToken', 'refreshToken', 'expiresAt']);
};

export {
  setTokens,
  getAccessToken,
  isTokenExpired,
  refreshAccessToken,
  getValidAccessToken,
  logout,
};
