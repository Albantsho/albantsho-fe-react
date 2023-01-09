import * as Yup from "yup";

export const createScriptSchema = Yup.object({
  title: Yup.string().required().min(4).max(40).label("Script title"),
  tagline: Yup.string().required().min(4).max(100).label("Tagline"),
}).required();
