import { useEffect, useRef } from "react";
import api from "./configs/axios.config";

interface IUpdateReview {
  introduction: string;
  plot: string;
  character: string;
  genre_and_story_structure: string;
  dialogue: string;
  story_quality: string;
  suggestions: string;
  rating: string;
  status: string;
}

const useReviewsApi = (controller?: AbortController) => {
  const token = useRef<string>("");

  useEffect(() => {
    let tk = localStorage.getItem("USER_TOKEN");
    if (tk === null) tk = "";
    token.current = tk;
  }, []);

  return {
    async updateReview(id: string, payload: IUpdateReview) {
      const res = await api.post(`/reviews/${id}`, payload, {
        signal: controller?.signal,
        headers: {
          Token: token.current,
        },
      });

      return res.data;
    },
  };
};

export default useReviewsApi;
