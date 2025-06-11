import {Methods} from '../constans/methods';
import handleRequest from '../seed-work/handle-request';
import {ResultResponse} from '../seed-work/result-response';

const login = async (
  employeeCode: string,
  password: string,
): Promise<ResultResponse<LoginResponse>> => {
  const endpoint = '/users/login';
  const body = {employeeCode, password};
  return handleRequest<LoginResponse>(endpoint, Methods.POST, {}, body);
};

const register = async (
  employeeCode: string,
  name: string,
  password: string,
  role?: string,
): Promise<ResultResponse<string>> => {
  const endpoint = '/users/register';
  const data = {
    employeeCode,
    name,
    password,
    role: role || 'staff',
  };
  return handleRequest<string>(endpoint, Methods.POST, data);
};

const refreshToken = async (
  // eslint-disable-next-line @typescript-eslint/no-shadow
  refreshToken: string,
): Promise<ResultResponse<{accessToken: string; expiresIn: number}>> => {
  const endpoint = '/users/refresh';
  const body = {refreshToken};
  return handleRequest<{accessToken: string; expiresIn: number}>(
    endpoint,
    Methods.POST,
    {},
    body,
  );
};

const loginService = {login, register, refreshToken};

export default loginService;
