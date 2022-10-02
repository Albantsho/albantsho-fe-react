import * as Yup from "yup";

export const resetPasswordSchema = Yup.object({
  password: Yup.string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Password must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
    )
    .label("Password"),
  verify_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null]).label("Verify password"),
}).required();
