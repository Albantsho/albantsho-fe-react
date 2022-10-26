import axios from "axios";
import { IResponseError } from "interfaces/response-data";
import { toast } from "react-toastify";

const errorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data as IResponseError;
    toast.error(responseData?.data?.email || responseData.message);
    return;
  }

  toast.error(
    (error as Error).message || "Something went wrong, Please try again"
  );
};

export default errorHandler;
