import bell from "@assets/images/bell.png";
import { Button, Divider, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import Image from "next/image";
import { useMemo } from "react";
import Countdown, { zeroPad } from "react-countdown";
import useUserStore from "store/user.store";
import useWithdrawVerify from "./useWithdrawVerify";

interface ITimeProps {
  minutes: number;
  seconds: number;
}

const WithdrawVerify = () => {
  const user = useUserStore((state) => state.user);
  const {
    countDownKey,
    formValues,
    handleAutoFocus,
    handleChange,
    handleResendCode,
    inputs,
    loading,
    loadingResendCode,
    onSubmit,
  } = useWithdrawVerify();

  const renderer = ({ minutes, seconds }: ITimeProps) => {
    return (
      <span className="text-warning-500 text-sm lg:text-base">
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-md px-5 sm:px-6  md:px-10 py-9 lg:px-14 lg:py-14 flex-1 w-full max-w-screen-2xl">
      <Typography
        variant="h4"
        className="text-primary-700 futura font-medium leading-normal mb-2 md:mb-3"
      >
        Withdraw
      </Typography>
      <Typography variant="body1" className="text-neutral-800 max-w-lg">
        Your assets is safe with us and available to you whenever needed. Please
        make sure to fill in the correct details
      </Typography>
      <Divider className="my-5 sm:mb-8 md:mb-12 lg:mb-20" />
      <div className="max-w-md mx-auto">
        <div className="flex items-center lg:flex-col">
          <Typography
            variant="h3"
            color="primary.main"
            className="futura lg:order-2 font-medium leading-normal mr-5"
            mb={1}
          >
            Confirm your withdraw
          </Typography>
          <div className="lg:order-1 w-8 h-8 lg:w-20 lg:h-full">
            <Image src={bell} alt="bell" />
          </div>
        </div>
        <Typography className="max-w-[420px] lg:text-center lg:mx-auto mt-1">
          Hi {user.firstName} {user.lastName}, kindly input the 5 digit code
          that was sent to your mail to confirm your withdraw.
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
              {useMemo(
                () => (
                  <Countdown
                    autoStart
                    key={countDownKey}
                    precision={2}
                    zeroPadTime={2}
                    zeroPadDays={2}
                    date={Date.now() + 1200000}
                    renderer={renderer}
                  />
                ),
                [countDownKey]
              )}
            </Typography>
            <Button
              onClick={handleResendCode}
              disableRipple
              className="mb-6 futura hover:bg-transparent text-base text-[#5D5FEF]"
              disabled={loadingResendCode}
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
              Confirm
            </Btn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WithdrawVerify;
