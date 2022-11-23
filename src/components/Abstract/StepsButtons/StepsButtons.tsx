import { Button, IconButton } from "@mui/material";
import Link from "next/link";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Dispatch, SetStateAction } from "react";
import routes from "routes/routes";

interface IProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  setOpenSaveProgressModal: Dispatch<SetStateAction<boolean>>;
}

const StepsButtons = ({ step, setStep, setOpenSaveProgressModal }: IProps) => {
  return (
    <>
      <div className="flex justify-between mt-20">
        <Link
          href={`${routes.abstract.url}?step=${step === 1 ? 7 : step - 1}`}
          passHref
          legacyBehavior
        >
          <Button
            disabled={step === 1}
            onClick={() => {
              if (step !== 1) setStep((prevCount: number) => prevCount - 1);
            }}
            className="rounded-md px-8 py-3 hidden md:block"
            variant="contained"
          >
            Back
          </Button>
        </Link>
        <Button
          onClick={() => setOpenSaveProgressModal(true)}
          className="rounded-md px-8 py-3 mx-auto"
          variant="outlined"
        >
          Save & complete later
        </Button>
        <Link
          href={`${routes.abstract.url}?step=${step === 7 ? 1 : step + 1}`}
          passHref
          legacyBehavior
        >
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
        </Link>
      </div>

      <div className="flex md:hidden justify-center mt-4 gap-4 items-center">
        <Link
          href={`${routes.abstract.url}?step=${step === 1 ? 7 : step - 1}`}
          passHref
          legacyBehavior
        >
          <IconButton
            color="primary"
            disabled={step === 1}
            onClick={() => {
              if (step !== 1) setStep((prevCount: number) => prevCount - 1);
            }}
          >
            <BsArrowLeftShort className="text-3xl" />
          </IconButton>
        </Link>

        <div className="flex gap-2 text-primary-700 font-semibold justify-center items-center">
          <span>{step}</span>
          <span>/</span>
          <span>7</span>
        </div>

        <Link
          href={`${routes.abstract.url}?step=${step === 7 ? 1 : step + 1}`}
          passHref
          legacyBehavior
        >
          <IconButton
            color="primary"
            disabled={step === 7}
            onClick={() => {
              if (step !== 7) setStep((prevCount: number) => prevCount + 1);
            }}
          >
            <BsArrowRightShort className="text-3xl" />
          </IconButton>
        </Link>
      </div>
    </>
  );
};

export default StepsButtons;
