import api from "./configs/axios.config";

interface IUpdateAdminType {
  userId: string;
  userType: string;
}

const useAdminApi = (controller?: AbortController) => {
  return {
    async createAdmin(payload: object) {
      const res = await api.post("/admin/create-admin", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async dismissalAdmin(payload: object) {
      const res = await api.post("/admin/dismissal-admin", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async updateAdminType(payload: IUpdateAdminType) {
      const res = await api.patch("/admin/update/usertype", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useAdminApi;
