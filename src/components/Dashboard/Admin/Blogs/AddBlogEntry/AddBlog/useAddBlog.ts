import { yupResolver } from "@hookform/resolvers/yup";
import useWeblogApi from "apis/Weblog.api";
import { CustomElement } from "interfaces/slate";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import routes from "routes/routes";
import { convertToSlug } from "utils/convert-to-slug";
import errorHandler from "utils/error-handler";
import { addBlogSchema } from "./validation/addBlog.validate";

interface IAddWeblogFormValues {
  title: string;
  description: string;
  image: FileList;
}

const useAddBlog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddWeblogFormValues>({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: yupResolver(addBlogSchema),
  });
  const [loading, setLoading] = useState(false);
  const textEditorValue = useRef<string>("");
  const [previewImageValue, setPreviewImageValue] = useState("");
  const { createNewWeblog } = useWeblogApi();
  const { replace } = useRouter();

  const initialValue: CustomElement[] = [
    { type: "paragraph", children: [{ text: "" }] },
  ];

  const onSubmit = async (data: IAddWeblogFormValues) => {
    try {
      setLoading(true);
      await createNewWeblog({
        title: data.title,
        description: data.description,
        content: textEditorValue.current,
        image: data.image[0],
        slug: convertToSlug(data.title),
      });
      replace(routes.blogsAdminDashboard.url);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

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

export default useAddBlog;
