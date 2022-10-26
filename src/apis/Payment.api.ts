import { useUserStore } from "app/user.store";
import shallow from "zustand/shallow";
import api from "./configs/axios.config";

interface IVerifyScriptPayment {
  bid_id: string;
  transaction_id: number;
}

const usePaymentApi = (controller?: AbortController) => {
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
