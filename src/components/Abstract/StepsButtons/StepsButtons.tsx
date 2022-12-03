import { Button, IconButton } from "@mui/material";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

interface IProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setOpenSaveProgressModal: React.Dispatch<React.SetStateAction<boolean>>;
  publishScript: () => void;
  updateScript: () => void;
}

const StepsButtons = ({
  step,
  setStep,
  setOpenSaveProgressModal,
  publishScript,
  updateScript,
}: IProps) => {
  return (
    <>
      <div className="flex justify-between mt-20 flex-wrap md:flex-nowrap gap-2 md:gap-y-0">
        <Button
          disabled={step === 1}
          onClick={() => {
            if (step !== 1) setStep((prevCount: number) => prevCount - 1);
          }}
          className="rounded-md px-8 py-3 min-w-[116px] text-center hidden md:block"
          variant="contained"
        >
          Back
        </Button>

        <Button
          type="submit"
          onClick={updateScript}
          // onClick={() => setOpenSaveProgressModal(true)}
          className="rounded-md px-8 py-3 mx-auto"
          variant="outlined"
        >
          Save & complete later
        </Button>
        {step !== 7 ? (
          <Button
            disabled={step === 7}
            onClick={() => {
              if (step !== 7) setStep((prevCount: number) => prevCount + 1);
            }}
            className="rounded-md px-8 py-3 hidden md:block"
            variant="contained"
          >
            Next
          </Button>
        ) : (
          <Button
            type="submit"
            onClick={publishScript}
            className="rounded-md px-[82.5px] md:px-8 py-3 min-w-[178px]  mx-auto md:mx-0 md:min-w-fit"
            variant="contained"
          >
            publish
          </Button>
        )}
      </div>

      <div className="flex md:hidden justify-center mt-4 gap-4 items-center">
        <IconButton
          color="primary"
          disabled={step === 1}
          onClick={() => {
            if (step !== 1) setStep((prevCount: number) => prevCount - 1);
          }}
        >
          <BsArrowLeftShort className="text-3xl" />
        </IconButton>

        <div className="flex gap-2 text-primary-700 font-semibold justify-center items-center">
          <span>{step}</span>
          <span>/</span>
          <span>7</span>
        </div>

        <IconButton
          color="primary"
          disabled={step === 7}
          onClick={() => {
            if (step !== 7) setStep((prevCount: number) => prevCount + 1);
          }}
        >
          <BsArrowRightShort className="text-3xl" />
        </IconButton>
      </div>
    </>
  );
};

export default StepsButtons;
