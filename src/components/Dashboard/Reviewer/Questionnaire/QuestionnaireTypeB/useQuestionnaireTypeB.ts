import { IReviewValuesTypeB } from "interfaces/reviews";
import useUpdateReviewsTypeB from "./useUpdateReviewsTypeB";

interface IProps {
  reviewValuesTypeB: IReviewValuesTypeB;
}

const useQuestionnaireTypeB = ({ reviewValuesTypeB }: IProps) => {
  const {
    countRate,
    reviewTypeBValues,
    setCountRate,
    updateAuthenticityFeedbackTypeB,
    updateCharacterTypeB,
    updateDialogueTypeB,
    updateGenreAndStoryStructureTypeB,
    updateIntroductionTypeB,
    updateOpeningAndClosingImageTypeB,
    updatePlotTypeB,
    updateRateReview,
    updateScriptFormattingAndEditingTypeB,
    updateStoryQualityTypeB,
    updateSuggestionsTypeB,
    updateWorldBuildingTypeB,
    updateWriterVoiceTypeB,
    completeFileFunc,
    loading,
  } = useUpdateReviewsTypeB({ reviewValuesTypeB });

  const listQuestionnaireAccordionTypeB = [
    {
      title: "INTRODUCTION",
      initialValue: reviewTypeBValues.current.introduction,
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          introduction: value,
        }),
      saveValue: updateIntroductionTypeB,
    },
    {
      title: "Plot",
      initialValue: reviewTypeBValues.current.plot,
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          plot: value,
        }),
      saveValue: updatePlotTypeB,
    },
    {
      title: "Character(s)",
      initialValue: reviewTypeBValues.current.character,
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          character: value,
        }),
      saveValue: updateCharacterTypeB,
    },
    {
      title: "Genre tropes and Story structure",
      initialValue: reviewTypeBValues.current.genreAndStoryStructure,
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          genreAndStoryStructure: value,
        }),
      saveValue: updateGenreAndStoryStructureTypeB,
    },
    {
      title: "Dialogue",
      initialValue: reviewTypeBValues.current.dialogue,
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          dialogue: value,
        }),
      saveValue: updateDialogueTypeB,
    },
    {
      title: "Story quality",
      description:
        "how relevant is this story concept and what is unique or not about its approach to the ide",
      initialValue: reviewTypeBValues.current.storyQuality,
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          storyQuality: value,
        }),
      saveValue: updateStoryQualityTypeB,
    },
    {
      title: "World-building",
      description: "how authentic and real is the world-building",
      initialValue: reviewTypeBValues.current.worldBuilding,
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          worldBuilding: value,
        }),
      saveValue: updateWorldBuildingTypeB,
    },
    {
      title: "Script formatting & Editing",
      description:
        "how well are the scripting conventions creatively utilized? Reference scene or page numbers",
      initialValue: reviewTypeBValues.current.scriptFormattingAndEditing,
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          scriptFormattingAndEditing: value,
        }),
      saveValue: updateScriptFormattingAndEditingTypeB,
    },
    {
      title: "Writer’s Voice",
      description: "What’s unique or not about  the writing style",
      initialValue: reviewTypeBValues.current.writerVoice,
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          writerVoice: value,
        }),
      saveValue: updateWriterVoiceTypeB,
    },
    {
      title: "Authenticity feedback",
      initialValue: reviewTypeBValues.current.authenticityFeedback,
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          authenticityFeedback: value,
        }),
      saveValue: updateAuthenticityFeedbackTypeB,
    },
    {
      title: "Opening  and closing image",
      initialValue: reviewTypeBValues.current.openingAndClosingImage,
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          openingAndClosingImage: value,
        }),
      saveValue: updateOpeningAndClosingImageTypeB,
    },
    {
      title: "Suggestions",
      initialValue: reviewTypeBValues.current.suggestions,
      description: "your final thoughts and suggestions",
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          suggestions: value,
        }),
      saveValue: updateSuggestionsTypeB,
    },
  ];

  const completed = Object.values(
    reviewTypeBValues.current && `${countRate}`
  ).every((value) => value);

  return {
    completed,
    countRate,
    setCountRate,
    listQuestionnaireAccordionTypeB,
    updateRateReview,
    completeFileFunc,
    loading,
  };
};

export default useQuestionnaireTypeB;
