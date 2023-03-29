import * as Yup from "yup";

export const withdrawSchema = Yup.object({
  amount: Yup.string()
    .required()
    .min(1)
    .matches(/^[0-9]+$/gi, "Please enter current amount")
    .label("Amount"),
  method: Yup.string().required().oneOf(["bank", "usdt"]),
  bankName: Yup.string()
    .when("method", {
      is: "bank",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    })
    .label("Bank"),
  bankAccountName: Yup.string()
    .when("method", {
      is: "bank",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    })
    .label("Account name"),
  bankAccountNumber: Yup.string()
    .when("method", {
      is: "bank",
      then: (schema) => schema.required().matches(/^[0-9]+$/gi, "Please enter current account number"),
      otherwise: (schema) => schema.notRequired(),
    })
    .label("Account number"),
  network: Yup.string()
    .when("method", {
      is: "usdt",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    })
    .label("Network"),
  usdtTrc20Address: Yup.string()
    .when("method", {
      is: "usdt",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    })
    .label("address"),
});
