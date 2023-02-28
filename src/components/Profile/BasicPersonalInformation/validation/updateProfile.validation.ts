import * as Yup from "yup";

export const updateProfileSchema = Yup.object({
  firstName: Yup.string().required().min(3).label("First name"),
  lastName: Yup.string().required().min(3).label("Last name"),
  image: Yup.mixed()
    .test("required", "Image is a required field", (value) => {
      return value && value.length;
    })
    .test("fileSize", "The file is to large", (value) => {
      if (value[0]) {
        return value && value[0].size <= 2000000;
      }
    }),
});
