import { ButtonGroup, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import UploadFile from "./assets/Upload-file.png";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  activeButton: number;
  setActiveButton: Dispatch<SetStateAction<number>>;
}

const UploadScriptFiles = ({ activeButton, setActiveButton }: IProps) => {
  return (
    <>
      <Typography
        variant="h5"
        color="primary.700"
        className="futura font-medium leading-normal"
      >
        Upload Script
      </Typography>


      <Typography
        variant="body1"
        className="text-neutral-700 mb-6"
      >
        By the way, your story is not a gift but a NECESSITY
      </Typography>

      <ButtonGroup
        disableElevation
        variant="contained"
        className="w-full mt-4 md:mt-7 mb-7 md:mb-10 border"
      >
        <Btn
          onClick={() => {
            setActiveButton(0);
          }}
          className={`${
            activeButton === 0
              ? "bg-primary-700 text-white"
              : "border-none bg-white text-[#B7B7B7]"
          } flex-1 py-3`}
        >
          Draft
        </Btn>
        <Btn
          onClick={() => {
            setActiveButton(1);
          }}
          className={`${
            activeButton === 1
              ? "bg-primary-700 text-white"
              : "border-none bg-white text-[#B7B7B7]"
          } flex-1 py-3`}
        >
          Upload Script
        </Btn>
      </ButtonGroup>

      <div className="md:px-10 py-10 md:py-16 space-y-5 md:shadow-md rounded-lg">
        <div className="max-w-[528px] mx-auto rounded-md border-2 border-dashed overflow-hidden border-primary-300 flex justify-center items-center">
          <form className="relative py-14 px-4 w-full flex justify-center items-center flex-col">
            <label
              className="absolute cursor-pointer inset-0"
              htmlFor="add-script"
            ></label>
            <input type="file" id="add-script" hidden name="script" />
            <div className="mx-auto flex justify-center items-center mb-2 sm:mb-3">
              <Image src={UploadFile} alt="upload file" />
            </div>
            <Typography
              variant="h6"
              color="primary.700"
              className="futura font-semibold text-center leading-normal mb-1"
            >
              Upload Script
            </Typography>
            <Typography
              variant="body1"
              className="text-neutral-700 text-center"
            >
              Drop your file here, or
              <span className="text-primary-700 underline ml-1">browse</span>
            </Typography>
          </form>
        </div>
        <div className="max-w-[528px] mx-auto rounded-md border-2 border-dashed overflow-hidden border-primary-300 flex justify-center items-center">
          <form className="relative py-14 px-4 w-full flex justify-center items-center flex-col">
            <label
              className="absolute cursor-pointer inset-0"
              htmlFor="add-script"
            ></label>
            <input type="file" id="add-script" hidden name="script" />
            <div className="mx-auto flex justify-center items-center mb-2 sm:mb-3">
              <Image src={UploadFile} alt="upload file" />
            </div>
            <Typography
              variant="h6"
              color="primary.700"
              className="futura font-semibold text-center leading-normal mb-1"
            >
              Upload Copyright
            </Typography>
            <Typography
              variant="body1"
              className="text-neutral-700 text-center"
            >
              Drop your file here, or
              <span className="text-primary-700 underline ml-1">browse</span>
            </Typography>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadScriptFiles;
