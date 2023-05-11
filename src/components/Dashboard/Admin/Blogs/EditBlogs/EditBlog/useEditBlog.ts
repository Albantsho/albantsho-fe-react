import { yupResolver } from "@hookform/resolvers/yup";
import useWeblogApi, { IUpdateWeblogPayload } from "apis/Weblog.api";
import { CustomElement } from "interfaces/slate";
import { IWeblog } from "interfaces/weblog";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { QueryClient, useMutation } from "react-query";
import { convertToSlug } from "utils/convert-to-slug";
import { deserializeBlogContent } from "utils/deserialize-blog-content";
import errorHandler from "utils/error-handler";
import routes from "utils/routes";
import { editBlogSchema } from "./validation/editBlog.validate";

interface IEditWeblogFormValues {
  title: string;
  description: string;
  image: FileList;
}

interface IProps {
  oneWeblog: IWeblog;
}

const queryClient = new QueryClient();

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
  const [previewImageValue, setPreviewImageValue] = useState("");
  const textEditorValue = useRef<string>("");
  const htmlContent = new DOMParser().parseFromString(content, "text/html");
  const { updateWeblog } = useWeblogApi();
  const { replace } = useRouter();

  const { mutate: editBlog, isLoading: loadingCreateWeblog } = useMutation<
    void,
    Error,
    { weblog: IUpdateWeblogPayload; id: string; }
  >((data) => updateWeblog(data.weblog, data.id), {
    onError: (error) => {
      errorHandler(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("weblog");
      replace(routes.blogsAdminDashboard.url);
      initialValue = [{ type: "paragraph", children: [{ text: "" }] }];
    },
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

  let initialValue: CustomElement[] = deserializeBlogContent(htmlContent.body);

  const onSubmit = async (data: IEditWeblogFormValues) =>
    editBlog({
      weblog: {
        title: data.title,
        description: data.description,
        content: textEditorValue.current,
        image: data.image[0] && data.image[0],
        slug: convertToSlug(data.title),
      },
      id: _id,
    });

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

export default useEditBlog;
