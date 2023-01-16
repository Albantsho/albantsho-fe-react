import useAxiosPrivate from "hooks/useAxiosPrivate";

interface IPayloadIncreaseWalletBalance {
  transactionId: string;
  paymentPlatform: string;
}

interface IPayloadWithdrawWallet {
  amount: string;
  method: string;
  bankAccountName?: string;
  bankName?: string;
  bankAccountNumber?: string;
  network?: string;
  usdtTrc20Address?: string;
}

const useWalletApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async getWalletBalance() {
      const res = await axiosPrivate.get("/wallet/balance", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async increaseWalletBalance(payload: IPayloadIncreaseWalletBalance) {
      const res = await axiosPrivate.post("/wallet/deposit", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async withdrawWallet(payload: IPayloadWithdrawWallet) {
      const res = await axiosPrivate.post("/wallet/withdraw", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useWalletApi;
