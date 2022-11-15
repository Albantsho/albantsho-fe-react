import { Button, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import TextEditor from "@shared/TextEditor/TextEditor";
import useWeblogApi from "apis/Weblog.api";
import { CustomElement } from "interfaces/slate";
import { IWeblog } from "interfaces/weblog";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import type { Descendant } from "slate";

interface IProps {
  oneWeblog: IWeblog;
}

const EditBlog = ({ oneWeblog }: IProps) => {
  const [textEditorValue, setTextEditorValue] = useState<Array<Descendant>>();
  const [blogValues, setBlogValues] = useState({
    title: oneWeblog.title,
    description: oneWeblog.description,
  });
  const [imageValue, setImageValue] = useState<File | string>(oneWeblog.media);
  const { updateWeblog } = useWeblogApi();
  const { back } = useRouter();
  const initialValue: CustomElement[] = oneWeblog.content;

  const handleBlogValues = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBlogValues({ ...blogValues, [e.target.name]: e.target.value });
  };

  const handleGetPicture = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageValue(e.target.files[0]);
    } else {
      alert("Image not found");
    }
  };

  const updateBlog = async () => {
    const res = await updateWeblog(
      {
        title: blogValues.title,
        description: blogValues.description,
        content: textEditorValue?.toString(),
        image: imageValue,
      },
      oneWeblog._id
    );

    console.log(res);
  };

  return (
    <div>
      <label htmlFor="blog-title">
        <Typography
          variant="body1"
          className="futura mb-2 font-medium text-primary-700"
        >
          Title<span className="text-error-700">*</span>
        </Typography>
      </label>
      <CustomInput
        fullWidth
        defaultValue={oneWeblog.title}
        value={blogValues.title}
        name="title"
        onChange={handleBlogValues}
        id="blog-title"
        variant="outlined"
        size="small"
        sx={{
          "& .MuiOutlinedInput-input": { py: 1.5 },
        }}
      />
      <label htmlFor="blog-description">
        <Typography
          variant="body1"
          className="futura mt-5 mb-2 font-medium text-primary-700"
        >
          Short description<span className="text-error-700">*</span>
        </Typography>
      </label>
      <CustomInput
        fullWidth
        multiline
        defaultValue={oneWeblog.description}
        value={blogValues.description}
        name="description"
        onChange={handleBlogValues}
        rows={3}
        id="blog-description"
        variant="outlined"
        size="small"
        sx={{
          "& .MuiOutlinedInput-input": { py: 1.5 },
        }}
      />
      <label>
        <Typography
          variant="body1"
          className="futura mt-5 mb-2 font-medium text-primary-700"
        >
          Body<span className="text-error-700">*</span>
        </Typography>
      </label>
      <TextEditor
        initialValue={initialValue}
        setTextEditorValue={setTextEditorValue}
      />
      <div className="my-5 mx-auto rounded-md border-2 border-dashed overflow-hidden border-primary-300 flex justify-center items-center">
        <form className="relative py-2 px-4 w-full flex justify-center items-center flex-col">
          <label
            className="absolute cursor-pointer inset-0"
            htmlFor="add-image"
          ></label>
          <input
            onChange={handleGetPicture}
            type="file"
            id="add-image"
            hidden
            name="script"
            accept="image/*"
          />
          <div className="mx-auto flex justify-center items-center"></div>
          <Typography
            variant="h6"
            color="primary.700"
            className="futura font-semibold text-center leading-normal"
          >
            Upload Image
          </Typography>
        </form>
      </div>
      <div className="mt-6 lg:mt-10 flex gap-2 lg:gap-6">
        <Button
          onClick={updateBlog}
          disableElevation
          className="px-4 py-2 lg:py-3 lg:px-6"
          variant="contained"
        >
          Save and update
        </Button>
        <Button
          onClick={back}
          className="px-4 py-2 lg:py-3 lg:px-6"
          variant="outlined"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EditBlog;
