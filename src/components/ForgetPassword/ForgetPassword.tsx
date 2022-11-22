import { InputAdornment, SvgIcon, Typography } from "@mui/material";
import Link from "next/link";
import forget from "./assets/forget.png";
import EmailIcon from "@assets/icons/email.svg";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import Image from "next/image";
import routes from "routes/routes";
import useForgetPassword from "./useForgetPassword";

const ForgetPassword = () => {
  const { register, handleSubmit, onSubmit, errors, loading } =
    useForgetPassword();
  return (
    <div className="overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="lg:py-28 px-8 py-12 lg:px-24  flex-1 flex justify-center flex-col"
      >
        <div className="flex lg:flex-col mb-2  lg:gap-10 items-center">
          <Typography
            variant="h3"
            color="primary.main"
            className="futura lg:order-2 font-medium leading-none mr-5"
            mb={1}
          >
            Trouble Logging in?
          </Typography>
          <div className="flex-shrink-0 w-16 h-full lg:w-36 lg:h-20 lg:order-1">
            <Image src={forget} alt="forget" />
          </div>
        </div>
        <Typography
          variant="body1"
          className="mt-2 lg:mt-3 lg:text-center lg:mx-auto  max-w-[430px]  text-[#484848]"
        >
          Enter your email and we’ll send you a link to help you get back into
          your account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full mt-6 flex flex-col">
            <Typography
              variant="h6"
              htmlFor="email"
              component="label"
              className="text-purple-700 leading-5 font-medium mb-2 futura"
            >
              Email address
            </Typography>
            <CustomInput
              error={Boolean(errors.email) || false}
              {...register("email")}
              fullWidth
              id="email"
              variant="outlined"
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      component={EmailIcon}
                      inheritViewBox
                    />
                  </InputAdornment>
                ),
              }}
              placeholder="Email"
              sx={{
                "& .MuiFormHelperText-root": {
                  mt: "8px",
                  mx: 0,
                  color: "red",
                  fontSize: "16px",
                },
              }}
              helperText={errors.email?.message}
            />
          </div>

          <div className="justify-center lg:justify-start flex mt-6 lg:mt-12">
            <Btn
              loading={loading}
              type="submit"
              size="large"
              className="py-3 lg:text-xl px-6 font-normal montserrat lg:py-4 lg:px-10"
            >
              Send Link
            </Btn>
          </div>
        </form>

        <div className="text-center lg:hidden mt-4">
          <Typography className="text-grey-400 mb-1 futura">
            Already have an account?
            <Link href={`${routes.signin}`} className="text-success-500 ml-2">
              Sign in
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
