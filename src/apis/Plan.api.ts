import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IResData } from "interfaces/response";
import { useCallback } from "react";

interface IPayloadBuyReviewPlan {
  scriptId: string;
  plan: string;
  transactionId: string;
}

interface IPayloadBuySubscriptionPlan {
  transactionId: string;
}

const usePlanApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  const buySubscriptionPlan = useCallback(
    async (payload: IPayloadBuySubscriptionPlan) => {
      const res = await axiosPrivate.post<IResData<object>>(
        "/plan/buy/subscription",
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const buyReviewsPlan = useCallback(
    async (payload: IPayloadBuyReviewPlan) => {
      const res = await axiosPrivate.post<IResData<object>>(
        "/plan/buy/review",
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [axiosPrivate, controller?.signal]
  );

  return {
    buySubscriptionPlan,
    buyReviewsPlan,
  };
};

export default usePlanApi;
