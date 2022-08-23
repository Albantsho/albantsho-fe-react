import {
  InputAdornment,
  SvgIcon,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";

import iconEmail from "./assets/icon-email.svg";
import iconPassword from "./assets/icon-password.svg";
import iconShow from "./assets/icon-show.svg";
import Btn from "@shared/Btn/Btn";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="flex flex-col px-8 py-16">
      <Typography
        variant="h3"
        color="primary.main"
        className="futura font-medium leading-10"
        mb={1}
      >
        Welcome
      </Typography>
      <Typography color="grey.700" className="leading-6 text-sm">
        It’s nice to have you back, Sign back in to write or find the perfect
        script for you.
      </Typography>

      <div className="w-full mt-3 flex flex-col">
        <Typography
        htmlFor="email"
          component="label"
          className="text-purple-700 leading-5 font-medium mb-1 futura"
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
        htmlFor="password"
          component="label"
          className="text-purple-700 leading-5 font-medium mb-1 futura"
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
        <div className="mt-3 flex items-center">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked color="success" />}
              label="Remember me"
            />
          </FormGroup>
        </div>
        <div>
          <Typography className="text-grey-600 leading-5 font-medium mb-1 futura">
            <Link href="/">
              <a>Forgot Password?</a>
            </Link>
          </Typography>
        </div>
      </div>

      <div className="justify-center flex mt-10">
        <Btn size="large" className="py-3 px-6 font-normal montserrat">
          Get Started
        </Btn>
      </div>

      <div className="flex justify-center mt-7">
        <Typography className="text-grey-400 leading-5 font-medium mb-1 futura">
          Don’t have an account yet?
          <a href="#" className="text-success-500 ml-2">
            Sign up
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default LoginForm;
