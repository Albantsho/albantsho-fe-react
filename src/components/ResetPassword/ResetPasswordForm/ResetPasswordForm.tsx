import { InputAdornment, SvgIcon, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import iconPassword from "./assets/icon-password.svg";
import iconShow from "./assets/icon-show.svg";
import Btn from "@shared/Btn/Btn";
import Link from "next/link";
import routes from "routes/routes";
import useResetPasswordForm from "./useResetPasswordForm";
import ResetPasswordFormTitle from "../ResetPasswordFormTitle/ResetPasswordFormTitle";

const ResetPassword = () => {
  const { handleSubmit, onSubmit, register } = useResetPasswordForm();
  return (
    <div className="overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="px-8 py-12 pb-16 lg:px-24  mx-auto lg:py-24 flex flex-col"
      >
        <ResetPasswordFormTitle />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full mt-5 flex flex-col">
            <Typography
              variant="h6"
              htmlFor="password"
              component="label"
              className="text-purple-700 font-normal mb-2 futura"
            >
              New password
            </Typography>
            <CustomInput
              {...register("password")}
              id="password"
              variant="outlined"
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      component={iconPassword}
                      inheritViewBox
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      component={iconShow}
                      inheritViewBox
                    />
                  </InputAdornment>
                ),
              }}
              placeholder="Password"
            />
          </div>

          <div className="w-full mt-3 lg:mt-7 flex flex-col">
            <Typography
              variant="h6"
              htmlFor="verify-password"
              component="label"
              className="text-purple-700 font-normal mb-2 futura"
            >
              Verify password
            </Typography>
            <CustomInput
              {...register("verify_password")}
              id="verify-password"
              variant="outlined"
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      component={iconPassword}
                      inheritViewBox
                    />
                  </InputAdornment>
                ),
              }}
              placeholder="Verify Password"
            />
          </div>

          <div className="justify-center flex mt-10 lg:mt-24">
            <Btn
              type="submit"
              size="large"
              className="py-3 lg:text-xl px-6 font-normal montserrat lg:py-4 lg:px-10"
            >
              Reset Password
            </Btn>
          </div>
        </form>

        <div className="text-center mt-7 lg:hidden">
          <Typography className="text-grey-400 mb-1 futura">
            Don’t have an account yet?
            <Link href={`${routes.register}`} passHref>
              <a className="text-success-500 ml-2">Sign up</a>
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
