import { ButtonGroup, LinearProgress, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import type { DropzoneState } from "react-dropzone";
import UploadFile from "./assets/Upload-file.png";

interface IProps {
  activeButton: number;
  setActiveButton: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  dropZoneUploadPdfScript: DropzoneState;
  dropZoneUploadPdfCopyright: DropzoneState;
  progressCopyright: number;
  progressScript: number;
}

const UploadScriptFiles = ({
  activeButton,
  setActiveButton,
  step,
  dropZoneUploadPdfScript,
  dropZoneUploadPdfCopyright,
  progressCopyright,
  progressScript,
}: IProps) => {
  return (
    <div className={`${step === 6 && activeButton === 1 ? "block" : "hidden"}`}>
      <Typography
        variant="h5"
        color="primary.700"
        className="futura font-medium leading-normal"
      >
        Upload Script
      </Typography>

      <Typography variant="body1" className="text-neutral-700 mb-6">
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
        <div
          className={`${
            dropZoneUploadPdfScript.isDragActive && "bg-gray-100"
          } max-w-[528px] mx-auto rounded-md border-2 border-dashed overflow-hidden border-primary-300 flex justify-center items-center`}
        >
          <div
            {...dropZoneUploadPdfScript.getRootProps({ className: "dropzone" })}
            className="relative py-14 px-4 w-full flex justify-center items-center flex-col"
          >
            <input
              {...dropZoneUploadPdfScript.getInputProps()}
              accept=".pdf"
              max={1}
              type="file"
              id="add-script"
              hidden
            />
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
              className="text-neutral-700 mb-8 text-center"
            >
              Drop your file here, or
              <label className="text-primary-700 underline ml-1 cursor-pointer">
                browse
              </label>
            </Typography>
            <LinearProgress
              className="w-full"
              sx={{
                "&.MuiLinearProgress-root": {
                  borderRadius: "8px",
                },
              }}
              value={progressScript}
              variant="determinate"
            />
          </div>
        </div>
        <div
          className={`${
            dropZoneUploadPdfCopyright.isDragActive && "bg-gray-100"
          } max-w-[528px] mx-auto rounded-md border-2 border-dashed overflow-hidden border-primary-300 flex justify-center items-center`}
        >
          <div
            {...dropZoneUploadPdfCopyright.getRootProps({
              className: "dropzone",
            })}
            className="relative py-14 px-4 w-full flex justify-center items-center flex-col"
          >
            <input
              {...dropZoneUploadPdfCopyright.getInputProps()}
              accept=".pdf"
              max={1}
              type="file"
              id="add-copyright"
              hidden
              name="scriptCopyright"
            />
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
              className="text-neutral-700 mb-8 text-center"
            >
              Drop your file here, or
              <label className="text-primary-700 underline ml-1 cursor-pointer">
                browse
              </label>
            </Typography>
            <LinearProgress
              className="w-full"
              sx={{
                "&.MuiLinearProgress-root": {
                  borderRadius: "8px",
                },
              }}
              value={progressCopyright}
              variant="determinate"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadScriptFiles;
