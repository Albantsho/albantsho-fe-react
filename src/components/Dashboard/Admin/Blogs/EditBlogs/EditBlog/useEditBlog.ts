import { yupResolver } from "@hookform/resolvers/yup";
import useWeblogApi from "apis/Weblog.api";
import { CustomElement } from "interfaces/slate";
import { IWeblog } from "interfaces/weblog";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import routes from "routes/routes";
import { convertToSlug } from "utils/convert-to-slug";
import { deserializeBlogContent } from "utils/deserialize-blog-content";
import errorHandler from "utils/error-handler";
import { editBlogSchema } from "./validation/editBlog.validate";

interface IEditWeblogFormValues {
  title: string;
  description: string;
  image: FileList;
}

interface IProps {
  oneWeblog: IWeblog;
}

const useEditBlog = ({
  oneWeblog: { title, description, _id, content },
}: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditWeblogFormValues>({
    defaultValues: {
      title,
      description,
    },
    resolver: yupResolver(editBlogSchema),
  });
  const [loading, setLoading] = useState(false);
  const [previewImageValue, setPreviewImageValue] = useState("");
  const textEditorValue = useRef<string>("");
  const htmlContent = new DOMParser().parseFromString(content, "text/html");
  const { updateWeblog } = useWeblogApi();
  const { replace } = useRouter();

  const handlePreviewImageValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        const url = window.decodeURI(reader.result as string);
        setPreviewImageValue(url);
      };
    } else {
      alert("Image not found");
    }
  };

  let initialValue: CustomElement[] = deserializeBlogContent(htmlContent.body);

  const onSubmit = async (data: IEditWeblogFormValues) => {
    try {
      setLoading(true);
      await updateWeblog(
        {
          title: data.title,
          description: data.description,
          content: textEditorValue.current,
          image: data.image[0] && data.image[0],
          slug: convertToSlug(data.title),
        },
        _id
      );
      replace(routes.blogsAdminDashboard.url);
      initialValue = [{ type: "paragraph", children: [{ text: "" }] }];
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    initialValue,
    onSubmit,
    textEditorValue,
    register,
    handleSubmit,
    errors,
    loading,
    previewImageValue,
    handlePreviewImageValue,
  };
};

export default useEditBlog;
