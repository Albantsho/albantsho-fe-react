import * as Yup from "yup";

export const depositSchema = Yup.object({
  amount: Yup.string()
    .required()
    .min(1)
    .matches(/^[0-9]+$/gi, "Please enter current amount")
    .label("Amount"),
});
