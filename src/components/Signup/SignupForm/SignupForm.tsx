import {
  Box,
  Button, Checkbox,
  FormControlLabel,
  FormGroup, InputAdornment,
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
import iconUser from "./assets/icon-user.svg";

const SignupForm = () => {
  return (
    <div className="px-8 py-12 lg:px-24  mx-auto">
      <Box className="hidden lg:flex justify-between">
        <Logo />
        <div className="space-x-4">
          <span>Don’t have an account yet?</span>
          <Link href="/signin" passHref>
            <Button variant="outlined" size="large">
              SIGN IN
            </Button>
          </Link>
        </div>
      </Box>

      <div className="lg:py-28 pb-24">
        <Typography
          variant="h3"
          color="primary.main"
          className="futura font-medium leading-normal"
          mb={1}
        >
          Create Account
        </Typography>
        <Typography
          color="grey.700"
          className="leading-6 text-sm md:max-w-[430px]"
        >
          Let’s get you all set up so you can start writing and trading script
          on our platform.
        </Typography>

        <div className="w-full mt-7 flex flex-col">
          <Typography
            variant="h6"
            htmlFor="fullName"
            component="label"
            className="text-purple-700 leading-normal font-normal mb-2 futura"
          >
            Full Name
          </Typography>
          <CustomInput
            id="fullName"
            variant="outlined"
            size="medium"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon
                    fontSize="small"
                    component={iconUser}
                    inheritViewBox
                  />
                </InputAdornment>
              ),
            }}
            placeholder="Fullname"
          />
        </div>

        <div className="w-full mt-3 lg:mt-7 flex flex-col">
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

        <div className="w-full mt-3 lg:mt-7 flex flex-col">
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

        <div className="w-full mt-3 lg:mt-7 flex flex-col">
          <Typography
            variant="h6"
            htmlFor="country"
            component="label"
            className="text-purple-700 leading-normal font-normal mb-2 futura"
          >
            Select your country
          </Typography>
          <CustomInput
            id="country"
            select
            variant="outlined"
            size="medium"
            className="text-purple-700"
          />
        </div>

        <div className="w-full mt-3 lg:mt-7 flex flex-col">
          <Typography
            variant="h6"
            htmlFor="writerProducer"
            component="label"
            className="text-purple-700 leading-normal font-normal mb-2 futura"
          >
            Writer/ Producer
          </Typography>
          <CustomInput
            id="writerProducer"
            select
            variant="outlined"
            size="medium"
            className="text-purple-700"
          />
        </div>

        <div className="w-full mt-3 lg:mt-7 flex items-center md:items-start">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox size="medium" defaultChecked color="success" />
              }
              label={
                <Typography className="text-grey-600 leading-5 font-normal mb-2 futura">
                  I accept the
                  <a href="#" className="text-warning-500">
                    Terms & conditions
                  </a>
                </Typography>
              }
            />
          </FormGroup>
        </div>

        <div className="justify-center lg:justify-start flex mt-10">
          <Btn
            size="large"
            className="py-3 lg:text-xl px-6 font-normal montserrat lg:py-4 lg:px-10"
          >
            Get Started
          </Btn>
        </div>

        <div className="flex justify-center mt-3 lg:mt-7 lg:hidden">
          <Typography className="text-grey-400 leading-5 font-normal mb-2 futura">
            Already have an account?
            <Link href="/signin">
              <a className="text-success-500 ml-2">Sign in</a>
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
