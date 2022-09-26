import api from "./configs/axios.config";

const MarketplaceApi = (controller?: AbortController) => ({
  async getScripts() {
    const res = await api.get("/market", {
      signal: controller?.signal,
    });

    return res.data;
  },

  async getUsers() {
   const res = await api.get("/market/user/all", {
     signal: controller?.signal,
   });

   return res.data;
 },

  async getScript(id: string) {
    const res = await api.get(`/market/${id}`, {
      signal: controller?.signal,
    });

    return res.data;
  },

  async addingScript(id: string, payload: string) {
    const res = await api.post(`/market/${id}`, payload, {
      signal: controller?.signal,
    });

    return res.data;
  },
});

export default MarketplaceApi;
