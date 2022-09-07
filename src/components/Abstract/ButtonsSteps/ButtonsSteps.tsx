import { Button, IconButton } from "@mui/material";
import Link from "next/link";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  setOpenModalSaveProgress: Dispatch<SetStateAction<boolean>>;
}

const ButtonsSteps = ({ step, setStep, setOpenModalSaveProgress }: IProps) => {
  return (
    <>
      <div className="flex justify-between  mt-4 sm:mt-8 md:mt-12">
        <Link href={`/abstract?step=${step === 1 ? 7 : step - 1}`} passHref>
          <Button
            disabled={step === 1}
            onClick={() => {
              if (step !== 1) setStep((prevCount: number) => prevCount - 1);
            }}
            className="rounded-md px-6 py-2 hidden md:block"
            variant="contained"
          >
            Back
          </Button>
        </Link>
        <Button
          onClick={() => setOpenModalSaveProgress(true)}
          className="rounded-md px-6 py-2 mx-auto"
          variant="outlined"
        >
          Save & complete later
        </Button>
        <Link href={`/abstract?step=${step === 7 ? 1 : step + 1}`} passHref>
          <Button
            disabled={step === 7}
            onClick={() => {
              if (step !== 7) setStep((prevCount: number) => prevCount + 1);
            }}
            className="rounded-md px-6 py-2 hidden md:block"
            variant="contained"
          >
            Next
          </Button>
        </Link>
      </div>

      <div className="flex md:hidden justify-center mt-4 gap-4 items-center">
        <Link href={`/abstract?step=${step === 1 ? 7 : step - 1}`} passHref>
          <IconButton
            disabled={step === 1}
            onClick={() => {
              if (step !== 1) setStep((prevCount: number) => prevCount - 1);
            }}
          >
            <BsArrowLeftShort className="text-3xl text-primary-700" />
          </IconButton>
        </Link>

        <div className="flex gap-2 text-primary-700 font-semibold justify-center items-center">
          <span>{step}</span>
          <span>/</span>
          <span>7</span>
        </div>

        <Link href={`/abstract?step=${step === 7 ? 1 : step + 1}`} passHref>
          <IconButton
            disabled={step === 7}
            onClick={() => {
              if (step !== 7) setStep((prevCount: number) => prevCount + 1);
            }}
          >
            <BsArrowRightShort className="text-3xl text-primary-700" />
          </IconButton>
        </Link>
      </div>
    </>
  );
};

export default ButtonsSteps;
