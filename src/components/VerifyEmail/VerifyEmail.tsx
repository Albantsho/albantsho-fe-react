import { Typography } from "@mui/material";
import Link from "next/link";
import bell from "./assets/bell.png";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import Image from "next/image";
import routes from "routes/routes";

const VerifyEmail = () => {
  return (
    <div className="px-8 py-12 lg:px-24  mx-auto">
      <div className="lg:py-32 grid place-content-center mx-auto">
        <div className="flex items-center lg:flex-col">
          <Typography
            variant="h3"
            color="primary.main"
            className="futura lg:order-2 font-medium leading-normal mr-5"
            mb={1}
          >
            Verify your email
          </Typography>
          <div className="lg:order-1 w-8 h-8 lg:w-20 lg:h-full">
            <Image src={bell} alt="bell" />
          </div>
        </div>
        <Typography className="max-w-[420px] lg:text-center lg:mx-auto mt-1">
          Hi Jane, kindly input the 6 digit code that was sent to your mail to
          verify your email address.
        </Typography>
        <div className="flex gap-3 mt-7 mb-4 justify-center flex-wrap lg:flex-nowrap">
          {Array.from(new Array(6)).map((_, i) => (
            <CustomInput
              className=""
              key={i}
              inputProps={{ maxlength: 1 }}
              variant="outlined"
              size="medium"
              sx={{
                input: {
                  width: { xs: 48, lg: 80 },
                  height: { xs: 48, lg: 80 },
                  boxSizing: "border-box",
                  textAlign: "center",
                },
              }}
            />
          ))}
        </div>

        <div className="mt-3 flex flex-wrap justify-between items-center">
          <Typography className=" text-warning-500 font-normal mb-6 futura">
            20:00
          </Typography>

          <Typography className=" mb-6 futura">
            <Link href="#" passHref>
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

        <div className="text-center tlg:hidden mt-7">
          <Typography className="text-grey-400 leading-5 font-medium mb-1 futura">
            Already have an account?
            <Link href={`${routes.signin}`} passHref>
              <a className="text-success-500 ml-2">Sign in</a>
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
