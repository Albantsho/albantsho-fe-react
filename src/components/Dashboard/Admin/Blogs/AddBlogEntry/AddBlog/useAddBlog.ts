import { yupResolver } from "@hookform/resolvers/yup";
import useWeblogApi from "apis/Weblog.api";
import { CustomElement } from "interfaces/slate";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import routes from "routes/routes";
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
  const [textEditorValue, setTextEditorValue] = useState<string | undefined>(
    ""
  );
  const { createNewWeblog } = useWeblogApi();
  const { replace } = useRouter();

  let initialValue: CustomElement[] = [
    { type: "paragraph", children: [{ text: "" }] },
  ];

  const onSubmit = async (data: IAddWeblogFormValues) => {
    try {
      setLoading(true);
      await createNewWeblog({
        title: data.title,
        description: data.description,
        content: textEditorValue,
        image: data.image[0],
      });
      replace(routes.blogsAdminDashboard.url);
      setTextEditorValue("");
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
    setTextEditorValue,
    register,
    handleSubmit,
    errors,
    loading,
  };
};

export default useAddBlog;
