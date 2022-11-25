import useAxiosPrivate from "hooks/useAxiosPrivate";
import api, { apiPrivate } from "./configs/axios.config";
interface IRegisterPayload {
  fullname: string;
  email: string;
  password: string;
  country: string;
  user_type: "writer" | "producer" | "admin" | "reviewer";
  portfolio?: string;
  production_company_name?: string;
  gender: "male" | "female";
}

interface ILoginPayload {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface IEmailVerifyOtp {
  email: string;
  code: string;
}

interface IResendCode {
  email: string;
}
interface IResetpasswordPayload {
  newPassword: string;
  reset_password_token: string;
}

interface IUpdateUserInformationPayload {
  fullname: string;
  image: string;
}

interface IUpdateWithdrawUserInformationPayload {
  bank_name: string;
  bank_account_name: string;
  bank_account_number: string;
}

interface IUserRestrictionPayload {
  freeze?: boolean;
  block?: boolean;
}

interface IGetAllUserOrReviewerPayload {
  page: number;
  limit: string;
  search: string;
}

const useAuthApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async signup(payload: IRegisterPayload) {
      const res = await api.post("/user/signup", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async signin(payload: ILoginPayload) {
      const res = await api.post("/user/signin", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async emailVerify(payload: IEmailVerifyOtp) {
      const res = await api.post("/user/verify-otp", payload);

      return res.data;
    },

    async resendCode(payload: IResendCode) {
      const res = await api.post("/user/resend-otp", payload);

      return res.data;
    },

    async logoutUser() {
      const res = await api.post("/user/logout", {
        signal: controller?.signal,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });

      return res.data;
    },

    async resetPasswordEmail(email: string) {
      const res = await api.post(
        "/user/reset-password-email",
        { email },
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async resetPassword(payload: IResetpasswordPayload) {
      const res = await api.post("/user/reset-password", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async updateUserInformation(payload: IUpdateUserInformationPayload) {
      const res = await api.patch("/user/profile/update", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async updateUserWithdrawInformation(
      payload: IUpdateWithdrawUserInformationPayload
    ) {
      const res = await api.post("/user/profile/withdraw/update", payload, {
        signal: controller?.signal,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });

      return res.data;
    },

    async updateUserRestriction(payload: IUserRestrictionPayload, id: string) {
      const res = await axiosPrivate.patch(
        `/user/update/restriction/${id}`,
        payload,
        {
          signal: controller?.signal,
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        }
      );

      return res.data;
    },

    async getAllUser(payload?: IGetAllUserOrReviewerPayload) {
      const res = await axiosPrivate.get("/user/all/users", {
        signal: controller?.signal,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });

      return res.data;
    },

    async getUserProfile(id: string | string[]) {
      const res = await axiosPrivate.get(`/user/profile/${id}`, {
        signal: controller?.signal,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });

      return res.data;
    },

    async getAdminProfile() {
      const res = await api.get("/user/me/profile/", {
        signal: controller?.signal,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });

      return res.data;
    },

    async getAllReviewers(payload: IGetAllUserOrReviewerPayload) {
      const res = await api.get("/user/all/users", {
        signal: controller?.signal,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });

      return res.data;
    },
  };
};

export default useAuthApi;
