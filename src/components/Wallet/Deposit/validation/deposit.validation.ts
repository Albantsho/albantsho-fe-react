import * as Yup from "yup";

export const depositSchema = Yup.object({
  amount: Yup.number().typeError("Please enter current amount for deposit.")
    .required()
    .min(50, "Min is $50 per deposit.")
    .max(1000, "Max is $1000 per deposit.")
    .label("Amount"),
});
