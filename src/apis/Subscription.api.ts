import api from "./configs/axios.config";

interface ISubscriptions {
  sub_name: string;
  paid: boolean;
}

const useSubscriptionApi = (controller?: AbortController) => {
  return {
    async subscription(payload: ISubscriptions) {
      const res = await api.post("/subscription", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useSubscriptionApi;
