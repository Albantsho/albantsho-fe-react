import {
  InputAdornment,
  SvgIcon,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  IconButton,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import iconUser from "./assets/icon-user.svg";
import iconEmail from "./assets/icon-email.svg";
import iconPassword from "./assets/icon-password.svg";
import iconShow from "./assets/icon-show.svg";
import Btn from "@shared/Btn/Btn";
import Link from "next/link";
import routes from "routes/routes";
import useRegisterForm from "./useRegisterForm";
import { Controller } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    control,
    handleSubmit,
    onSubmit,
    roleValue,
    acceptTermsAndCondition,
    HandleAcceptTermsAndCondition,
    typePasswordInput,
    handleTypeInputPassword,
  } = useRegisterForm();

  return (
    <div
      data-aos="fade-left"
      data-aos-delay="300"
      className="px-8 py-6 lg:py-12 lg:px-24 mx-auto"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mt-7 flex flex-col">
          <Typography
            variant="h6"
            htmlFor="full-name"
            component="label"
            className="text-purple-700 leading-normal font-normal mb-2 futura"
          >
            Full Name
          </Typography>
          <CustomInput
            {...register("full_name")}
            id="full-name"
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
            placeholder="Full Name"
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
            {...register("email")}
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
            type={typePasswordInput ? "password" : "text"}
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
                  <IconButton onClick={handleTypeInputPassword} color="inherit">
                    <SvgIcon
                      fontSize="small"
                      component={iconShow}
                      inheritViewBox
                    />
                  </IconButton>
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
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                id="country"
                select
                variant="outlined"
                size="medium"
                className="text-purple-700"
                sx={{ "& .MuiSvgIcon-root": { color: "#7953B5" } }}
              >
                <MenuItem value="nigeria">Nigeria</MenuItem>
                <MenuItem value="  france"> France</MenuItem>
              </CustomInput>
            )}
          />
        </div>

        <div className="w-full mt-3 lg:mt-7 flex flex-col">
          <Typography
            variant="h6"
            htmlFor="role"
            component="label"
            className="text-purple-700 leading-normal font-normal mb-2 futura"
          >
            Writer/ Producer
          </Typography>
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                id="role"
                select
                variant="outlined"
                size="medium"
                className="text-purple-700"
                sx={{ "& .MuiSvgIcon-root": { color: "#7953B5" } }}
              >
                <MenuItem value="writer">I’m a writer</MenuItem>
                <MenuItem value="producer">I’m a producer</MenuItem>
              </CustomInput>
            )}
          />
        </div>

        {roleValue === "producer" && (
          <>
            <div className="w-full mt-3 lg:mt-7 flex flex-col">
              <Typography
                variant="h6"
                htmlFor="Company"
                component="label"
                className="text-purple-700 leading-normal font-normal mb-2 futura"
              >
                What production company are you affiliated with?
              </Typography>
              <CustomInput
                {...register("production_company_name")}
                id="Company"
                variant="outlined"
                size="medium"
                className="text-purple-700"
                placeholder="Company"
              />
            </div>

            <div className="w-full mt-3 lg:mt-7 flex flex-col">
              <Typography
                variant="h6"
                htmlFor="portfolio"
                component="label"
                className="text-purple-700 leading-normal font-normal mb-2 futura"
              >
                Portfolio link
              </Typography>
              <CustomInput
                {...register("portfolio")}
                id="portfolio"
                variant="outlined"
                size="medium"
                className="text-purple-700"
                placeholder="Link to your best work"
              />
            </div>
          </>
        )}

        <div className="w-full mt-3 lg:mt-7 flex items-center md:items-start">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  size="medium"
                  style={{
                    transform: "scale(1.2)",
                  }}
                  value={acceptTermsAndCondition}
                  onChange={HandleAcceptTermsAndCondition}
                  color="success"
                />
              }
              label={
                <Typography variant="body1" className="text-grey-600  futura">
                  I accept the
                  <Link href={`${routes.termsAndCondition}`} passHref>
                    <a className="text-warning-500 ml-1">Terms & conditions</a>
                  </Link>
                </Typography>
              }
            />
          </FormGroup>
        </div>

        <div className="justify-center lg:justify-start flex mt-10">
          <Btn
            disabled={!acceptTermsAndCondition}
            type="submit"
            size="large"
            className="py-3 lg:text-xl px-6 font-normal montserrat lg:py-4 lg:px-10"
          >
            Get Started
          </Btn>
        </div>

        <div className="flex justify-center mt-3 lg:mt-7 lg:hidden">
          <Typography className="text-grey-400 text-center mb-2 futura">
            Already have an account?
            <Link href={`${routes.signin}`} passHref>
              <a className="text-success-500 ml-2">Sign in</a>
            </Link>
          </Typography>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
