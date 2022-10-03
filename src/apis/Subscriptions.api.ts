import { useEffect, useRef } from "react";
import api from "./configs/axios.config";

const useSubscriptionsApi = (controller?: AbortController) => {
  const token = useRef<string>("");

  useEffect(() => {
    let tk = localStorage.getItem("USER_TOKEN");
    if (tk === null) tk = "";
    token.current = tk;
  }, []);

  return {
    async getUserInformation() {
      const res = await api.get("/subscription", {
        signal: controller?.signal,
        headers: {
          Token: token.current,
        },
      });

      return res.data;
    },
  };
};

export default useSubscriptionsApi;
