import * as Yup from "yup";

export const titleSchema = Yup.object({
  title: Yup.string().required().min(4).max(40).label("Title"),
  writer: Yup.string().required().min(4).max(40).label("Writer"),
  names: Yup.string().required().min(4).max(40).label("Names"),
  any: Yup.string().required().min(4).max(40).label("Any"),
});
