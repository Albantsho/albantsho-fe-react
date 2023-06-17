import useReviewsApi from "apis/Reviews.api";
import { IReviewTypeB, IReviewValuesTypeB } from "interfaces/reviews";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import errorHandler from "utils/error-handler";
import routes from "utils/routes";
import successHandler from "utils/success-handler";

interface IProps {
  reviewValuesTypeB: IReviewValuesTypeB;
}

const useUpdateReviewsTypeB = ({ reviewValuesTypeB }: IProps) => {
  const { updateReview, completingReview } = useReviewsApi();
  const [countRate, setCountRate] = useState<number | null>(
    reviewValuesTypeB.rate
  );
  const reviewTypeBValues = useRef<IReviewTypeB>({
    introduction: reviewValuesTypeB.introduction
      ? reviewValuesTypeB.introduction
      : "",
    plot: reviewValuesTypeB.plot ? reviewValuesTypeB.plot : "",
    character: reviewValuesTypeB.character ? reviewValuesTypeB.character : "",
    genreAndStoryStructure: reviewValuesTypeB.genreAndStoryStructure
      ? reviewValuesTypeB.genreAndStoryStructure
      : "",
    dialogue: reviewValuesTypeB.dialogue ? reviewValuesTypeB.dialogue : "",
    storyQuality: reviewValuesTypeB.storyQuality
      ? reviewValuesTypeB.storyQuality
      : "",
    worldBuilding: reviewValuesTypeB.worldBuilding
      ? reviewValuesTypeB.worldBuilding
      : "",
    scriptFormattingAndEditing: reviewValuesTypeB.scriptFormattingAndEditing
      ? reviewValuesTypeB.scriptFormattingAndEditing
      : "",
    writerVoice: reviewValuesTypeB.writerVoice
      ? reviewValuesTypeB.writerVoice
      : "",
    authenticityFeedback: reviewValuesTypeB.authenticityFeedback
      ? reviewValuesTypeB.authenticityFeedback
      : "",
    suggestions: reviewValuesTypeB.suggestions
      ? reviewValuesTypeB.suggestions
      : "",
    openingAndClosingImage: reviewValuesTypeB.openingAndClosingImage
      ? reviewValuesTypeB.openingAndClosingImage
      : "",
  });
  const [loading, setLoading] = useState(false);
  const { query, push } = useRouter();

  const updateIntroductionTypeB =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { introduction: reviewTypeBValues.current.introduction },
          reviewValuesTypeB._id
        );
        successHandler(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updatePlotTypeB =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { plot: reviewTypeBValues.current.plot },
          reviewValuesTypeB._id
        );
        successHandler(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateCharacterTypeB =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { character: reviewTypeBValues.current.character },
          reviewValuesTypeB._id
        );
        successHandler(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateGenreAndStoryStructureTypeB =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          {
            genreAndStoryStructure:
              reviewTypeBValues.current.genreAndStoryStructure,
          },
          reviewValuesTypeB._id
        );
        successHandler(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateDialogueTypeB =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { dialogue: reviewTypeBValues.current.dialogue },
          reviewValuesTypeB._id
        );
        successHandler(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateStoryQualityTypeB =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { storyQuality: reviewTypeBValues.current.storyQuality },
          reviewValuesTypeB._id
        );
        successHandler(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateWorldBuildingTypeB =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { worldBuilding: reviewTypeBValues.current.worldBuilding },
          reviewValuesTypeB._id
        );
        successHandler(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateScriptFormattingAndEditingTypeB =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          {
            scriptFormattingAndEditing:
              reviewTypeBValues.current.scriptFormattingAndEditing,
          },
          reviewValuesTypeB._id
        );
        successHandler(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateWriterVoiceTypeB =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { writerVoice: reviewTypeBValues.current.writerVoice },
          reviewValuesTypeB._id
        );
        successHandler(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateAuthenticityFeedbackTypeB =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          {
            authenticityFeedback:
              reviewTypeBValues.current.authenticityFeedback,
          },
          reviewValuesTypeB._id
        );
        successHandler(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateOpeningAndClosingImageTypeB =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          {
            openingAndClosingImage:
              reviewTypeBValues.current.openingAndClosingImage,
          },
          reviewValuesTypeB._id
        );
        successHandler(res.message);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateSuggestionsTypeB =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { suggestions: reviewTypeBValues.current.suggestions },
          reviewValuesTypeB._id
        );
        successHandler(res.message);
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
        const res = await updateReview(
          { rate: `${countRate}` },
          reviewValuesTypeB._id
        );
        successHandler(res.message);
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
          introduction: reviewTypeBValues.current.introduction,
          plot: reviewTypeBValues.current.plot,
          genreAndStoryStructure:
            reviewTypeBValues.current.genreAndStoryStructure,
          dialogue: reviewTypeBValues.current.dialogue,
          storyQuality: reviewTypeBValues.current.storyQuality,
          worldBuilding: reviewTypeBValues.current.worldBuilding,
          scriptFormattingAndEditing:
            reviewTypeBValues.current.scriptFormattingAndEditing,
          writerVoice: reviewTypeBValues.current.writerVoice,
          authenticityFeedback: reviewTypeBValues.current.authenticityFeedback,
          openingAndClosingImage:
            reviewTypeBValues.current.openingAndClosingImage,
          suggestions: reviewTypeBValues.current.suggestions,
        },
        reviewValuesTypeB._id
      );
      await completingReview(reviewValuesTypeB._id, {
        completed: true,
      });
      push(routes.reviewerDashboardPreviewTypeB.url(query.id as string));
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    updateIntroductionTypeB,
    updatePlotTypeB,
    updateCharacterTypeB,
    updateGenreAndStoryStructureTypeB,
    updateDialogueTypeB,
    updateStoryQualityTypeB,
    updateWorldBuildingTypeB,
    updateScriptFormattingAndEditingTypeB,
    updateWriterVoiceTypeB,
    updateAuthenticityFeedbackTypeB,
    updateOpeningAndClosingImageTypeB,
    updateSuggestionsTypeB,
    updateRateReview,
    setCountRate,
    countRate,
    reviewTypeBValues,
    completeFileFunc,
    loading,
  };
};

export default useUpdateReviewsTypeB;
