import api from "./configs/axios.config";

const NotificationsApi = (controller?: AbortController) => ({
  async getUserInformation() {
    const res = await api.get("/notifications", {
      signal: controller?.signal,
    });

    return res.data;
  },
});

export default NotificationsApi;
