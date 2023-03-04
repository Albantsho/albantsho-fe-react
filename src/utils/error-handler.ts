import axios from "axios";
import { IResponseError } from "interfaces/response-data";
import toast from "react-hot-toast";

const errorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data as IResponseError;
    toast.error(
      responseData?.data?.email ||
        responseData?.message ||
        "Something went wrong, Please try again",
      {
        style: {
          border: "1px solid #D32D2D",
          padding: "16px",
          color: "#D32D2D",
          fontFamily: "Montserrat",
        },
        iconTheme: {
          primary: "#D32D2D",
          secondary: "#FFEDED",
        },
        position: "top-right",
      }
    );
    return;
  }

  toast.error(
    (error as Error).message || "Something went wrong, Please try again",
    {
      style: {
        border: "1px solid #D32D2D",
        padding: "16px",
        color: "#D32D2D",
        fontFamily: "Montserrat",
      },
      iconTheme: {
        primary: "#D32D2D",
        secondary: "#FFEDED",
      },
      position: "top-right",
    }
  );
};

export default errorHandler;
