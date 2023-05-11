import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import Btn from "@shared/Btn/Btn";
import Link from "next/link";
import EmailIcon from "@assets/icons/email.svg";
import PasswordIcon from "@assets/icons/password.svg";
import ShowIcon from "@assets/icons/show-password.svg";
import NotShowIcon from "@assets/icons/not-show-password.svg";
import routes from "utils/routes";
import useLoginForm from "./useLoginForm";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    typePasswordInput,
    handleTypeInputPassword,
    rememberMe,
    handleChangeRememberMe,
    loading,
  } = useLoginForm();

  return (
    <div className="px-8  lg:px-24  mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mt-3 flex flex-col">
          <Typography
            variant="h6"
            htmlFor="email"
            component="label"
            className="text-purple-700 leading-normal font-normal mb-2 futura"
          >
            Email address
          </Typography>
          <CustomInput
            error={Boolean(errors.email) || false}
            {...register("email")}
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
        <div className="w-full mt-3 flex flex-col">
          <Typography
            variant="h6"
            htmlFor="password"
            component="label"
            className="text-purple-700 leading-normal font-normal mb-2 futura"
          >
            Password
          </Typography>
          <CustomInput
            error={Boolean(errors.password) || false}
            {...register("password")}
            id="password"
            variant="outlined"
            type={typePasswordInput ? "password" : "text"}
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
                  <IconButton onClick={handleTypeInputPassword} color="inherit">
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
              },
            }}
            helperText={errors.password?.message}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="mt-3 w-full flex items-center justify-between flex-wrap">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    size="medium"
                    style={{
                      transform: "scale(1.2)",
                    }}
                    onChange={handleChangeRememberMe}
                    checked={rememberMe}
                    color="success"
                  />
                }
                label="Remember me"
              />
            </FormGroup>
            <Typography className="leading-5 font-medium mb-1 futura">
              <Link
                href={`${routes.forgetPassword.url}`}
                className="text-blue-400"
              >
                Forgot Password?
              </Link>
            </Typography>
          </div>
        </div>
        <div className="justify-center lg:justify-start flex mt-7">
          <Btn
            loading={loading}
            type="submit"
            size="large"
            className="py-3 lg:text-xl px-6 font-normal montserrat lg:py-4 lg:px-10"
          >
            Sign In
          </Btn>
        </div>
      </form>
      <div className="text-center mt-7 lg:hidden">
        <Typography className="text-grey-400 mb-1 futura">
          Don’t have an account yet?
          <Link
            href={routes.register.url}
            passHref
            className="text-success-500 ml-2"
          >
            Sign up
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default LoginForm;
