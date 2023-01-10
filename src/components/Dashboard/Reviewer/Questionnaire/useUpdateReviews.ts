import useReviewsApi from "apis/Reviews.api";
import { IReviewTypeA, IReviewTypeB, IReviewValues } from "interfaces/reviews";
import { useRef, useState } from "react";
import errorHandler from "utils/error-handler";

interface IProps {
  reviewValues: IReviewValues;
}

const useUpdateReviews = ({ reviewValues }: IProps) => {
  const { updateReview } = useReviewsApi();
  const [countRate, setCountRate] = useState<number | null>(2);

  const reviewTypeAValues = useRef<IReviewTypeA>({
    introduction: reviewValues.introduction ? reviewValues.introduction : "",
    plot: reviewValues.plot ? reviewValues.plot : "",
    character: reviewValues.character ? reviewValues.character : "",
    genreAndStoryStructure: reviewValues.genreAndStoryStructure
      ? reviewValues.genreAndStoryStructure
      : "",
    dialogue: reviewValues.dialogue ? reviewValues.dialogue : "",
    storyQuality: reviewValues.storyQuality ? reviewValues.storyQuality : "",
    suggestions: reviewValues.suggestions ? reviewValues.suggestions : "",
  });
  const reviewTypeBValues = useRef<IReviewTypeB>({
    introduction: reviewValues.introduction ? reviewValues.introduction : "",
    plot: reviewValues.plot ? reviewValues.plot : "",
    character: reviewValues.character ? reviewValues.character : "",
    genreAndStoryStructure: reviewValues.genreAndStoryStructure
      ? reviewValues.genreAndStoryStructure
      : "",
    dialogue: reviewValues.dialogue ? reviewValues.dialogue : "",
    storyQuality: reviewValues.storyQuality ? reviewValues.storyQuality : "",
    worldBuilding: reviewValues.worldBuilding ? reviewValues.worldBuilding : "",
    scriptFormattingAndEditing: reviewValues.scriptFormattingAndEditing
      ? reviewValues.scriptFormattingAndEditing
      : "",
    writerVoice: reviewValues.writerVoice ? reviewValues.writerVoice : "",
    authenticityFeedback: reviewValues.authenticityFeedback
      ? reviewValues.authenticityFeedback
      : "",
    suggestions: reviewValues.suggestions ? reviewValues.suggestions : "",
    openingAndClosingImage: reviewValues.openingAndClosingImage
      ? reviewValues.openingAndClosingImage
      : "",
  });

  const updateIntroductionTypeA =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { introduction: reviewTypeAValues.current.introduction },
          reviewValues._id
        );
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
          reviewValues._id
        );
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
          reviewValues._id
        );
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
          reviewValues._id
        );
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
          reviewValues._id
        );
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
          reviewValues._id
        );
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
          reviewValues._id
        );
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateIntroductionTypeB =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { introduction: reviewTypeBValues.current.introduction },
          reviewValues._id
        );
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
          reviewValues._id
        );
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
          reviewValues._id
        );
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
          reviewValues._id
        );
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
          reviewValues._id
        );
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
          reviewValues._id
        );
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
          reviewValues._id
        );
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
          reviewValues._id
        );
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
          reviewValues._id
        );
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
          reviewValues._id
        );
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
          reviewValues._id
        );
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
          reviewValues._id
        );
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateRateReview = async () => {
    try {
      const res = await updateReview(
        { rate: `${countRate}` },
        reviewValues._id
      );
    } catch (error) {
      errorHandler(error);
    }
  };

  return {
    reviewTypeAValues,
    reviewTypeBValues,
    updateIntroductionTypeA,
    updatePlotTypeA,
    updateCharacterTypeA,
    updateGenreAndStoryStructureTypeA,
    updateDialogueTypeA,
    updateStoryQualityTypeA,
    updateSuggestionsTypeA,
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
  };
};

export default useUpdateReviews;
