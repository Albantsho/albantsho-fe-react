import { Box, Button, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Logo from "@shared/Logo/Logo";
import Image from "next/image";
import Link from "next/link";

import success from "./assets/success.png";

const ResetCompleted = () => {
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
      <div className="text-center flex flex-col items-center">
        <div>
          <div className="lg:order-1 w-8 h-8 lg:w-16 lg:h-16">
            <Image src={success} alt="success" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Typography
            variant="h3"
            color="primary.main"
            className="futura font-medium leading-normal text-center"
            mb={1}
          >
            Password Reset Complete
          </Typography>
          <Typography className="text-[#484848] text-center max-w-[418px] leading-6 text-sm">
            You’ve successfully reset your password. Get back to enjoying the
            platform
          </Typography>
        </div>

        <div className="justify-center flex mt-6">
          <Btn
            size="large"
            className="py-3 lg:text-xl px-6 font-normal montserrat lg:py-4 lg:px-10"
          >
            Sign in
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default ResetCompleted;
