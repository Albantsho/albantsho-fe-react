import * as Yup from "yup";

export const addCollaboratorSchema = Yup.object({
  email: Yup.string().email().required().label("Email"),
});
