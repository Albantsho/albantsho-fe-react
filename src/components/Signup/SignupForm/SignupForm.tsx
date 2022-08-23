import {
  InputAdornment,
  SvgIcon,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";

import iconUser from "./assets/icon-user.svg";
import iconEmail from "./assets/icon-email.svg";
import iconPassword from "./assets/icon-password.svg";
import iconShow from "./assets/icon-show.svg";
import Btn from "@shared/Btn/Btn";

const SignupForm = () => {
  return (
    <div className="flex flex-col px-8 py-16">
      <Typography
        variant="h3"
        color="primary.main"
        className="futura font-medium leading-10"
        mb={1}
      >
        Create Account
      </Typography>
      <Typography color="grey.700" className="leading-6 text-sm">
        Let’s get you all set up so you can start writing and trading script on
        our platform.
      </Typography>

      <div className="w-full mt-7 flex flex-col">
        <Typography
          htmlFor="fullName"
          component="label"
          className="text-purple-700 leading-5 font-medium mb-1 futura"
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
                <SvgIcon fontSize="small" component={iconUser} inheritViewBox />
              </InputAdornment>
            ),
          }}
          placeholder="Fullname"
        />
      </div>

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

      <div className="w-full mt-3 flex flex-col">
        <Typography
          htmlFor="country"
          component="label"
          className="text-purple-700 leading-5 font-medium mb-1 futura"
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

      <div className="w-full mt-3 flex flex-col">
        <Typography
          htmlFor="writerProducer"
          component="label"
          className="text-purple-700 leading-5 font-medium mb-1 futura"
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

      <div className="w-full mt-3 flex items-center">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked color="success" />}
            label={
              <Typography className="text-grey-600 leading-5 font-medium mb-1 futura">
                I accept the
                <a href="#" className="text-warning-500">
                  Terms & conditions
                </a>
              </Typography>
            }
          />
        </FormGroup>
      </div>

      <div className="justify-center flex mt-10">
        <Btn size="large" className="py-3 px-6 font-normal montserrat">
          Get Started
        </Btn>
      </div>

      <div className="flex justify-center mt-7">
        <Typography className="text-grey-400 leading-5 font-medium mb-1 futura">
          Already have an account?
          <a href="#" className="text-success-500 ml-2">
            Sign in
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default SignupForm;
