import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import success from "@assets/images/success.png";
import Link from "next/link";
import routes from "routes/routes";

const ResetPasswordConfirmation = () => {
  return (
    <div className="overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="px-8 py-12 lg:px-24  mx-auto lg:py-28 text-center flex flex-col items-center"
      >
        <div>
          <div className="lg:order-1 w-14 h-14 lg:w-24 lg:h-full ">
            <Image src={success} alt="success" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Typography
            variant="h3"
            color="primary.main"
            className="futura font-medium leading-none mt-5 lg:mt-9 mb-1 lg:mb-5 text-center"
            mb={1}
          >
            Password Reset Complete
          </Typography>
          <Typography
            variant="body1"
            className="text-[#484848] text-center max-w-[418px] leading-6 text-sm"
          >
            You’ve successfully reset your password. Get back to enjoying the
            platform
          </Typography>
        </div>

        <div className="justify-center flex mt-6">
          <Link
            passHref
            legacyBehavior
            target="_blank"
            href={routes.signin.url}
          >
            <Btn
              size="large"
              className="py-3 lg:text-xl px-6 font-normal montserrat lg:py-4 lg:px-10"
            >
              Sign in
            </Btn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordConfirmation;
