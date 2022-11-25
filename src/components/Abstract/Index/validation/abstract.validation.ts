import * as Yup from "yup";

export const abstractSchema = Yup.object({
  fullname: Yup.string()
    .required()
    .min(3)
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, "Please enter your full name.")
    .label("Full name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Password must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
    )
    .label("Password"),
  user_type: Yup.string().required().oneOf(["producer", "writer"]),
  portfolio: Yup.string()
    .url()
    .when("user_type", {
      is: "producer",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    })
    .label("Portfolio"),
  production_company_name: Yup.string()
    .when("user_type", {
      is: "producer",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    })
    .label("Company name"),
});
