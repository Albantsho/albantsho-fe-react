import { Button, Typography } from "@mui/material";
import useVerifyEmail from "../useVerifyEmail";
import useCountdown from "./useCutDown";

interface IProps {
  targetData: number;
}

const CutDownTimer = ({ targetData }: IProps) => {
  const { minutes, seconds } = useCountdown(targetData);
  const { handleResendCode } = useVerifyEmail();
  if (minutes + seconds <= 0)
    return (
      <>
        <Typography className="text-gray-500 font-normal mb-6 futura">
          00:00
        </Typography>
        <Button
          disableRipple
          onClick={handleResendCode}
          className="mb-6 futura hover:bg-transparent"
        >
          Resend code
        </Button>
      </>
    );
  return (
    <>
      <Typography className="text-warning-500 font-normal mb-6 futura">
        {minutes}:{seconds}
      </Typography>

      <Button
        disableRipple
        disabled
        className="mb-6 futura hover:bg-transparent"
      >
        Resend code
      </Button>
    </>
  );
};

export default CutDownTimer;
