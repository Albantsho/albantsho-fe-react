import { useUserStore } from "app/user.store";
import shallow from "zustand/shallow";
import api from "./configs/axios.config";
interface IRegisterPayload {
  full_name: string;
  email: string;
  password: string;
  country: string;
  user_type: "user" | "producer";
  portfolio?: string;
  production_company_name?: string;
}

interface ILoginPayload {
  email: string;
  password: string;
}

const useAuthApi = (controller?: AbortController) => {
  const useUser = () => {
    const { user } = useUserStore(
      (store) => ({
        user: store.user,
      }),
      shallow
    );
    return { user };
  };

  const {
    user: { token },
  } = useUser();

  return {
    async register(payload: IRegisterPayload) {
      const res = await api.post("/authentication/register", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async login(payload: ILoginPayload) {
      const res = await api.post("/authentication/login", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async resetPassword(payload: object) {
      const res = await api.post("/profile/password-reset", payload, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },

    async forgetPassword(payload: object) {
      const res = await api.post("/authentication/reset-password", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async emailVerify(payload: object) {
      const res = await api.post("/verification", payload, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
  };
};

export default useAuthApi;
