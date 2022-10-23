import useUserStore from "app/user.store";
import api from "./configs/axios.config";

const useMarketplaceApi = (controller?: AbortController) => {
  const {
    user: { token },
  } = useUserStore();

  return {
    async getScripts() {
      const res = await api.get("/market", {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },

    async getUsers() {
      const res = await api.get("/market/user/all", {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },

    async getScript(id: string) {
      const res = await api.get(`/market/${id}`, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },

    async addingScript(id: string, payload: string) {
      const res = await api.post(`/market/${id}`, payload, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
  };
};

export default useMarketplaceApi;
