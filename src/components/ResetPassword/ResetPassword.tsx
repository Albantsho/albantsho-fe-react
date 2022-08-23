import {
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";

import iconPassword from "./assets/icon-password.svg";
import iconShow from "./assets/icon-show.svg";
import Btn from "@shared/Btn/Btn";

const ResetPassword = () => {
  return (
    <div className="flex flex-col px-8 py-16">
      <Typography
        variant="h3"
        color="primary.main"
        className="futura font-medium leading-10"
        mb={1}
      >
        Create New Password
      </Typography>
      <Typography className="text-[#484848] leading-6 text-sm">
        Your new password must be different from all other previously used
        passwords.
      </Typography>

      <div className="w-full mt-3 flex flex-col">
        <Typography
          htmlFor="password"
          component="label"
          className="text-purple-700 leading-5 font-medium mb-1 futura"
        >
         New password
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
          htmlFor="password"
          component="label"
          className="text-purple-700 leading-5 font-medium mb-1 futura"
        >
         Verify password
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
            )
          }}
          placeholder="Verify Password"
        />
      </div>

      <div className="justify-center flex mt-10">
        <Btn size="large" className="py-3 px-6 font-normal montserrat">
          Reset Password
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

export default ResetPassword;
