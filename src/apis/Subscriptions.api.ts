import api from "./configs/axios.config";

const SubscriptionsApi = (controller?: AbortController) => ({
  async getUserInformation() {
    const res = await api.get("/subscription", {
      signal: controller?.signal,
    });

    return res.data;
  },
});

export default SubscriptionsApi;
