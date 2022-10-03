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

const AuthApi = (controller?: AbortController) => ({
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
        Token: localStorage.getItem("USER_TOKEN")!,
      },
    });

    return res.data;
  },
});

export default AuthApi;
