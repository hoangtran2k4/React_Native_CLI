import {ResultResponse} from './result-response';

const handleResponse = <T>(response: any): ResultResponse<T> => {
  return {
    success: response.data.success,
    httpStatusCode: response.data.httpStatusCode || response.status,
    message: response.data.message || '',
    data: response.data.data || null,
    totalCount: response.data.totalCount || 0,
  };
};

export default handleResponse;
