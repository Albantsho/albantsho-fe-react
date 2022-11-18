import { LoadingButton } from "@mui/lab";
import { Button, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import TextEditor from "@shared/TextEditor/TextEditor";
import { IWeblog } from "interfaces/weblog";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import useEditBlog from "./useEditBlog";

interface IProps {
  oneWeblog: IWeblog;
}

const EditBlog = ({ oneWeblog }: IProps) => {
  const {
    initialValue,
    errors,
    handleSubmit,
    loading,
    onSubmit,
    register,
    setTextEditorValue,
  } = useEditBlog({ oneWeblog });
  const { back } = useRouter();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        error={Boolean(errors.title) || false}
        {...register("title")}
        id="blog-title"
        variant="outlined"
        size="small"
        sx={{
          "& .MuiOutlinedInput-input": { py: 1.5 },
          "& .MuiFormHelperText-root": {
            mt: "8px",
            mx: 0,
            color: "red",
            fontSize: "16px",
          },
        }}
        helperText={errors.title?.message}
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
        error={Boolean(errors.description) || false}
        {...register("description")}
        rows={3}
        id="blog-description"
        variant="outlined"
        size="small"
        sx={{
          "& .MuiOutlinedInput-input": { py: 1.5 },
          "& .MuiFormHelperText-root": {
            mt: "8px",
            mx: 0,
            color: "red",
            fontSize: "16px",
          },
        }}
        helperText={errors.description?.message}
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
      <div className="my-10">
        <div className="mb-1 mx-auto rounded-md border-2 border-dashed overflow-hidden border-primary-300 flex justify-center items-center relative py-2 px-4 w-full">
          <label
            className="absolute cursor-pointer inset-0"
            htmlFor="add-image"
          ></label>
          <input
            {...register("image")}
            className="opacity-0"
            type="file"
            id="add-image"
            hidden
            name="image"
            accept="image/*"
            max={1}
          />

          <Typography
            variant="h6"
            color="primary.700"
            className="futura font-semibold text-center leading-normal"
          >
            Upload Image
          </Typography>
        </div>
        {errors.image && (
          <span className="text-error-700">{errors.image?.message}</span>
        )}
      </div>

      <div className="mt-6 lg:mt-10 flex gap-2 lg:gap-6">
        <LoadingButton
          type="submit"
          disableElevation
          loading={loading}
          className="px-4 py-2 lg:py-3 lg:px-6"
          variant="contained"
        >
          Save and update
        </LoadingButton>
        <Button
          onClick={back}
          className="px-4 py-2 lg:py-3 lg:px-6"
          variant="outlined"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default EditBlog;
