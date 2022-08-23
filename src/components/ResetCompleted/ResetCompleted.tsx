import { Box, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";

import success from "./assets/success.png"

const ResetCompleted = () => {
  return (
    <div className="flex flex-col  items-center px-8 py-16">
      <div className="flex justify-center items-center rounded-full" >
      <Image src={success} />
      </div>
    
      <Typography
        variant="h3"
        color="primary.main"
        className="futura font-medium leading-10"
        mb={1}
      >
        Password Reset Complete
      </Typography>
      <Typography className="text-[#484848] text-center leading-6 text-sm">
        You’ve successfully reset your password. Get back to enjoying the
        platform
      </Typography>

      <div className="justify-center flex mt-10">
        <Btn size="large" className="py-3 px-6 font-normal montserrat">
          Reset Password
        </Btn>
      </div>
    </div>
  );
};

export default ResetCompleted;
