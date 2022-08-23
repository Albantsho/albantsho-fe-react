import {
  SvgIcon,
  Typography,
  InputAdornment,
  Box,
  Button,
} from "@mui/material";

import Link from "next/link";

import forget from "./assets/forget.png";
import iconEmail from "./assets/icon-email.svg";

import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import Image from "next/image";
import Logo from "@shared/Logo/Logo";

const ForgetPassword = () => {
  return (
    <div className="px-8 py-12 lg:px-24 flex flex-col">
      <Box className="hidden lg:flex justify-between">
        <Logo />
        <div className="space-x-4">
          <span>Already have an account?</span>
          <Link href="/signin" passHref>
            <Button variant="outlined" size="large">
              SIGN IN
            </Button>
          </Link>
        </div>
      </Box>
      <div className="lg:py-28 flex-1 flex justify-center flex-col lg:items-center">
        <div className="flex lg:flex-col items-center">
          <Typography
            variant="h4"
            color="primary.main"
            className="futura lg:order-2 font-medium leading-10 mr-5"
            mb={1}
          >
            Trouble Logging in?
          </Typography>
          <div className="w-12 h-12 lg:w-24 lg:h-20 lg:order-1">
            <Image src={forget} alt="forget"  />
          </div>
        </div>
        <Typography className="leading-normal lg:text-center text-sm max-w-[430px]  text-[#484848]">
          Enter your email and we’ll send you a link to help you get back into
          your account
        </Typography>

        <div className="w-full mt-3 flex flex-col">
          <Typography
            variant="h6"
            htmlFor="email"
            component="label"
            className="text-purple-700 leading-5 font-medium mb-2 futura"
          >
            Email address
          </Typography>
          <CustomInput
            id="email"
            variant="outlined"
            size="medium"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon
                    fontSize="small"
                    component={iconEmail}
                    inheritViewBox
                  />
                </InputAdornment>
              ),
            }}
            placeholder="Email"
          />
        </div>

        <div className="justify-center lg:justify-start flex mt-6 lg:mt-12">
          <Btn
            size="large"
            className="py-3 lg:text-xl px-6 font-normal montserrat lg:py-4 lg:px-10"
          >
            Send Link
          </Btn>
        </div>

        <div className="flex lg:hidden justify-center mt-7">
          <Typography className="text-grey-400 mb-1 futura">
            Already have an account?
            <Link href="/">
              <a className="text-success-500 ml-2">Sign in</a>
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
