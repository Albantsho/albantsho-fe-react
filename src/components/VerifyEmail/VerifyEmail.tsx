import { Button, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import Image from "next/image";
import Link from "next/link";
import Countdown, { zeroPad } from "react-countdown";
import routes from "routes/routes";
import bell from "./assets/bell.png";
import useVerifyEmail from "./useVerifyEmail";

interface ITimeProps {
  minutes: number;
  seconds: number;
}

const VerifyEmail = () => {
  const {
    handleChange,
    onSubmit,
    inputs,
    formValues,
    handleAutoFocus,
    handleResendCode,
    countDownKey,
    loading,
  } = useVerifyEmail();

  const renderer = ({ minutes, seconds }: ITimeProps) => {
    return (
      <span className="text-warning-500 text-sm lg:text-base">
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );
  };

  return (
    <div className="overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="px-8 py-12 lg:px-24  mx-auto"
      >
        <div className="lg:py-32 grid place-content-center mx-auto">
          <div className="flex items-center lg:flex-col">
            <Typography
              variant="h3"
              color="primary.main"
              className="futura lg:order-2 font-medium leading-normal mr-5"
              mb={1}
            >
              Verify your email
            </Typography>
            <div className="lg:order-1 w-8 h-8 lg:w-20 lg:h-full">
              <Image src={bell} alt="bell" />
            </div>
          </div>
          <Typography className="max-w-[420px] lg:text-center lg:mx-auto mt-1">
            Hi Jane, kindly input the 6 digit code that was sent to your mail to
            verify your email address.
          </Typography>
          <form onSubmit={onSubmit}>
            <div className="flex gap-3 mt-7 mb-4 justify-center flex-wrap lg:flex-nowrap">
              {Array.from(new Array(5)).map((_, index) => (
                <CustomInput
                  autoComplete="one-time-code"
                  value={formValues[index]}
                  variant="outlined"
                  type="tel"
                  key={index}
                  onChange={handleChange(index)}
                  onKeyUp={handleAutoFocus(index)}
                  inputRef={(elm) => inputs.current.push(elm)}
                  sx={{
                    input: {
                      width: { xs: 48, lg: 80 },
                      height: { xs: 48, lg: 80 },
                      boxSizing: "border-box",
                      textAlign: "center",
                    },
                  }}
                  inputProps={{
                    maxLength: 1,
                    min: 0,
                  }}
                />
              ))}
            </div>

            <div className="mt-3 flex flex-wrap justify-between items-center">
              <Typography className="text-gray-500 font-normal mb-6 futura">
                <Countdown
                  autoStart
                  key={countDownKey}
                  precision={2}
                  zeroPadTime={2}
                  zeroPadDays={2}
                  date={Date.now() + 1200000}
                  renderer={renderer}
                />
              </Typography>
              <Button
                onClick={handleResendCode}
                disableRipple
                className="mb-6 futura hover:bg-transparent text-base text-[#5D5FEF]"
              >
                Resend code
              </Button>
            </div>

            <div className="justify-center  flex">
              <Btn
                loading={loading}
                disabled={
                  !Object.values(formValues).every((item) => Boolean(item))
                }
                type="submit"
                size="large"
                className="py-3 lg:text-xl px-6 font-normal montserrat lg:py-4 lg:px-10"
              >
                Verify Email
              </Btn>
            </div>
          </form>

          <div className="text-center tlg:hidden mt-7">
            <Typography className="text-grey-400 leading-5 font-medium mb-1 futura">
              Already have an account?
              <Link href={`${routes.signin}`} passHref>
                <a className="text-success-500 ml-2">Sign in</a>
              </Link>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
