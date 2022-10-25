import useUserStore from "app/user.store";
import api from "./configs/axios.config";

const useNotificationsApi = (controller?: AbortController) => {
  const { token } = useUserStore((state) => state.user);

  return {
    async getUserInformation() {
      const res = await api.get("/notifications", {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
  };
};

export default useNotificationsApi;
