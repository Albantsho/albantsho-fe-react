import { Button, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import TextEditor from "@shared/TextEditor/TextEditor";
import useWeblogApi from "apis/Weblog.api";
import { ChangeEvent, useState } from "react";
import type { Descendant } from "slate";

const AddBlog = () => {
  const [textEditorValue, setTextEditorValue] = useState<Array<Descendant>>();
  const [blogValues, setBlogValues] = useState({ title: "", description: "" });
  const { createNewWeblog } = useWeblogApi();

  const handleBlogValues = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.name);

    setBlogValues({ ...blogValues, [e.target.name]: e.target.value });
    console.log(blogValues);
  };

  const createNewBlog = async () => {
    const res = await createNewWeblog({
      title: blogValues.title,
      description: blogValues.description,
      content: textEditorValue?.toString() || "hi",
      image: "",
    });
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
      <TextEditor setTextEditorValue={setTextEditorValue} />
      <div className="mt-6 lg:mt-10 space-x-2 lg:space-x-6">
        <Button
          onClick={createNewBlog}
          disableElevation
          className="px-4 py-2 lg:py-3 lg:px-6"
          variant="contained"
        >
          Publish
        </Button>
        <Button className="px-4 py-2 lg:py-3 lg:px-6" variant="outlined">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AddBlog;
