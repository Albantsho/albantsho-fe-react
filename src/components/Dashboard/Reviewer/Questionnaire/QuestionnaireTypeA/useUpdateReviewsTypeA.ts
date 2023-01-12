import useReviewsApi from "apis/Reviews.api";
import { IReviewTypeA, IReviewValuesTypeA } from "interfaces/reviews";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";

interface IProps {
  reviewValuesTypeA: IReviewValuesTypeA;
}

const useUpdateReviewsTypeA = ({ reviewValuesTypeA }: IProps) => {
  const { updateReview, completingReview } = useReviewsApi();
  const [countRate, setCountRate] = useState<number | null>(
    reviewValuesTypeA.rate
  );
  const { query, push } = useRouter();
  const reviewTypeAValues = useRef<IReviewTypeA>({
    introduction: reviewValuesTypeA.introduction
      ? reviewValuesTypeA.introduction
      : "",
    plot: reviewValuesTypeA.plot ? reviewValuesTypeA.plot : "",
    character: reviewValuesTypeA.character ? reviewValuesTypeA.character : "",
    genreAndStoryStructure: reviewValuesTypeA.genreAndStoryStructure
      ? reviewValuesTypeA.genreAndStoryStructure
      : "",
    dialogue: reviewValuesTypeA.dialogue ? reviewValuesTypeA.dialogue : "",
    storyQuality: reviewValuesTypeA.storyQuality
      ? reviewValuesTypeA.storyQuality
      : "",
    suggestions: reviewValuesTypeA.suggestions
      ? reviewValuesTypeA.suggestions
      : "",
  });
  const [loading, setLoading] = useState(false);

  const updateIntroductionTypeA =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { introduction: reviewTypeAValues.current.introduction },
          reviewValuesTypeA._id
        );
        console.log(res);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updatePlotTypeA =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { plot: reviewTypeAValues.current.plot },
          reviewValuesTypeA._id
        );
        console.log(res);
        toast.success(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateCharacterTypeA =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { character: reviewTypeAValues.current.character },
          reviewValuesTypeA._id
        );
        console.log(res);
        toast.success(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateGenreAndStoryStructureTypeA =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          {
            genreAndStoryStructure:
              reviewTypeAValues.current.genreAndStoryStructure,
          },
          reviewValuesTypeA._id
        );
        console.log(res);
        toast.success(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateDialogueTypeA =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { dialogue: reviewTypeAValues.current.dialogue },
          reviewValuesTypeA._id
        );
        console.log(res);
        toast.success(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateStoryQualityTypeA =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { storyQuality: reviewTypeAValues.current.storyQuality },
          reviewValuesTypeA._id
        );
        console.log(res);
        toast.success(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateSuggestionsTypeA =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { suggestions: reviewTypeAValues.current.suggestions },
          reviewValuesTypeA._id
        );
        console.log(res);
        toast.success(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateRateReview =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        console.log(countRate);
        const res = await updateReview(
          { rate: `${countRate}` },
          reviewValuesTypeA._id
        );
        console.log(res);
        toast.success(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const completeFileFunc = async () => {
    try {
      setLoading(true);
      await updateReview(
        {
          rate: `${countRate}`,
          introduction: reviewTypeAValues.current.introduction,
          plot: reviewTypeAValues.current.plot,
          genreAndStoryStructure:
            reviewTypeAValues.current.genreAndStoryStructure,
          dialogue: reviewTypeAValues.current.dialogue,
          storyQuality: reviewTypeAValues.current.storyQuality,

          suggestions: reviewTypeAValues.current.suggestions,
        },
        reviewValuesTypeA._id
      );
      const res = await completingReview(reviewValuesTypeA._id, {
        completed: true,
      });
      push(routes.reviewerDashboardPreviewTypeA.dynamicUrl(query.id as string));
      console.log(res);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    reviewTypeAValues,
    updateIntroductionTypeA,
    updatePlotTypeA,
    updateCharacterTypeA,
    updateGenreAndStoryStructureTypeA,
    updateDialogueTypeA,
    updateStoryQualityTypeA,
    updateSuggestionsTypeA,
    countRate,
    setCountRate,
    updateRateReview,
    loading,
    completeFileFunc,
  };
};

export default useUpdateReviewsTypeA;
