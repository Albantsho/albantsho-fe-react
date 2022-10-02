import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
}).required();
