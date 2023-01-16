import { apiPrivate } from "apis/configs/axios.config";
import useUserStore from "app/user.store";
import { useEffect } from "react";

const useAxiosPrivate = () => {
  const { setAccessToken, accessToken, logOutUser } = useUserStore((state) => ({
    setAccessToken: state.setAccessToken,
    accessToken: state.accessToken,
    logOutUser: state.logOutUser,
  }));

  useEffect(() => {
    const requestIntercept = apiPrivate.interceptors.request.use(
      (config) => {
        if (config.headers !== undefined && !config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
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
          error.request.responseURL ===
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/refresh` &&
          error.response.data.statusCode === 400 &&
          error.response.data.message ===
            "Refresh token not found, please login again."
        ) {
          logOutUser();
        }
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const response = await apiPrivate.post("/user/refresh", {});
          setAccessToken(response.data.data.accessToken);
          prevRequest.headers[
            "Authorization"
          ] = `Bearer ${response.data.data.accessToken}`;
          return apiPrivate(prevRequest);
        }

        return Promise.reject(error);
      }
    );

    return () => {
      apiPrivate.interceptors.request.eject(requestIntercept);
      apiPrivate.interceptors.response.eject(responseIntercept);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return apiPrivate;
};

export default useAxiosPrivate;
