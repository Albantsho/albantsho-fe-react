import { Typography } from "@mui/material";
import Link from "next/link";
import bell from "./assets/bell.png";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import NavbarAuthenticationSignin from "@shared/Layouts/AuthenticationLayout/NavbarAuthentication/NavbarAuthenticationSignin/NavbarAuthenticationSignin";
import Image from "next/image";

const VerifyEmail = () => {
  return (
    <div className="px-8 py-12 lg:px-24  mx-auto lg:w-full">
      <NavbarAuthenticationSignin />
      <div className="lg:py-28 lg:px-36 max-w-md mx-auto lg:max-w-full">
        <div className="flex items-center lg:flex-col">
          <Typography
            variant="h5"
            color="primary.main"
            className="futura lg:order-2 font-medium  mr-5"
            mb={1}
          >
            Verify your email
          </Typography>
          <div className="lg:order-1 w-8 h-8 lg:w-16 lg:h-16">
            <Image src={bell} alt="bell" />
          </div>
        </div>
        <Typography className="  lg:text-center text-base text-[#484848] md:max-w-[430px]">
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

        <div className="mt-3 flex justify-between items-center">
          <Typography className=" text-warning-500 font-normal mb-6 futura">
            20:00
          </Typography>

          <Typography className=" mb-6 futura">
            <Link href="#">
              <a className="text-[#5D5FEF]">Resend code</a>
            </Link>
          </Typography>
        </div>

        <div className="justify-center  flex">
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
