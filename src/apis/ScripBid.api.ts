import { useUserStore } from "app/user.store";
import shallow from "zustand/shallow";
import api from "./configs/axios.config";

interface ICreateBid {
  scriptId: string;
  amount: number;
}

const useScripBidApi = (controller?: AbortController) => {
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
      const res = await api.post("/bid/create", payload, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },

    async deleteBid(id: string) {
      const res = await api.delete(`/bid/delete/${id}`, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },

    async acceptBid(payload: object, id: string) {
      const res = await api.post(`/bid/accept/${id}`, payload, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },

    async rejectBid(payload: object, id: string) {
      const res = await api.post(`/bid/reject/${id}`, payload, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },

    async getAllBids() {
      const res = await api.get("/bid/producer/all", {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },

    async getOneBid(id: string) {
      const res = await api.get(`/bid/all/${id}`, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },

    async getBidScript(id: string) {
      const res = await api.get(`/bid/${id}`, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
  };
};

export default useScripBidApi;
