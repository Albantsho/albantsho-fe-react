import useAxiosPrivate from "hooks/useAxiosPrivate";

const useWallet = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async getWalletBalance() {
      const res = await axiosPrivate.get("/wallet/balance", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async increaseWalletBalance(transferId: string) {
      const res = await axiosPrivate.get(`/wallet/deposit/${transferId}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getWithdraw() {
      const res = await axiosPrivate.get("/wallet/withdraw", {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useWallet;
