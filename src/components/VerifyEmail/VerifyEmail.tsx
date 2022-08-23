import { Box, Button, Typography } from "@mui/material";

import Link from "next/link";

import bell from "./assets/bell.png";

import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import CustomInput from "@shared/CustomInput/CustomInput";
import Logo from "@shared/Logo/Logo";

const VerifyEmail = () => {
  return (
    <div className="px-8 py-12 lg:px-24  mx-auto">
      <Box className="hidden mb-40 lg:flex justify-between">
        <Logo />
        <div className="space-x-4">
          <span>Already have an account?</span>
          <Link href="/signup" passHref>
            <Button variant="outlined" size="large">
              SIGN IN
            </Button>
          </Link>
        </div>
      </Box>
      <div className="lg:pb-28 lg:px-36">
        <div className="flex items-center lg:flex-col">
          <Typography
            variant="h4"
            color="primary.main"
            className="futura lg:order-2 font-medium leading-10 mr-5"
            mb={1}
          >
            Verify your email
          </Typography>
          <div className="lg:order-1 w-8 h-8 lg:w-16 lg:h-16">
            <Image src={bell}  alt="bell"/>
          </div>
        </div>
        <Typography className="leading-6 text-center text-sm text-[#484848] md:max-w-[430px]">
          Hi Jane, kindly input the 6 digit code that was sent to your mail to
          verify your email address.
        </Typography>
        <div className="flex gap-3 mx-aut mt-7 mb-4">
          {Array.from(new Array(6)).map((_, i) => (
            <CustomInput
              key={i}
              variant="outlined"
              size="small"
              sx={{ maxWidth: 72 }}
            />
          ))}
        </div>

        <div className="w-full mt-3 flex justify-between items-center">
          <Typography className=" leading-5 font-normal text-xs mb-1 futura">
            <span className="text-warning-500">20:00</span>
          </Typography>

          <Typography className="leading-5 font-normal text-xs mb-1 futura">
            <Link href="#">
              <a className="text-[#5D5FEF]">
              Resend code
              </a>
            </Link>
          </Typography>
        </div>

        <div className="justify-center  flex mt-10">
          <Btn
            size="large"
            className="py-3 lg:text-xl px-6 font-normal montserrat lg:py-4 lg:px-10"
          >
            Verify Email
          </Btn>
        </div>

        <div className="flex justify-center lg:hidden mt-7">
          <Typography className="text-grey-400 leading-5 font-medium mb-1 futura">
            Already have an account?
            <Link href="/signin">
              <a className="text-success-500 ml-2">Sign in</a>
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
