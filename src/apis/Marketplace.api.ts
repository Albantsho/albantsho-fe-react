import { useEffect, useRef } from "react";
import api from "./configs/axios.config";

const useMarketplaceApi = (controller?: AbortController) => {
  const token = useRef<string>("");

  useEffect(() => {
    let tk = localStorage.getItem("USER_TOKEN");
    if (tk === null) tk = "";
    token.current = tk;
  }, []);

  return {
    async getScripts() {
      const res = await api.get("/market", {
        signal: controller?.signal,
        headers: {
          Token: token.current,
        },
      });

      return res.data;
    },

    async getUsers() {
      const res = await api.get("/market/user/all", {
        signal: controller?.signal,
        headers: {
          Token: token.current,
        },
      });

      return res.data;
    },

    async getScript(id: string) {
      const res = await api.get(`/market/${id}`, {
        signal: controller?.signal,
        headers: {
          Token: token.current,
        },
      });

      return res.data;
    },

    async addingScript(id: string, payload: string) {
      const res = await api.post(`/market/${id}`, payload, {
        signal: controller?.signal,
        headers: {
          Token: token.current,
        },
      });

      return res.data;
    },
  };
};

export default useMarketplaceApi;
