import * as Yup from "yup";
import countryList from "json/country-list.json";

export const registerSchema = Yup.object({
  fullname: Yup.string()
    .required()
    .min(3)
    .matches(
      /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/gms,
      "Please enter your full name."
    )
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
    .when("userType", {
      is: "producer",
      then: (schema) => schema.required().url(),
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
