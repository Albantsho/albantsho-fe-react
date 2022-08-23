import { SvgIcon, Typography, InputAdornment } from "@mui/material";

import Link from "next/link";

import forget from "./assets/forget.png";
import iconEmail from "./assets/icon-email.svg";

import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import Image from "next/image";

const ForgetPassword = () => {
  return (
    <div className="flex flex-col px-8 py-16">
      <div className="flex items-center">
        <Typography
          variant="h4"
          color="primary.main"
          className="futura font-medium leading-10 mr-5"
          mb={1}
        >
          Trouble Logging in?
        </Typography>
     <div>
        <Image src={forget} />
     </div>
      </div>
      <Typography className="leading-6 text-sm  text-[#484848]">
        Enter your email and we’ll send you a link to help you get back into
        your account
      </Typography>

      <div className="w-full mt-3 flex flex-col">
        <Typography
          htmlFor="email"
          component="label"
          className="text-purple-700 leading-5 font-medium mb-1 futura"
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

      <div className="justify-center flex mt-10">
        <Btn size="large" className="py-3 px-6 font-normal montserrat">
          Send Link
        </Btn>
      </div>

      <div className="flex justify-center mt-7">
        <Typography className="text-grey-400 leading-5 font-medium mb-1 futura">
          Already have an account?
          <Link href="/">
            <a className="text-success-500 ml-2">Sign in</a>
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default ForgetPassword;
