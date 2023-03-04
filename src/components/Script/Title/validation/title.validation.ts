import * as Yup from "yup";

export const titleSchema = Yup.object({
  title: Yup.string().min(4).max(40).label("Title"),
  writer: Yup.string().min(4).max(40).label("Written by"),
  names: Yup.string().min(4).max(40).label("Names"),
  basedOn: Yup.string().min(4).max(40).label("Based on"),
});
