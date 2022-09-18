import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import Btn from "@shared/Btn/Btn";
import Link from "next/link";
import iconEmail from "./assets/icon-email.svg";
import iconPassword from "./assets/icon-password.svg";
import iconShow from "./assets/icon-show.svg";
import routes from "routes/routes";

const SigninForm = () => {
  return (
    <div className="px-8  lg:px-24  mx-auto">
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
          id="email"
          variant="outlined"
          size="medium"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon
                  fontSize="small"
                  component={iconEmail}
                  inheritViewBox
                />
              </InputAdornment>
            ),
          }}
          placeholder="Email"
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
                <SvgIcon fontSize="small" component={iconShow} inheritViewBox />
              </InputAdornment>
            ),
          }}
          placeholder="Password"
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
                  defaultChecked
                  color="success"
                />
              }
              label="Remember me"
            />
          </FormGroup>
          <Typography className="leading-5 font-medium mb-1 futura">
            <Link href={`${routes.forgetPassword}`} passHref>
              <a className="text-blue-400">Forgot Password?</a>
            </Link>
          </Typography>
        </div>
      </div>
      <div className="justify-center lg:justify-start flex mt-7">
        <Btn
          size="large"
          className="py-3 lg:text-xl px-6 font-normal montserrat lg:py-4 lg:px-10"
        >
          Sign In
        </Btn>
      </div>
      <div className="text-center mt-7 lg:hidden">
        <Typography className="text-grey-400 mb-1 futura">
          Don’t have an account yet?
          <Link href={`${routes.signup}`} passHref>
            <a className="text-success-500 ml-2">Sign up</a>
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default SigninForm;
