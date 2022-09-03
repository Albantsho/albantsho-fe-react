import {  Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import Link from "next/link";
import check from "./assets/check.png";

const CheckEmail = () => {
  return (
    <div className="lg:py-28  px-8 py-12 lg:px-24 flex-1 flex justify-center flex-col lg:items-center">
      <div className="flex lg:flex-col gap-8 items-center">
        <Typography
          variant="h4"
          color="primary.main"
          className="futura font-medium lg:order-2 leading-10"
          mb={1}
        >
          Check Your Mail
        </Typography>
        <div className="lg:order-1 w-9 lg:w-32 h-full">
          <Image src={check} alt="check" />
        </div>
      </div>
      <Typography className="lg:w-full lg:text-center w-2/3 text-primary-700">
        Follow the link in your mail to reset your password
      </Typography>

      <div className="justify-start lg:flex mt-8 hidden">
        <Btn
          size="large"
          className="py-3 lg:text-xl px-6 font-normal montserrat lg:py-4 lg:px-10"
        >
          Open Mail
        </Btn>
      </div>

      <div className="mt-14 lg:hidden">
        <Typography className="text-grey-400 mb-1 futura">
          Already have an account?
          <Link href="/signin">
            <a className="text-success-500 ml-2">Sign in</a>
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default CheckEmail;
