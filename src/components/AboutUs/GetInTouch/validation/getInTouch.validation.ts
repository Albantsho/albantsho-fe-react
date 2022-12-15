import * as Yup from "yup";

export const getInTouchSchema = Yup.object({
  name: Yup.string().required().min(3).label("Name"),
  email: Yup.string().email().required().label("Email"),
  message: Yup.string().required().min(10).label("Message"),
});
