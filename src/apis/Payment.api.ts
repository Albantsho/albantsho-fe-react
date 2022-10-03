import { useEffect, useRef } from "react";
import api from "./configs/axios.config";

interface IVerifyScriptPayment {
  bid_id: string;
  transaction_id: number;
}

const usePaymentApi = (controller?: AbortController) => {
  const token = useRef<string>("");

  useEffect(() => {
    let tk = localStorage.getItem("USER_TOKEN");
    if (tk === null) tk = "";
    token.current = tk;
  }, []);

  return {
    async verifyScriptPayment(payload: IVerifyScriptPayment) {
      const res = await api.post("/market/bid/user-payment", payload, {
        signal: controller?.signal,
        headers: {
          Token: token.current,
        },
      });

      return res.data;
    },
  };
};

export default usePaymentApi;
