import useAxiosPrivate from "hooks/useAxiosPrivate";

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
  const axiosPrivate = useAxiosPrivate();

  return {
    async createNewReview(payload: object) {
      const res = await axiosPrivate.post("/review/create", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async deleteReview(id: string) {
      const res = await axiosPrivate.delete(`/review/delete/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async completingReview(payload: object, reviewId: string) {
      const res = await axiosPrivate.patch(
        `/review/complete/${reviewId}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async sendReviewToWriterEmail(payload: object, reviewId: string) {
      const res = await axiosPrivate.patch(
        `/review/send/email/${reviewId}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getAllReviews() {
      const res = await axiosPrivate.get("/review/all", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getOneReview(reviewId: string) {
      const res = await axiosPrivate.get(`/review/${reviewId}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async updateReview(payload: IUpdateReviewPayload, reviewId: string) {
      const res = await axiosPrivate.patch(
        `/review/update/${reviewId}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getAllRequestedReviews(query?: string) {
      const res = await axiosPrivate.get(`/review/requests?${query}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getAssignedRequestedReviews(query?: string) {
      const res = await axiosPrivate.get(`/review/request/assigned?${query}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getCompletedRequestedReviews(query?: string) {
      const res = await axiosPrivate.get(`/review/request/completed?${query}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getAllReviewerTasks() {
      const res = await axiosPrivate.get("/review/my/tasks", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async assignReviewRequestToReviewer(
      payload: IAssignReviewRequestToReviewerPayload
    ) {
      const res = await axiosPrivate.post("/review/assign", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getWriterReviewRequests() {
      const res = await axiosPrivate.get("/review/scripts", {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useReviewsApi;
