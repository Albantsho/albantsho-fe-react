import * as Yup from "yup";

export const createScriptSchema = Yup.object({
  title: Yup.string().required().min(4).max(20).label("Script title"),
  tagline: Yup.string().required().min(4).max(20).label("Tagline"),
}).required();
