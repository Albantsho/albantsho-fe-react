import useReviewsApi from "apis/Reviews.api";
import { IReviewTypeA, IReviewTypeB } from "interfaces/reviews";
import { useRef, useState } from "react";
import errorHandler from "utils/error-handler";

const useUpdateReviews = () => {
  const { updateReview } = useReviewsApi();
  const [countRate, setCountRate] = useState<number | null>(2);

  const reviewTypeAValues = useRef<IReviewTypeA>({
    introduction: "",
    plot: "",
    character: "",
    genreAndStoryStructure: "",
    dialogue: "",
    storyQuality: "",
    suggestions: "",
  });
  const reviewTypeBValues = useRef<IReviewTypeB>({
    introduction: "",
    plot: "",
    character: "",
    genreAndStoryStructure: "",
    dialogue: "",
    storyQuality: "",
    worldBuilding: "",
    scriptFormattingAndEditing: "",
    writerVoice: "",
    authenticityFeedback: "",
    suggestions: "",
    openingAndClosingImage: "",
  });

  const updateIntroductionTypeA =
    (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async () => {
      try {
        setLoading(true);
        const res = await updateReview(
          { introduction: reviewTypeAValues.current.introduction },
          "45"
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
          "45"
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
          "45"
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
          "45"
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
          "45"
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
          "45"
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
          "45"
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
          "45"
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
          "45"
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
          "45"
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
          "45"
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
          "45"
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
          "45"
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
          "45"
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
          "45"
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
          "45"
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
          "45"
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
          "45"
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
          "45"
        );
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };

  const updateRateReview = async () => {
    try {
      const res = await updateReview({ rate: `${countRate}` }, "45");
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
