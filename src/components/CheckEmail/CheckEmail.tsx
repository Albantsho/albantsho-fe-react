import {  Typography } from "@mui/material";
import Image from "next/image";

import Link from "next/link";

import check from "./assets/check.png";


const CheckEmail = () => {
  return (
    <div className="flex flex-col px-8 py-16">
      <div className="flex items-center">
        <Typography
          variant="h4"
          color="primary.main"
          className="futura font-medium leading-10 mr-5"
          mb={1}
        >
          Check Your Mail
        </Typography>
       <div>
        <Image src={check} />
       </div>
      </div>
      <Typography className="leading-6 w-2/3 text-sm  text-primary-700">
        Follow the link in your mail to reset your password
      </Typography>

      <div className="flex mt-14">
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

export default CheckEmail;
