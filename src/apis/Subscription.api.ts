import useUserStore from "app/user.store";
import api from "./configs/axios.config";

interface ISubscriptions {
  sub_name: string;
  paid: boolean;
}

const useSubscriptionApi = (controller?: AbortController) => {
  const { token } = useUserStore((state) => state.user);

  return {
    async subscription(payload: ISubscriptions) {
      const res = await api.post("/subscription", payload, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
  };
};

export default useSubscriptionApi;
