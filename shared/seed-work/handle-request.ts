// import axios, {AxiosRequestConfig} from 'axios';
// import handleResponse from './handle-response';
// import {ResultResponse} from './result-response';
// import environment from '../../environments/environments';

// const {apiUrl} = environment();

// const handleRequest = async <T>(
//   endpoint: string,
//   method: 'GET' | 'POST',
//   headers: Record<string, string> = {},
//   data: any = null,
// ): Promise<ResultResponse<T>> => {
//   const config: AxiosRequestConfig = {
//     url: `${apiUrl}${endpoint}`,
//     method,
//     headers,
//     ...(data && method === 'POST' ? {data} : {}),
//   };

//   try {
//     const response = await axios(config);
//     return handleResponse<T>(response);
//   } catch (error: any) {
//     console.error(
//       `Error in API request (${method} ${endpoint}):`,
//       error.message,
//     );
//     return {
//       success: false,
//       httpStatusCode: error.response?.status || 500,
//       message:
//         error.response?.data?.message ||
//         error.message ||
//         'Unknown error occurred',
//       data: error,
//       totalCount: 0,
//     };
//   }
// };

// export default handleRequest;
import axios, {AxiosRequestConfig} from 'axios';
import handleResponse from './handle-response';
import {ResultResponse} from './result-response';
import environment from '../../environments/environments';
import {getValidAccessToken} from '../common/token-validity'; // Import để lấy access token hợp lệ

const {apiUrl} = environment();
const handleRequest = async <T>(
  endpoint: string,
  method: 'GET' | 'POST',
  headers: Record<string, string> = {},
  data: any = null,
): Promise<ResultResponse<T>> => {
  try {
    // Lấy access token hợp lệ (sẽ tự động refresh nếu hết hạn)
    let token = await getValidAccessToken();
    // Thêm token vào headers nếu có
    const config: AxiosRequestConfig = {
      url: `${apiUrl}${endpoint}`,
      method,
      headers: {
        ...headers,
        ...(token && {Authorization: `Bearer ${token}`}),
      },
      ...(data && method === 'POST' ? {data} : {}),
    };

    const response = await axios(config);
    return handleResponse<T>(response); // Xử lý response
  } catch (error: any) {
    console.error(
      `Error in API request (${method} ${endpoint}):`,
      error.message,
    );
    return {
      success: false,
      httpStatusCode: error.response?.status || 500,
      message:
        error.response?.data?.message ||
        error.message ||
        'Unknown error occurred',
      data: error,
      totalCount: 0,
    };
  }
};

export default handleRequest;
