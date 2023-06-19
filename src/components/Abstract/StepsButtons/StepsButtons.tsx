import { LoadingButton } from "@mui/lab";
import { Button, IconButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import routes from "utils/routes";

interface IProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  publishScript: () => void;
  updateScript: () => void;
  loadingPublishButton: boolean;
  loadingUpdateButton: boolean;
}

const StepsButtons = ({
  step,
  setStep,
  publishScript,
  updateScript,
  loadingPublishButton,
  loadingUpdateButton,
}: IProps) => {
  const { query } = useRouter();

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
        <LoadingButton
          loading={loadingUpdateButton}
          type="submit"
          onClick={updateScript}
          className="rounded-md px-8 py-3 mx-auto"
          variant="outlined"
        >
          Save & complete later
        </LoadingButton>
        {step !== 6 && (
          <Button
            disabled={step === 6}
            onClick={() => {
              if (step !== 6) setStep((prevCount: number) => prevCount + 1);
            }}
            className="rounded-md px-8 py-3 hidden min-w-[116px] text-center md:block"
            variant="contained"
          >
            Next
          </Button>
        )}
        <Link
          className={`${
            step !== 6 ? "hidden" : "flex"
          } min-w-[178px] mx-auto md:mx-0 md:min-w-fit`}
          href={routes.scriptPreview.dynamicUrl(query.id as string)}
        >
          <LoadingButton
            type="button"
            className={`rounded-md px-[82.5px] md:px-8 py-3`}
            variant="contained"
          >
            preview
          </LoadingButton>
        </Link>
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
          <span>6</span>
        </div>

        <IconButton
          color="primary"
          disabled={step === 6}
          onClick={() => {
            if (step !== 6) setStep((prevCount: number) => prevCount + 1);
          }}
        >
          <BsArrowRightShort className="text-3xl" />
        </IconButton>
      </div>
    </>
  );
};

export default StepsButtons;
