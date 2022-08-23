import {
  Box,
  Button, Checkbox, FormControlLabel, FormGroup, InputAdornment,
  SvgIcon,
  Typography
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";

import Btn from "@shared/Btn/Btn";
import Logo from "@shared/Logo/Logo";
import Link from "next/link";
import iconEmail from "./assets/icon-email.svg";
import iconPassword from "./assets/icon-password.svg";
import iconShow from "./assets/icon-show.svg";

const LoginForm = () => {
  return (
    <div className="px-8 py-12 lg:px-24  mx-auto">
      <Box className="hidden lg:flex justify-between">
        <Logo />
        <div className="space-x-4">
          <span>Don’t have an account yet?</span>
          <Link href="/signup" passHref>
            <Button variant="outlined" size="large">
              SIGN UP
            </Button>
          </Link>
        </div>
      </Box>
      <div className="lg:py-28">
        <Typography
          variant="h3"
          color="primary.main"
          className="futura font-medium leading-normal"
        >
          Welcome
        </Typography>
        <Typography className="max-w-[430px] mb-12" color="grey.700">
          It’s nice to have you back, Sign back in to write or find the perfect
          script for you.
        </Typography>
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
        <div className="flex justify-between items-center">
          <div className="mt-3 flex items-center">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox size="medium" defaultChecked color="success" />
                }
                label="Remember me"
              />
            </FormGroup>
          </div>
          <div>
            <Typography className="text-grey-600 leading-5 font-medium mb-1 futura">
              <Link href="/forget-password">
                <a>Forgot Password?</a>
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
        <div className="flex justify-center mt-7 lg:hidden">
          <Typography className="text-grey-400 mb-1 futura">
            Don’t have an account yet?
            <Link href="/signup">
              <a className="text-success-500 ml-2">Sign up</a>
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
