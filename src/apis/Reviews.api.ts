import api from "./configs/axios.config";

interface IUpdateReviewPayload {
  introduction: string;
  plot: string;
  character: string;
  genre_and_story_structure: string;
  dialogue: string;
  story_quality: string;
  suggestions: string;
  rate: string;
}

interface IAssignReviewRequestToReviewerPayload {
  scriptId: string;
  userId: string;
}

const useReviewsApi = (controller?: AbortController) => {
  return {
    async createNewReview(payload: object) {
      const res = await api.post("/review/create", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async deleteReview(id: string) {
      const res = await api.delete(`/review/delete/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async completingReview(payload: object, reviewId: string) {
      const res = await api.patch(`/review/complete/${reviewId}`, payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async sendReviewToWriterEmail(payload: object, reviewId: string) {
      const res = await api.patch(`/review/send/email/${reviewId}`, payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getAllReviews() {
      const res = await api.get("/review/all", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getOneReview(reviewId: string) {
      const res = await api.get(`/review/${reviewId}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async updateReview(payload: IUpdateReviewPayload, reviewId: string) {
      const res = await api.patch(`/review/update/${reviewId}`, payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getAllRequestedReviews() {
      const res = await api.get("/review/requests", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getAssignedRequestedReviews() {
      const res = await api.get("/review/request/assigned", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getCompletedRequestedReviews() {
      const res = await api.get("/review/request/completed", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getAllReviewerTasks() {
      const res = await api.get("/review/my/tasks", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async assignReviewRequestToReviewer(
      payload: IAssignReviewRequestToReviewerPayload
    ) {
      const res = await api.post("/review/assign", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getWriterReviewRequests() {
      const res = await api.get("/review/scripts", {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useReviewsApi;
