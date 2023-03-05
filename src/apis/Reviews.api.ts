import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IResData } from "interfaces/response";
import {
  IAssignedOrCompletedRequest,
  ICurrentRequest,
} from "interfaces/reviews";
import { useCallback } from "react";

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

interface IData_getReviews {
  scripts: ICurrentRequest[];
  pagesCount: number;
  currentPage: number;
}
interface IData_getAssignedOrCompletedRequest {
  scripts: IAssignedOrCompletedRequest[];
  pagesCount: number;
  currentPage: number;
}

const useReviewsApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  const getAllRequestedReviews = useCallback(
    async (searchQuery: string) => {
      const res = await axiosPrivate.get<IResData<IData_getReviews>>(
        `/review/requests?search=${searchQuery}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const getAssignedRequestedReviews = useCallback(
    async (searchQuery: string) => {
      const res = await axiosPrivate.get<
        IResData<IData_getAssignedOrCompletedRequest>
      >(`/review/request/assigned?search=${searchQuery}`, {
        signal: controller?.signal,
      });

      return res.data.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const getCompletedRequestedReviews = useCallback(
    async (searchQuery: string) => {
      const res = await axiosPrivate.get<
        IResData<IData_getAssignedOrCompletedRequest>
      >(`/review/request/completed?search=${searchQuery}`, {
        signal: controller?.signal,
      });

      return res.data.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const assignReviewRequestToReviewer = useCallback(
    async (payload: IAssignReviewRequestToReviewerPayload) => {
      const res = await axiosPrivate.post<IResData<object>>(
        "/review/assign",
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    [axiosPrivate, controller?.signal]
  );

  return {
    getAllRequestedReviews,
    getAssignedRequestedReviews,
    getCompletedRequestedReviews,
    assignReviewRequestToReviewer,
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

    async completingReview(reviewId: string, payload: { completed: boolean }) {
      const res = await axiosPrivate.patch(
        `/review/complete/${reviewId}`,
        payload,
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

    async getOneReview(scriptId: string) {
      const res = await axiosPrivate.get(`/review/${scriptId}`, {
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

    async getAllReviewerTasks(query: string) {
      const res = await axiosPrivate.get(`/review/my/tasks?${query}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getWriterReviewRequests(query: string) {
      const res = await axiosPrivate.get(`/review/scripts?${query}`, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useReviewsApi;
