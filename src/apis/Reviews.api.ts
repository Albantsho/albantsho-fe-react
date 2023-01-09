import useAxiosPrivate from "hooks/useAxiosPrivate";

interface IUpdateReviewPayload {
  introduction?: string;
  plot?: string;
  character?: string;
  genreAndStoryStructure?: string;
  dialogue?: string;
  storyQuality?: string;
  suggestions?: string;
  worldBuilding?: string;
  scriptFormattingAndEditing?: string;
  writerVoice?: string;
  authenticityFeedback?: string;
  openingAndClosingImage?: string;
  rate?: string;
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

    async getAllRequestedReviews(searchQuery: string) {
      const res = await axiosPrivate.get(
        `/review/requests?search=${searchQuery}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getAssignedRequestedReviews(searchQuery: string) {
      const res = await axiosPrivate.get(
        `/review/request/assigned?search=${searchQuery}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getCompletedRequestedReviews(searchQuery: string) {
      const res = await axiosPrivate.get(
        `/review/request/completed?search=${searchQuery}`,
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
