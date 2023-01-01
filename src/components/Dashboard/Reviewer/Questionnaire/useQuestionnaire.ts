import useUpdateReviews from "./useUpdateReviews";

const useQuestionnaire = () => {
  const {
    countRate,
    reviewTypeAValues,
    reviewTypeBValues,
    setCountRate,
    updateAuthenticityFeedbackTypeB,
    updateCharacterTypeA,
    updateCharacterTypeB,
    updateDialogueTypeA,
    updateDialogueTypeB,
    updateGenreAndStoryStructureTypeA,
    updateGenreAndStoryStructureTypeB,
    updateIntroductionTypeA,
    updateIntroductionTypeB,
    updateOpeningAndClosingImageTypeB,
    updatePlotTypeA,
    updatePlotTypeB,
    updateRateReview,
    updateScriptFormattingAndEditingTypeB,
    updateStoryQualityTypeA,
    updateStoryQualityTypeB,
    updateSuggestionsTypeA,
    updateSuggestionsTypeB,
    updateWorldBuildingTypeB,
    updateWriterVoiceTypeB,
  } = useUpdateReviews();
  const listQuestionnaireAccordionTypeA = [
    {
      title: "INTRODUCTION",
      editorValue: (value: string) =>
        (reviewTypeAValues.current = {
          ...reviewTypeAValues.current,
          introduction: value,
        }),
      saveValue: updateIntroductionTypeA,
    },
    {
      title: "Plot",
      editorValue: (value: string) =>
        (reviewTypeAValues.current = {
          ...reviewTypeAValues.current,
          plot: value,
        }),
      saveValue: updatePlotTypeA,
    },
    {
      title: "Character(s)",
      editorValue: (value: string) =>
        (reviewTypeAValues.current = {
          ...reviewTypeAValues.current,
          character: value,
        }),
      saveValue: updateCharacterTypeA,
    },
    {
      title: "Genre tropes and Story structure",
      editorValue: (value: string) =>
        (reviewTypeAValues.current = {
          ...reviewTypeAValues.current,
          genreAndStoryStructure: value,
        }),
      saveValue: updateGenreAndStoryStructureTypeA,
    },
    {
      title: "Dialogue",
      editorValue: (value: string) =>
        (reviewTypeAValues.current = {
          ...reviewTypeAValues.current,
          dialogue: value,
        }),
      saveValue: updateDialogueTypeA,
    },
    {
      title: "Story quality",
      description:
        "how relevant is this story concept and what is unique or not about its approach to the ide",
      editorValue: (value: string) =>
        (reviewTypeAValues.current = {
          ...reviewTypeAValues.current,
          storyQuality: value,
        }),
      saveValue: updateStoryQualityTypeA,
    },
    {
      title: "Suggestions",
      description: "your final thoughts and suggestions",
      editorValue: (value: string) =>
        (reviewTypeAValues.current = {
          ...reviewTypeAValues.current,
          suggestions: value,
        }),
      saveValue: updateSuggestionsTypeA,
    },
  ];

  const listQuestionnaireAccordionTypeB = [
    {
      title: "INTRODUCTION",
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          introduction: value,
        }),
      saveValue: updateIntroductionTypeB,
    },
    {
      title: "Plot",
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          plot: value,
        }),
      saveValue: updatePlotTypeB,
    },
    {
      title: "Character(s)",
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          character: value,
        }),
      saveValue: updateCharacterTypeB,
    },
    {
      title: "Genre tropes and Story structure",
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          genreAndStoryStructure: value,
        }),
      saveValue: updateGenreAndStoryStructureTypeB,
    },
    {
      title: "Dialogue",
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
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          writerVoice: value,
        }),
      saveValue: updateWriterVoiceTypeB,
    },
    {
      title: "Authenticity feedback",
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          authenticityFeedback: value,
        }),
      saveValue: updateAuthenticityFeedbackTypeB,
    },
    {
      title: "Opening  and closing image",
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          openingAndClosingImage: value,
        }),
      saveValue: updateOpeningAndClosingImageTypeB,
    },
    {
      title: "Suggestions",
      description: "your final thoughts and suggestions",
      editorValue: (value: string) =>
        (reviewTypeBValues.current = {
          ...reviewTypeBValues.current,
          suggestions: value,
        }),
      saveValue: updateSuggestionsTypeB,
    },
  ];

  const completed = Object.values(reviewTypeAValues.current).every(
    (value) => value
  );

  return {
    completed,
    countRate,
    setCountRate,
    listQuestionnaireAccordionTypeA,
    listQuestionnaireAccordionTypeB,
  };
};

export default useQuestionnaire;
