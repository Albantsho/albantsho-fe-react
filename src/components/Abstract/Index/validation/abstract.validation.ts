import * as Yup from "yup";

export const abstractSchema = (publish: boolean) => {
  if (publish) {
    return Yup.object({
      script_type: Yup.string().required().label("Script type"),
      storyFormat: Yup.string().required().label("Story format"),
      title: Yup.string().required().label("Title"),
      primary_genre: Yup.string().required().label("Primary genre"),
      secondary_genre: Yup.string().required().label("Secondary genre"),
      theme: Yup.array().label("Theme"),
      primary_cast: Yup.string()
        .required()
        .min(1)
        .matches(/^[0-9]+$/gi, "Please enter current primary cast")
        .label("Primary cast"),
      secondary_cast: Yup.string()
        .required()
        .min(1)
        .matches(/^[0-9]+$/gi, "Please enter current secondary cast")
        .label("Secondary cast"),
      estimated_budger: Yup.string().required().label("Estimated budger"),
      tagline: Yup.string().required().label("Tagline"),
      log_line: Yup.string().required().label("Log line"),
      synopsis: Yup.string().required().label("Synopsis"),
      story_world: Yup.string().required().label("Story world"),
      act_structure: Yup.string().label("Act structure"),
      character_bible: Yup.string().required().label("Character bible"),
      inspiration: Yup.string().required().label("Inspiration"),
      motivation: Yup.string().required().label("Motivation"),
      scriptFile: Yup.mixed().test(
        "required",
        "Script file is a required field",
        (value) => {
          return value && value.length;
        }
      ),
      scriptCopyright: Yup.mixed().test(
        "required",
        "Script copyright is a required field",
        (value) => {
          return value && value.length;
        }
      ),
      image: Yup.mixed()
        .test("required", "Image is a required field", (value) => {
          return value && value.length;
        })
        .test("fileSize", "The file is to large", (value) => {
          if (value[0]) {
            return value && value[0].size <= 4000000;
          }
        }),
    });
  } else {
    return Yup.object({
      script_type: Yup.string().label("Script type"),
      storyFormat: Yup.string().label("Story format"),
      title: Yup.string().label("Title"),
      primary_genre: Yup.string().label("Primary genre"),
      secondary_genre: Yup.string().label("Secondary genre"),
      theme: Yup.array().label("Theme"),
      primary_cast: Yup.string()
        .min(1)
        .matches(/^[0-9]+$/gi, "Please enter current primary cast")
        .label("Primary cast"),
      secondary_cast: Yup.string()
        .min(1)
        .matches(/^[0-9]+$/gi, "Please enter current secondary cast")
        .label("Secondary cast"),
      estimated_budger: Yup.string().label("Estimated budger"),
      tagline: Yup.string().label("Tagline"),
      log_line: Yup.string().label("Log line"),
      synopsis: Yup.string().label("Synopsis"),
      story_world: Yup.string().label("Story world"),
      act_structure: Yup.string().label("Act structure"),
      character_bible: Yup.string().label("Character bible"),
      inspiration: Yup.string().label("Inspiration"),
      motivation: Yup.string().label("Motivation"),
      image: Yup.mixed().test("fileSize", "The file is to large", (value) => {
        if (value[0]) {
          return value && value[0].size <= 4000000;
        } else {
          return value;
        }
      }),
    });
  }
};
