export interface ResultResponse<T> {
  success: boolean;
  httpStatusCode: number;
  message: string;
  data: T;
  totalCount: number;
}
