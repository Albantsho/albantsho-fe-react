import useAxiosPrivate from "hooks/useAxiosPrivate";

interface IPayloadIncreaseWalletBalance {
  transactionId: string;
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

    async increaseWalletBalance(
      transactionId: string,
      payload: IPayloadIncreaseWalletBalance
    ) {
      const res = await axiosPrivate.post(
        `/wallet/deposit/${transactionId}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getWithdraw() {
      const res = await axiosPrivate.post(
        "/wallet/withdraw",
        {},
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },
  };
};

export default useWalletApi;
