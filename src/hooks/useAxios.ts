import api from "apis/configs/axios.config";
import { useEffect } from "react";
import useUserStore from "store/user.store";

const useAxios = () => {
  const [logOutUser, user] = useUserStore((state) => ([state.logOutUser, state.user]));

  useEffect(() => {
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseIntercept = api.interceptors.response.use(
      async (response) => {
        try {
          if (
            response.request.responseURL ===
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/script/random` && user.email
          ) {
            await api.post("/user/refresh", {}, { withCredentials: true });
          }
        } catch (error: any) {
          if (
            error.request.responseURL ===
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/refresh` &&
            error.response.data.statusCode === 400 &&
            error.response.data.message ===
            "Refresh token not found, please login again"
          ) {
            logOutUser();

          }
        }
        return response;
      },
      async (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return api;
};

export default useAxios;
