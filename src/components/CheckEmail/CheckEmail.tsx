import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import Link from "next/link";
import routes from "routes/routes";
import check from "./assets/check.png";

const CheckEmail = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay="300"
      className="lg:py-28  px-8 py-12 lg:px-24 flex-1 flex justify-center flex-col lg:items-center"
    >
      <div className="mb-2 lg:mb-4 flex lg:flex-col gap-x-8 gap-y-6 items-center">
        <Typography
          variant="h3"
          color="primary.main"
          className="futura font-medium lg:order-2 leading-none"
          mb={1}
        >
          Check Your Mail
        </Typography>
        <div className="flex-shrink-0 lg:order-1 w-9 lg:w-32 h-full">
          <Image src={check} alt="check" />
        </div>
      </div>
      <Typography
        variant="body1"
        className="lg:w-full lg:text-center w-2/3 text-[#484848]"
      >
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
          <Link href={`${routes.signin}`} passHref>
            <a className="text-success-500 ml-2">Sign in</a>
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default CheckEmail;
