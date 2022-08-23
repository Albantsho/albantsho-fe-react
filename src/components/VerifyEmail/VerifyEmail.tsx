import {
  SvgIcon,
  Typography,
  Box,
} from "@mui/material";

import Link from "next/link";

import bell from "./assets/bell.png";

import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import CustomInput from "@shared/CustomInput/CustomInput";

const VerifyEmail = () => {
  return (
    <div className="flex flex-col px-8 py-16">
      <div className="flex items-center">
        <Typography
          variant="h4"
          color="primary.main"
          className="futura font-medium leading-10 mr-5"
          mb={1}
        >
          Verify your email
        </Typography>
     <div>
        <Image src={bell} />
     </div>
      </div>
      <Typography className="leading-6 text-sm  text-[#484848]">
        Hi Jane, kindly input the 6 digit code that was sent to your mail to
        verify your email address.
      </Typography>
      <div className="flex gap-3 mx-auto mt-7 mb-4" >
        <CustomInput variant="outlined" size="small"  />
        <CustomInput variant="outlined" size="small"  />
        <CustomInput variant="outlined" size="small"  />
        <CustomInput variant="outlined" size="small"  />
        <CustomInput variant="outlined" size="small"  />
        <CustomInput variant="outlined" size="small"  />
      </div>

      <div className="w-full mt-3 flex justify-between items-center">
        <Typography className=" leading-5 font-normal text-xs mb-1 futura">
          <Link href="#">
            <a href="#" className="text-warning-500">
              20:00
            </a>
          </Link>
        </Typography>

        <Typography className="leading-5 font-normal text-xs mb-1 futura">
          <Link href="#">
            <a href="#" className="text-[#5D5FEF]">
              Terms & conditions
            </a>
          </Link>
        </Typography>
      </div>

      <div className="justify-center flex mt-10">
        <Btn size="large" className="py-3 px-6 font-normal montserrat">
          Verify Email
        </Btn>
      </div>

      <div className="flex justify-center mt-7">
        <Typography className="text-grey-400 leading-5 font-medium mb-1 futura">
          Already have an account?
          <a href="#" className="text-success-500 ml-2">
            Sign in
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default VerifyEmail;
