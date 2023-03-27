import * as Yup from "yup";

export const abstractSchema = (publish: boolean, activeButton: number) => {
  if (publish) {
    return Yup.object({
      scriptFormat: Yup.string().required().label("Script type"),
      storyFormat: Yup.string().required().label("Story format"),
      title: Yup.string().required().label("Title"),
      primaryGenre: Yup.string().required().label("Primary genre"),
      secondaryGenre: Yup.string().required().label("Secondary genre"),
      storyTopics: Yup.array().required().min(1).max(3).label("Story topics"),
      primaryCast: Yup.string()
        .required()
        .min(1)
        .matches(/^[0-9]+$/gi, "Please enter current primary cast")
        .label("Primary cast"),
      secondaryCast: Yup.string()
        .required()
        .min(1)
        .matches(/^[0-9]+$/gi, "Please enter current secondary cast")
        .label("Secondary cast"),
      estimatedBudget: Yup.string().required().label("Estimated budger"),
      tagline: Yup.string().required().label("Tagline"),
      logLine: Yup.string().required().label("Log line"),
      synopsis: Yup.string().required().label("Synopsis"),
      storyWorld: Yup.string().required().label("Story world"),
      actStructure: Yup.string().label("Act structure"),
      characterBible: Yup.string().required().label("Character bible"),
      inspiration: Yup.string().required().label("Inspiration"),
      motivation: Yup.string().required().label("Motivation"),
      draft: activeButton === 0 ? Yup.string().label("Draft") : Yup.string(),
      // scriptFile:
      //   activeButton === 1
      //     ? Yup.mixed().test(
      //         "required",
      //         "Script file is a required field",
      //         (value) => {
      //           return value && value.length;
      //         }
      //       )
      //     : Yup.mixed(),
      // scriptCopyright:
      //   activeButton === 1
      //     ? Yup.mixed().test(
      //         "required",
      //         "Script copyright is a required field",
      //         (value) => {
      //           return value && value.length;
      //         }
      //       )
      //     : Yup.mixed(),
    });
  } else {
    return Yup.object({
      scriptFormat: Yup.string().label("Script type"),
      storyFormat: Yup.string().label("Story format"),
      title: Yup.string().label("Title"),
      primaryGenre: Yup.string().label("Primary genre"),
      secondaryGenre: Yup.string().label("Secondary genre"),
      storyTopics: Yup.array().max(3).label("Story topics"),
      primaryCast: Yup.string()
        .min(1)
        .matches(/^[0-9]+$/gi, "Please enter current primary cast")
        .label("Primary cast"),
      secondaryCast: Yup.string()
        .min(1)
        .matches(/^[0-9]+$/gi, "Please enter current secondary cast")
        .label("Secondary cast"),
      estimatedBudget: Yup.string().label("Estimated budger"),
      tagline: Yup.string().label("Tagline"),
      logLine: Yup.string().label("Log line"),
      synopsis: Yup.string().label("Synopsis"),
      storyWorld: Yup.string().label("Story world"),
      actStructure: Yup.string().label("Act structure"),
      characterBible: Yup.string().label("Character bible"),
      inspiration: Yup.string().label("Inspiration"),
      motivation: Yup.string().label("Motivation"),
    });
  }
};
