import { yupResolver } from "@hookform/resolvers/yup";
import useWeblogApi, { type ICreateNewWeblogPayload } from "apis/Weblog.api";
import { CustomElement } from "interfaces/slate";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { QueryClient, useMutation } from "react-query";
import routes from "routes/routes";
import { convertToSlug } from "utils/convert-to-slug";
import errorHandler from "utils/error-handler";
import { addBlogSchema } from "./validation/addBlog.validate";

interface IAddWeblogFormValues {
  title: string;
  description: string;
  image: FileList;
}

const queryClient = new QueryClient();

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
  const textEditorValue = useRef<string>("");
  const [previewImageValue, setPreviewImageValue] = useState("");
  const { createNewWeblog } = useWeblogApi();
  const { replace } = useRouter();

  const { mutate: createWeblog, isLoading: loadingCreateWeblog } = useMutation<
    void,
    Error,
    ICreateNewWeblogPayload
  >((data) => createNewWeblog(data), {
    onError: (error) => {
      errorHandler(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("weblog");
      replace(routes.blogsAdminDashboard.url);
    },
  });

  const initialValue: CustomElement[] = [
    { type: "paragraph", children: [{ text: "" }] },
  ];

  const onSubmit = async (data: IAddWeblogFormValues) =>
    createWeblog({
      title: data.title,
      description: data.description,
      content: textEditorValue.current,
      image: data.image[0],
      slug: convertToSlug(data.title),
    });

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
    loading: loadingCreateWeblog,
    previewImageValue,
    handlePreviewImageValue,
  };
};

export default useAddBlog;
