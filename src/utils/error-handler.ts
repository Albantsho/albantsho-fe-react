import axios from "axios";

const errorHandler = (error: unknown) => {
  // if (axios.isAxiosError(error)) {
  //   const responseData = error.response?.data as IResponseError;
  //   toast.error(responseData?.msg || error.message);
  //   return;
  // }

  // toast.error(
  //   (error as Error).message || "Something went wrong, Please try again"
  // );
  ("");
};

export default errorHandler;
