import useAxiosPrivate from "hooks/useAxiosPrivate";

interface IPayloadBuyReviewPlan {
  scriptId: string;
  plan: string;
  transactionId: string;
}

const usePlanApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async buySubscriptionPlan() {
      const res = await axiosPrivate.post(
        "/plan/buy/subscription",
        {},
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async buyReviewsPlan(payload: IPayloadBuyReviewPlan) {
      const res = await axiosPrivate.post("/plan/buy/review", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default usePlanApi;
