import { IconButton, LinearProgress, Typography } from "@mui/material";
import Image from "next/image";
import uploadImage from "./assets/upload-image.png";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { IAbstractFormValues } from "interfaces/abstract";
import type { FieldErrorsImpl, UseFormRegister } from "react-hook-form";

interface IProps {
  register: UseFormRegister<IAbstractFormValues>;
  errors: Partial<FieldErrorsImpl<IAbstractFormValues>>;
}

const UploadImage = ({ errors, register }: IProps) => {
  return (
    <>
      <Typography
        variant="h5"
        color="primary.700"
        className="futura font-medium leading-normal"
      >
        Upload Image
      </Typography>

      <Typography variant="body1" className="text-neutral-700 mb-6 lg:mb-10">
        A most striking visual image for the medium
      </Typography>

      <div className="md:px-10 md:py-16 space-y-5 md:shadow-md rounded-lg">
        <div className="max-w-[528px] mx-auto rounded-md border-2 border-dashed mb-5 overflow-hidden border-primary-300 flex justify-center items-center">
          <div className="relative py-14 px-4 w-full flex justify-center items-center flex-col">
            <label
              className="absolute cursor-pointer inset-0"
              htmlFor="add-image"
            ></label>
            <input
              {...register("image")}
              name="image"
              accept="image/*"
              max={1}
              type="file"
              id="add-image"
              hidden
            />
            <div className="mx-auto flex justify-center items-center mb-5 md:mb-7">
              <Image src={uploadImage} alt="upload image" />
            </div>
            <Typography
              variant="h6"
              color="primary.700"
              className="futura font-semibold text-center leading-normal mb-1 md:mb-2"
            >
              Upload Script
            </Typography>
            <Typography
              variant="body1"
              className="text-neutral-700 text-center mb-2 md:mb-3"
            >
              Drop your image here, or
              <span className="text-primary-700 underline ml-1">browse</span>
            </Typography>
            <Typography
              variant="caption"
              className="text-tinted-500 text-center leading-4"
            >
              Supports JPEG, JPEG2000, PNG
            </Typography>
          </div>
          {errors.image && (
            <span className="text-error-700">{errors.image?.message}</span>
          )}
        </div>
        <div className="max-w-[528px] relative py-6 mx-auto rounded-md border-2 border-dashed mb-5 px-8 overflow-hidden border-tinted-300  bg-tinted-50/50">
          <div className="mb-2 pr-5">
            <Typography variant="body1" color="primary.700">
              Uploading
            </Typography>
            <Typography variant="caption" className="text-gray-400">
              55% . 5 seconds left
            </Typography>
          </div>
          <LinearProgress
            className="rounded-lg"
            variant="determinate"
            value={50}
          />
          <IconButton className="absolute right-4 top-6 text-error-500 hover:bg-error-50 bg-error-50">
            <AiOutlineClose />
          </IconButton>
        </div>

        <div className="max-w-[528px] relative py-6 mx-auto rounded-md border-2 border-dashed px-8 overflow-hidden border-tinted-300  bg-success-50/50">
          <div className="mb-2">
            <Typography variant="body1" color="success.500">
              Uploading
            </Typography>
            <Typography variant="caption" className="text-gray-400">
              Complete
            </Typography>
          </div>
          <LinearProgress
            color="success"
            className="rounded-lg"
            variant="determinate"
            value={50}
          />
          <IconButton className="absolute right-4 top-6 text-success-500 hover:bg-success-50 bg-success-50">
            <MdOutlineDone />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default UploadImage;
