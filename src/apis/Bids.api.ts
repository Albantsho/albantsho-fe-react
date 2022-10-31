import { useUserStore } from "app/user.store";
import shallow from "zustand/shallow";
import api from "./configs/axios.config";

interface ICreateBid {
  script_basic_id: string;
  amount: number;
}

interface IUserBid {
  script_basic_id: string;
  amount: number;
}

interface IRefreshedBid {
  script_basic_id: string;
  amount: number;
}

const BidsApi = (controller?: AbortController) => {
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
    async createBid(payload: ICreateBid) {
      const res = await api.post("/market/bid", payload, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },

    async userBid(payload: IUserBid) {
      const res = await api.post("/market/bid", payload, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },

    async acceptBid(payload: IRefreshedBid) {
      const res = await api.get(`/market/bid/accept/${payload}`, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },

    async rejectBid(payload: IRefreshedBid) {
      const res = await api.get(`/market/bid/reject/${payload}`, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
  };
};

export default BidsApi;
