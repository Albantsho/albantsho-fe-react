import {
  InputAdornment,
  SvgIcon,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import iconUser from "./assets/icon-user.svg";
import iconEmail from "./assets/icon-email.svg";
import iconPassword from "./assets/icon-password.svg";
import iconShow from "./assets/icon-show.svg";
import Btn from "@shared/Btn/Btn";
import Link from "next/link";
import TitleSignupForm from "./TitleSignupForm/TitleSignupForm";
import NavbarAuthenticationSignin from "@shared/Layouts/AuthenticationLayout/NavbarAuthentication/NavbarAuthenticationSignin/NavbarAuthenticationSignin";

const SignupForm = () => {
  return (
    <div className="px-8 py-12 lg:px-24  mx-auto">
      <NavbarAuthenticationSignin />

      <div className="lg:py-28 pb-24">
        <TitleSignupForm />
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
          >
            <MenuItem sx={{marginBottom:2}} value="Writer">I’m a writer</MenuItem>
            <MenuItem value="Producer">I’m a producer</MenuItem>
          </CustomInput>
        </div>

        <div className="w-full mt-3 lg:mt-7 flex items-center md:items-start">
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
              label={
                <Typography className="text-grey-600  futura">
                  I accept the
                  <Link href="/terms-and-conditions">
                    <a className="text-warning-500 ml-1">Terms & conditions</a>
                  </Link>
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
