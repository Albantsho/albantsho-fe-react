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
  image: File;
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
      const res = await apiPrivate.post("/user/signin", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async emailVerify(payload: IEmailVerifyOtp) {
      const res = await apiPrivate.post("/user/verify-otp", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async resendCode(payload: IResendCode) {
      const res = await api.post("/user/resend-otp", payload, {
        signal: controller?.signal,
      });
      return res.data;
    },

    async logoutUser() {
      const res = await axiosPrivate.post("/user/logout", {
        signal: controller?.signal,
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
      const res = await axiosPrivate.patch("/user/profile/update", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async updateUserWithdrawInformation(
      payload: IUpdateWithdrawUserInformationPayload
    ) {
      const res = await axiosPrivate.post(
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

    async getAllUser(searchQuery?: string) {
      const res = await axiosPrivate.get(
        `/user/all/users?limit=6&search=${searchQuery}`,
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
      const res = await api.get(`/user/profile/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getAllReviewers(query?: string) {
      const res = await api.get(`/user/all/reviewers?${query}`, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useAuthApi;
