import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useWeblogApi from "apis/Weblog.api";
import { CustomElement } from "interfaces/slate";
import { ChangeEvent, useState } from "react";
import { addBlogSchema } from "./validation/addBlog.validate";
import errorHandler from "utils/error-handler";
import { useRouter } from "next/router";

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
  const { push } = useRouter();

  let initialValue: CustomElement[] = [
    { type: "paragraph", children: [{ text: "" }] },
  ];

  const onSubmit = async (data: IAddWeblogFormValues) => {
    console.log(data);
    console.log(data.image[0]);
    try {
      setLoading(true);
      console.log(textEditorValue);
      const res = await createNewWeblog({
        title: data.title,
        description: data.description,
        content: textEditorValue,
        image: data.image[0],
      });
      console.log(res);
      push("/admin/blogs");
      setTextEditorValue("");
      initialValue = [{ type: "paragraph", children: [{ text: "" }] }];
    } catch (error) {
      console.log(error);
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
