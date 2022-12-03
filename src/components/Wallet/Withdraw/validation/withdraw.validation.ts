import * as Yup from "yup";

export const withdrawSchema = Yup.object({
  amount: Yup.string()
    .required()
    .min(1)
    .matches(/^[0-9]+$/gi, "Please enter current amount")
    .label("Amount"),
  method: Yup.string().required().oneOf(["bank_deposit", "network_deposit"]),
  bank: Yup.string()
    .when("method", {
      is: "bank_deposit",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    })
    .label("Bank"),
  account_name: Yup.string()
    .when("method", {
      is: "bank_deposit",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    })
    .label("Account name"),
  account_number: Yup.string()
    .when("method", {
      is: "bank_deposit",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    })
    .matches(/^[0-9]+$/gi, "Please enter current account number")
    .label("Account number"),
  network: Yup.string()
    .when("method", {
      is: "network_deposit",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    })
    .label("Network"),
  address: Yup.string()
    .when("method", {
      is: "network_deposit",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    })
    .label("address"),
});
