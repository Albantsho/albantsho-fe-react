import api from "./configs/axios.config";

interface IVerifyScriptPayment {
  bid_id: string;
  transaction_id: number;
}

const usePaymentApi = (controller?: AbortController) => {
  return {
    async verifyScriptPayment(payload: IVerifyScriptPayment) {
      const res = await api.post("/market/bid/user-payment", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default usePaymentApi;
