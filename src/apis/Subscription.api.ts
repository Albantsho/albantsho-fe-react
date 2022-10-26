import { useUserStore } from "app/user.store";
import shallow from "zustand/shallow";
import api from "./configs/axios.config";

interface ISubscriptions {
  sub_name: string;
  paid: boolean;
}

const useSubscriptionApi = (controller?: AbortController) => {
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
