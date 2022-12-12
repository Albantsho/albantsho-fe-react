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
  world_building?: string;
  script_formatting?: string;
  writer_voice?: string;
  authenticity_feedback?: string;
  opening_and_closing_image?: string;
}

interface IAssignReviewRequestToReviewerPayload {
  scriptId: string;
  userId: string;
}

const useReviewsApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async createNewReview(payload: { scriptId: string }) {
      const res = await axiosPrivate.post("/review/create", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async deleteReview(reviewId: string) {
      const res = await axiosPrivate.delete(`/review/delete/${reviewId}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async completingReview(reviewId: string) {
      const res = await axiosPrivate.patch(
        `/review/complete/${reviewId}`,
        {},
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async sendReviewToWriterEmail(reviewId: string) {
      const res = await axiosPrivate.post(
        `/review/send/email/${reviewId}`,
        {},
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

    async getAllRequestedReviews(query: string, searchQuery?: string) {
      const res = await axiosPrivate.get(
        `/review/requests?limit=10&${query}&search=${searchQuery}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getAssignedRequestedReviews(query: string, searchQuery?: string) {
      const res = await axiosPrivate.get(
        `/review/request/assigned?limit=10&${query}&search=${searchQuery}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getCompletedRequestedReviews(query: string, searchQuery?: string) {
      const res = await axiosPrivate.get(
        `/review/request/completed?limit=10&${query}&search=${searchQuery}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getAllReviewerTasks(query: string) {
      const res = await axiosPrivate.get(`/review/my/tasks?limit=10&${query}`, {
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

    async getWriterReviewRequests(query: string) {
      const res = await axiosPrivate.get(`/review/scripts?limit=10&${query}`, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useReviewsApi;
