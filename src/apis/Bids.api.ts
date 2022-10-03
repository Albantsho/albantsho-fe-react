import { useEffect, useRef } from "react";
import api from "./configs/axios.config";

interface ICreateBid {
  script_basic_id: string;
  amount: number;
}

interface IUserBid {
  script_basic_id: string;
  amount: number;
}

const BidsApi = (controller?: AbortController) => {
  const token = useRef<string>("");

  useEffect(() => {
    let tk = localStorage.getItem("USER_TOKEN");
    if (tk === null) tk = "";
    token.current = tk;
  }, []);

  return {
    async createBid(payload: ICreateBid) {
      const res = await api.post("/market/bid", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async userBid(payload: IUserBid) {
      const res = await api.post("/market/bid", payload, {
        signal: controller?.signal,
        headers: {
          Token: token.current,
        },
      });

      return res.data;
    },

    async acceptBid(payload: string) {
      const res = await api.get(`/market/bid/accept/${payload}`, {
        signal: controller?.signal,
        headers: {
          Token: token.current,
        },
      });

      return res.data;
    },

    async rejectBid(payload: string) {
      const res = await api.get(`/market/bid/reject/${payload}`, {
        signal: controller?.signal,
        headers: {
          Token: token.current,
        },
      });

      return res.data;
    },
  };
};

export default BidsApi;
