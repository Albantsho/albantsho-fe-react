import { apiPrivate } from "apis/configs/axios.config";
import { useRouter } from "next/router";
import { useEffect } from "react";
import routes from "utils/routes";

const useAxiosPrivate = () => {
  const { replace } = useRouter();
  
  useEffect(() => {
    const requestIntercept = apiPrivate.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseIntercept = apiPrivate.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (
          error.response.data.statusCode === 400 &&
          error.response.data.message ===
          "Refresh token not found, please login again"
        ) {
          replace(routes.home.url);
        }
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          await apiPrivate.post("/user/refresh", {});
          return apiPrivate(prevRequest);
        }

        return Promise.reject(error);
      }
    );

    return () => {
      apiPrivate.interceptors.request.eject(requestIntercept);
      apiPrivate.interceptors.response.eject(responseIntercept);
    };

  }, [replace]);

  return apiPrivate;
};

export default useAxiosPrivate;