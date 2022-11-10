import api from "./configs/axios.config";

interface ICreateNewReviewPayload {
  scriptId: string;
  userId: string;
}

const useInvite = (controller?: AbortController) => {
  return {
    async createNewReview(payload: ICreateNewReviewPayload) {
      const res = await api.post("/invite/send", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async deleteReview(payload: object, inviteId: string) {
      const res = await api.patch(`/invite/reject/${inviteId}`, payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async CompleteReview() {
      const res = await api.patch("/invite/all", {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useInvite;
