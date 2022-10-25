import useUserStore from "app/user.store";
import api from "./configs/axios.config";

interface IVerifyScriptPayment {
  bid_id: string;
  transaction_id: number;
}

const usePaymentApi = (controller?: AbortController) => {
  const { token } = useUserStore((state) => state.user);

  return {
    async verifyScriptPayment(payload: IVerifyScriptPayment) {
      const res = await api.post("/market/bid/user-payment", payload, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
  };
};

export default usePaymentApi;
