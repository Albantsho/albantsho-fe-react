import useUserStore from "app/user.store";
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
  const { token } = useUserStore((state) => state.user);

  return {
    async updateReview(id: string, payload: IUpdateReview) {
      const res = await api.post(`/reviews/${id}`, payload, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
  };
};

export default useReviewsApi;
