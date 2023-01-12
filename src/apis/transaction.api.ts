import useAxiosPrivate from "hooks/useAxiosPrivate";

const useTransactionApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async getAllWithdraws() {
      const res = await axiosPrivate.get("/transaction/withdraws", {
        signal: controller?.signal,
      });

      return res.data;
    },
    async getAllPayments() {
      const res = await axiosPrivate.get("/transaction/payments", {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useTransactionApi;
