import { Button, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import TextEditor from "@shared/TextEditor/TextEditor";
import useWeblogApi from "apis/Weblog.api";
import { CustomElement } from "interfaces/slate";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import type { Descendant } from "slate";

let initialValue: CustomElement[] = [
  { type: "typography", variant: "body1", children: [{ text: "" }] },
];

const AddBlog = () => {
  const [textEditorValue, setTextEditorValue] = useState<Array<Descendant>>();
  const [blogValues, setBlogValues] = useState({ title: "", description: "" });
  const [imageValue, setImageValue] = useState<File | string>("");
  const { createNewWeblog } = useWeblogApi();
  const { back } = useRouter();

  const handleBlogValues = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBlogValues({ ...blogValues, [e.target.name]: e.target.value });
  };

  const handleGetPicture = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files) {
        console.log(e.target.files[0]);
        // const reader = new FileReader();
        setImageValue(e.target.files[0]);
        // reader.readAsDataURL(e.target.files[0]);
        // reader.onload = () => {
        //   setImageValue(reader.result);
        //   console.log(imageValue);
        // };
        // console.log(reader);

        console.log(imageValue);
      } else {
        alert("Image not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createNewBlog = async () => {
    try {
      console.log(imageValue);

      const res = await createNewWeblog({
        title: blogValues.title,
        description: blogValues.description,
        content: textEditorValue?.toString() || "hi",
        image: imageValue,
      });

      setBlogValues({ title: "", description: "" });
      setTextEditorValue([]);
      initialValue = [
        { type: "typography", variant: "body1", children: [{ text: "" }] },
      ];
      setImageValue("");
      console.log(res);
      console.log("success");
    } catch (error) {
      console.log(error);
    }
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
        value={blogValues.title}
        onChange={handleBlogValues}
        name="title"
        fullWidth
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
        value={blogValues.description}
        onChange={handleBlogValues}
        name="description"
        fullWidth
        multiline
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
            className="opacity-0"
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
      <div className="mt-6 lg:mt-10 space-x-2 lg:space-x-6">
        <Button
          onClick={createNewBlog}
          disableElevation
          className="px-4 py-2 lg:py-3 lg:px-6"
          variant="contained"
        >
          Publish
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

export default AddBlog;
