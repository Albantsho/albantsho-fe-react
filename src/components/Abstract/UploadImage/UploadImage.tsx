import { IconButton, LinearProgress, Typography } from "@mui/material";
import Image from "next/image";
import uploadImage from "./assets/upload-image.png";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";

const UploadImage = () => {
  return (
    <>
      <Typography
        width="100%"
        variant="h6"
        color="primary.700"
        className="futura font-medium"
      >
        Upload Image
      </Typography>
      
      <Typography
        variant="body2"
        className="text-neutral-700 mb-4 sm:mb-6 lg:mb-10 max-w-[290px] md:max-w-full"
      >
        A most striking visual image for the medium
      </Typography>

      <div className="max-w-[528px] mx-auto rounded-md border-2 border-dashed mb-5 overflow-hidden border-primary-300 flex justify-center items-center">
        <form className="relative py-14 px-4 w-full flex justify-center items-center flex-col">
          <label
            className="absolute cursor-pointer inset-0"
            htmlFor="add-image"
          ></label>
          <input type="file" id="add-image" hidden name="script" />
          <div className="mx-auto flex justify-center items-center mb-2">
            <Image src={uploadImage} alt="upload image" />
          </div>
          <Typography
            variant="h6"
            color="primary.700"
            className="futura font-semibold text-center"
          >
            Upload Copyright
          </Typography>
          <Typography
            variant="caption"
            className="text-neutral-700 text-center"
          >
            Drop your file here, or
            <span className="text-primary-700 underline">browse</span>
          </Typography>
        </form>
      </div>

      <div className="max-w-[528px] relative py-6 mx-auto rounded-md border-2 border-dashed mb-5 px-8 overflow-hidden border-tinted-300  bg-tinted-50/50">
        <div className="mb-2">
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

      <div className="max-w-[528px] relative py-6 mx-auto rounded-md border-2 border-dashed mb-5 px-8 overflow-hidden border-tinted-300  bg-success-50/50">
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
    </>
  );
};

export default UploadImage;
