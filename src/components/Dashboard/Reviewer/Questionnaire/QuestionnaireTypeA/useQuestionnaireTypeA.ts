import { IReviewValuesTypeA } from "interfaces/reviews";
import useUpdateReviews from "./useUpdateReviewsTypeA";

interface IProps {
  reviewValuesTypeA: IReviewValuesTypeA;
}

const useQuestionnaireTypeA = ({ reviewValuesTypeA }: IProps) => {
  const {
    countRate,
    reviewTypeAValues,
    setCountRate,
    updateCharacterTypeA,
    updateDialogueTypeA,
    updateGenreAndStoryStructureTypeA,
    updateIntroductionTypeA,
    updatePlotTypeA,
    updateRateReview,
    updateStoryQualityTypeA,
    updateSuggestionsTypeA,
    loading,
    completeFileFunc,
  } = useUpdateReviews({ reviewValuesTypeA });
  const listQuestionnaireAccordionTypeA = [
    {
      title: "INTRODUCTION",
      initialValue: reviewTypeAValues.current.introduction,
      editorValue: (value: string) =>
        (reviewTypeAValues.current = {
          ...reviewTypeAValues.current,
          introduction: value,
        }),
      saveValue: updateIntroductionTypeA,
    },
    {
      title: "Plot",
      initialValue: reviewTypeAValues.current.plot,
      editorValue: (value: string) =>
        (reviewTypeAValues.current = {
          ...reviewTypeAValues.current,
          plot: value,
        }),
      saveValue: updatePlotTypeA,
    },
    {
      title: "Character(s)",
      initialValue: reviewTypeAValues.current.character,
      editorValue: (value: string) =>
        (reviewTypeAValues.current = {
          ...reviewTypeAValues.current,
          character: value,
        }),
      saveValue: updateCharacterTypeA,
    },
    {
      title: "Genre tropes and Story structure",
      initialValue: reviewTypeAValues.current.genreAndStoryStructure,
      editorValue: (value: string) =>
        (reviewTypeAValues.current = {
          ...reviewTypeAValues.current,
          genreAndStoryStructure: value,
        }),
      saveValue: updateGenreAndStoryStructureTypeA,
    },
    {
      title: "Dialogue",
      initialValue: reviewTypeAValues.current.dialogue,
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
      initialValue: reviewTypeAValues.current.storyQuality,
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
      initialValue: reviewTypeAValues.current.suggestions,
      editorValue: (value: string) =>
        (reviewTypeAValues.current = {
          ...reviewTypeAValues.current,
          suggestions: value,
        }),
      saveValue: updateSuggestionsTypeA,
    },
  ];

  const completed = Object.values(
    reviewTypeAValues.current && `${countRate}`
  ).every((value) => value);

  return {
    completed,
    countRate,
    setCountRate,
    listQuestionnaireAccordionTypeA,
    updateRateReview,
    loading,
    completeFileFunc,
  };
};

export default useQuestionnaireTypeA;
