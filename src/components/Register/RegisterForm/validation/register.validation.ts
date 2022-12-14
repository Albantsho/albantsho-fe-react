import * as Yup from "yup";
import countryList from "config/country-list.json";

export const registerSchema = Yup.object({
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
  country: Yup.string().required().oneOf(Object.values(countryList)),
  userType: Yup.string().required().oneOf(["producer", "writer"]),
  portfolio: Yup.string()
    .url()
    .when("userType", {
      is: "producer",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    })
    .label("Portfolio"),
  productionCompanyName: Yup.string()
    .when("userType", {
      is: "producer",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    })
    .label("Company name"),
});
