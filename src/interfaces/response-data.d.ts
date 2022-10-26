export interface IResponseError {
  data?: {
    email: string;
  };
  internal_response_code: number;
  message: string;
  success: boolean;
  title: string;
}
