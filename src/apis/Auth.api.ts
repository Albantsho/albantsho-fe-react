import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IResData } from "interfaces/response";
import { IUser } from "interfaces/user";
import { useCallback } from "react";
import api, { apiPrivate } from "./configs/axios.config";

export interface IData_signupUser {
  user: IUser;
}
export interface IData_AuthorizationUser {
  user: IUser;
  accessToken: string;
}

export interface IRegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  userType: "writer" | "producer";
  portfolio?: string;
  productionCompanyName?: string;
  gender: "male" | "female";
}

export interface ILoginPayload {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface IEmailVerifyOtp {
  email: string;
  code: string;
}

export interface IResetpasswordPayload {
  newPassword: string;
  resetPasswordToken: string;
}

interface IUpdateUserInformationPayload {
  firstName: string;
  lastName: string;
  image: File;
}

interface IUpdateWithdrawUserInformationPayload {
  bankName?: string;
  bankAccountName?: string;
  bankAccountNumber?: string;
  usdtTrc20Address?: string;
}

interface IUserRestrictionPayload {
  freeze?: boolean;
  block?: boolean;
}

const useAuthApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  const signup = useCallback(
    async (payload: IRegisterPayload) => {
      const res = await api.post<IResData<IData_signupUser>>(
        "/user/signup",
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [controller?.signal]
  );

  const emailVerify = useCallback(
    async (payload: IEmailVerifyOtp) => {
      const res = await api.post<IResData<IData_AuthorizationUser>>(
        "/user/verify-otp",
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [controller?.signal]
  );

  const resendCode = useCallback(
    async (payload: { email: string }) => {
      await api.post("/user/resend-otp", payload, {
        signal: controller?.signal,
      });
    },
    [controller?.signal]
  );

  const logoutUser = useCallback(async () => {
    await axiosPrivate.post(
      "/user/logout",
      {},
      {
        signal: controller?.signal,
      }
    );
  }, [controller?.signal]);

  const resetPassword = useCallback(
    async (payload: IResetpasswordPayload) => {
      await api.post("/user/reset-password", payload, {
        signal: controller?.signal,
      });
    },
    [controller?.signal]
  );

  const resetPasswordEmail = useCallback(
    async (email: string) => {
      await api.post<IResData<IData_AuthorizationUser>>(
        "/user/reset-password-email",
        { email },
        {
          signal: controller?.signal,
        }
      );
    },
    [controller?.signal]
  );

  const signin = useCallback(
    async (payload: ILoginPayload) => {
      const res = await api.post<IResData<IData_signupUser>>(
        "/user/signin",
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [controller?.signal]
  );

  return {
    signup,
    emailVerify,
    resendCode,
    signin,
    logoutUser,
    resetPassword,
    resetPasswordEmail,

    async updateUserInformation(payload: IUpdateUserInformationPayload) {
      const res = await axiosPrivate.patch("/user/profile/update", payload, {
        signal: controller?.signal,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data;
    },

    async updateUserWithdrawInformation(
      payload: IUpdateWithdrawUserInformationPayload
    ) {
      const res = await axiosPrivate.patch(
        "/user/profile/withdraw/update",
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async updateUserRestriction(payload: IUserRestrictionPayload, id: string) {
      const res = await axiosPrivate.patch(
        `/user/update/restriction/${id}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getAllUser(query: string, searchQuery?: string) {
      const res = await axiosPrivate.get(
        `/user/all/users?limit=10&search=${searchQuery}&${query}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getUserProfile() {
      const res = await axiosPrivate.get("/user/me/profile", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getUserProfileForAdmin(id: string | string[]) {
      const res = await axiosPrivate.get(`/user/profile/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getAllReviewers() {
      const res = await axiosPrivate.get("/user/all/reviewers", {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useAuthApi;
