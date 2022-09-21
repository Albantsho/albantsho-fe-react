import api from "./configs/axios.config";

interface IRegisterPayload {
  full_name: string;
  email: string;
  password: string;
  country: string;
  portfolio: string;
  production_company_name: string;
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

  async resetPassword(payload: string) {
    const res = await api.post("/authentication/password-reset", payload, {
      signal: controller?.signal,
    });

    return res.data;
  },

  async forgetPassword(payload: string) {
   const res = await api.post("/authentication/reset-password", payload, {
     signal: controller?.signal,
   });

   return res.data;
 },


  async emailVerify(payload: string) {
    const res = await api.post("/verification", payload, {
      signal: controller?.signal,
    });

    return res.data;
  },
});

export default AuthApi;
