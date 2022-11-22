import * as Yup from "yup";

export const editBlogSchema = Yup.object({
  title: Yup.string().required().min(2).label("Title"),
  description: Yup.string().required().min(50).label("Description"),
  image: Yup.mixed().test("fileSize", "The file is to large", (value) => {
    if (value[0]) {
      return value && value[0].size <= 2000000;
    } else {
      return value;
    }
  }),
});
