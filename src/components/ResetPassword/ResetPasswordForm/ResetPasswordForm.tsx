import { IconButton, InputAdornment, SvgIcon, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import PasswordIcon from "@assets/icons/password.svg";
import ShowIcon from "@assets/icons/show-password.svg";
import NotShowIcon from "@assets/icons/not-show-password.svg";
import Btn from "@shared/Btn/Btn";
import Link from "next/link";
import routes from "routes/routes";
import useResetPasswordForm from "./useResetPasswordForm";
import ResetPasswordFormTitle from "../ResetPasswordFormTitle/ResetPasswordFormTitle";

const ResetPassword = () => {
  const {
    handleSubmit,
    onSubmit,
    register,
    errors,
    handleTypeInputPassword,
    typePasswordInput,
    loading,
  } = useResetPasswordForm();
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
              error={Boolean(errors.password) || false}
              {...register("password")}
              type={typePasswordInput ? "password" : "text"}
              id="password"
              variant="outlined"
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      component={PasswordIcon}
                      inheritViewBox
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={handleTypeInputPassword}
                      color="inherit"
                    >
                      <SvgIcon
                        fontSize="small"
                        component={typePasswordInput ? ShowIcon : NotShowIcon}
                        inheritViewBox
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder="Password"
              sx={{
                "& .MuiFormHelperText-root": {
                  mt: "8px",
                  mx: 0,
                  color: "red",
                  fontSize: "16px",
                  lineHeight: "24px",
                },
              }}
              helperText={errors.password?.message}
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
              error={Boolean(errors.verify_password) || false}
              {...register("verify_password")}
              type={typePasswordInput ? "password" : "text"}
              id="verify-password"
              variant="outlined"
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      component={PasswordIcon}
                      inheritViewBox
                    />
                  </InputAdornment>
                ),
              }}
              placeholder="Verify Password"
              sx={{
                "& .MuiFormHelperText-root": {
                  mt: "8px",
                  mx: 0,
                  color: "red",
                  fontSize: "16px",
                },
              }}
              helperText={errors.verify_password?.message}
            />
          </div>

          <div className="justify-center flex mt-10 lg:mt-24">
            <Btn
              loading={loading}
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
