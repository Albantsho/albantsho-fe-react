import api, { apiPrivate } from "apis/configs/axios.config";
import useUserStore from "store/user.store";
import { useEffect } from "react";

const useAxios = () => {
  const { accessToken, logOutUser } = useUserStore((state) => ({
    accessToken: state.accessToken,
    logOutUser: state.logOutUser,
  }));

  useEffect(() => {
    const requestIntercept = api.interceptors.request.use(
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

    const responseIntercept = api.interceptors.response.use(
      async (response) => {
        try {
          if (
            response.request.responseURL !==
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/signin` &&
            response.request.responseURL !==
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/resend-otp` &&
            response.request.responseURL !==
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/signup` &&
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/resend-otp` &&
            response.request.responseURL !==
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/verify-otp`
          ) {
            await apiPrivate.post("/user/refresh", {});
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
