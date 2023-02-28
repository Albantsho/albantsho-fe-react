import useAxios from "hooks/useAxios";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IResData } from "interfaces/response";
import { IReviewer } from "interfaces/reviews";
import {
  IUser,
  IUserInformation,
  IUserInformationInAdminPanel,
  IUserProfile,
} from "interfaces/user";
import { useCallback } from "react";

export interface IData_signupUser {
  user: IUser;
}

export interface IData_AuthorizationUser {
  user: IUser;
  accessToken: string;
}

export interface IData_allUser {
  users: IUserInformation[];
  currentPage: number;
  pagesCount: number;
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

export interface IUpdateUserInformationPayload {
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
  const axios = useAxios();

  const signup = useCallback(
    async (payload: IRegisterPayload) => {
      const res = await axios.post<IResData<IData_signupUser>>(
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
      const res = await axiosPrivate.post<IResData<IData_AuthorizationUser>>(
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
      await axios.post("/user/resend-otp", payload, {
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
      await axios.post("/user/reset-password", payload, {
        signal: controller?.signal,
      });
    },
    [controller?.signal]
  );

  const resetPasswordEmail = useCallback(
    async (email: string) => {
      await axios.post<IResData<IData_AuthorizationUser>>(
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
      const res = await axiosPrivate.post<IResData<IData_signupUser>>(
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

  const updateUserInformation = useCallback(
    async (payload: IUpdateUserInformationPayload) => {
      const res = await axiosPrivate.patch("/user/profile/update", payload, {
        signal: controller?.signal,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data;
    },
    [controller?.signal]
  );

  const updateUserWithdrawInformation = useCallback(
    async (payload: IUpdateWithdrawUserInformationPayload) => {
      const res = await axiosPrivate.patch(
        "/user/profile/withdraw/update",
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },
    [controller?.signal]
  );

  const getUserProfile = useCallback(async () => {
    const res = await axiosPrivate.get<IResData<{ profile: IUserProfile }>>(
      "/user/me/profile",
      {
        signal: controller?.signal,
      }
    );

    return res.data.data;
  }, [controller?.signal]);

  const updateUserRestriction = useCallback(
    async (payload: IUserRestrictionPayload, id: string) => {
      const res = await axiosPrivate.patch(
        `/user/update/restriction/${id}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },
    [controller?.signal]
  );

  const getAllUser = useCallback(
    async (query: string, searchQuery?: string) => {
      const res = await axiosPrivate.get<IResData<IData_allUser>>(
        `/user/all/users?limit=10&search=${searchQuery}&${query}`,

        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [controller?.signal]
  );

  const getUserProfileForAdmin = useCallback(
    async (id: string) => {
      const res = await axiosPrivate.get<
        IResData<{ user: IUserInformationInAdminPanel }>
      >(`/user/profile/${id}`, {
        signal: controller?.signal,
      });

      return res.data.data;
    },
    [controller?.signal]
  );

  const getAllReviewers = useCallback(async () => {
    const res = await axiosPrivate.get<IResData<{ reviewers: IReviewer[] }>>(
      "/user/all/reviewers",
      {
        signal: controller?.signal,
      }
    );

    return res.data.data;
  }, [controller?.signal]);

  // async getAllReviewers() {
  //   const res = await axiosPrivate.get("/user/all/reviewers", {
  //     signal: controller?.signal,
  //   });

  //   return res.data.data;
  // },

  // async getUserProfileForAdmin(id: string ) {
  //   const res = await axiosPrivate.get(`/user/profile/${id}`, {
  //     signal: controller?.signal,
  //   });

  //   return res.data;
  // },

  // async getAllUser(query: string, searchQuery?: string) {
  //   const res = await axiosPrivate.get(
  //     `/user/all/users?limit=10&search=${searchQuery}&${query}`,
  //     {
  //       signal: controller?.signal,
  //     }
  //   );
  //   console.log(res);

  //   return res.data;
  // },

  // async updateUserRestriction(payload: IUserRestrictionPayload, id: string) {
  //   const res = await axiosPrivate.patch(
  //     `/user/update/restriction/${id}`,
  //     payload,
  //     {
  //       signal: controller?.signal,
  //     }
  //   );

  //   return res.data;
  // },

  return {
    signup,
    emailVerify,
    resendCode,
    signin,
    logoutUser,
    resetPassword,
    resetPasswordEmail,
    updateUserInformation,
    updateUserWithdrawInformation,
    getUserProfile,
    updateUserRestriction,
    getAllUser,
    getUserProfileForAdmin,
    getAllReviewers,
    // async updateUserRestriction(payload: IUserRestrictionPayload, id: string) {
    //   const res = await axiosPrivate.patch(
    //     `/user/update/restriction/${id}`,
    //     payload,
    //     {
    //       signal: controller?.signal,
    //     }
    //   );
    //   console.log(res.data);
    // },

    // async getAllUser(query: string, searchQuery?: string) {
    //   const res = await axiosPrivate.get(
    //     `/user/all/users?limit=10&search=${searchQuery}&${query}`,
    //     {
    //       signal: controller?.signal,
    //     }
    //   );
    //   console.log(res);

    //   return res.data;
    // },

    // async getUserProfileForAdmin(id: string | string[]) {
    //   const res = await axiosPrivate.get(`/user/profile/${id}`, {
    //     signal: controller?.signal,
    //   });

    //   return res.data;
    // },

    // async getAllReviewers() {
    //   const res = await axiosPrivate.get("/user/all/reviewers", {
    //     signal: controller?.signal,
    //   });

    //   return res.data.data;
    // },
  };
};

export default useAuthApi;
