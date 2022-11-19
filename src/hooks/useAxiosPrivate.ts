import api, { apiPrivate } from "apis/configs/axios.config";
import useUserStore from "app/user.store";
import { useEffect } from "react";

const useAxiosPrivate = () => {
  const { setAccessToken, accessToken } = useUserStore((state) => ({
    setAccessToken: state.setAccessToken,
    accessToken: state.accessToken,
  }));

  useEffect(() => {
    const requestIntercept = apiPrivate.interceptors.request.use(
      (config) => {
        if (config.headers !== undefined && !config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = apiPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const response = await api.post("/user/refresh", undefined, {
            withCredentials: true,
          });

          setAccessToken(response.data.accessToken);

          prevRequest.headers[
            "Authorization"
          ] = `Bearer ${response.data.accessToken}`;
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