import useAxiosPrivate from "hooks/useAxiosPrivate";

const useTransactionApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async getAllTransactions() {
      const res = await axiosPrivate.get("/transaction/withdraws", {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useTransactionApi;
