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

const ReviewsApi = (controller?: AbortController) => ({
  async updateReview(id: string, payload: IUpdateReview) {
    const res = await api.post(`/reviews/${id}`, payload, {
      signal: controller?.signal,
    });

    return res.data;
  },
});

export default ReviewsApi;
