import EmailIcon from "@assets/icons/email.svg";
import NotShowIcon from "@assets/icons/not-show-password.svg";
import PasswordIcon from "@assets/icons/password.svg";
import ShowIcon from "@assets/icons/show-password.svg";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  SvgIcon,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import countryList from "config/country-list.json";
import Image from "next/image";
import Link from "next/link";
import { Controller } from "react-hook-form";
import routes from "routes/routes";
import UserIcon from "./assets/user.svg";
import useRegisterForm from "./useRegisterForm";
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
    errors,
    loading,
  } = useRegisterForm();

  return (
    <div className="px-8 py-6 lg:py-12 lg:px-24 mx-auto">
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
            error={Boolean(errors.fullname) || false}
            {...register("fullname")}
            id="full-name"
            variant="outlined"
            size="medium"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon
                    fontSize="small"
                    component={UserIcon}
                    inheritViewBox
                  />
                </InputAdornment>
              ),
            }}
            placeholder="Full Name"
            sx={{
              "& .MuiFormHelperText-root": {
                mt: "8px",
                mx: 0,
                color: "red",
                fontSize: "16px",
              },
            }}
            helperText={errors.fullname?.message}
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
            error={Boolean(errors.password) || false}
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
                lineHeight: "24px",
              },
            }}
            helperText={errors.password?.message}
          />
        </div>

        <div className="w-full mt-3 lg:mt-7 flex flex-col">
          <Typography
            variant="h6"
            component="label"
            className="text-purple-700 leading-normal font-normal mb-2 futura"
          >
            Gender
          </Typography>
          <RadioGroup
            defaultValue="male"
            {...register("gender")}
            className="flex flex-row gap-2"
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
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
                error={Boolean(errors.country) || false}
                {...field}
                id="country"
                select
                variant="outlined"
                size="medium"
                className="text-purple-700"
                placeholder="Country"
                SelectProps={{ MenuProps: { className: "max-h-[400px]" } }}
                sx={{
                  "& .MuiInputBase-root": { height: "56px" },
                  "& .MuiSvgIcon-root": { color: "#7953B5" },
                  "& .MuiSelect-outlined": {
                    display: "flex",
                    alignItems: "center",
                  },
                  "& .MuiFormHelperText-root": {
                    mt: "8px",
                    mx: 0,
                    color: "red",
                    fontSize: "16px",
                  },
                }}
                helperText={errors.country?.message}
              >
                {Object.entries(countryList).map((country) => (
                  <MenuItem
                    TouchRippleProps={{ className: "text-primary-main" }}
                    className="hover:bg-primary-50/25"
                    key={country[0]}
                    value={country[1]}
                  >
                    <span className="mr-3 -mb-1">
                      <Image
                        width={40}
                        height={30}
                        src={`https://flagcdn.com/w40/${country[0]}.png`}
                        alt={`${country[1]} flag`}
                      />
                    </span>
                    {country[1]}
                  </MenuItem>
                ))}
              </CustomInput>
            )}
          />
        </div>

        <div className="w-full mt-3 lg:mt-7 flex flex-col">
          <Typography
            variant="h6"
            htmlFor="user_type"
            component="label"
            className="text-purple-700 leading-normal font-normal mb-2 futura"
          >
            Writer/ Producer
          </Typography>
          <Controller
            name="user_type"
            control={control}
            render={({ field }) => (
              <CustomInput
                error={Boolean(errors.user_type) || false}
                {...field}
                id="user_type"
                select
                variant="outlined"
                size="medium"
                className="text-purple-700"
                sx={{
                  "& .MuiSvgIcon-root": { color: "#7953B5" },
                  "& .MuiFormHelperText-root": {
                    mt: "8px",
                    mx: 0,
                    color: "red",
                    fontSize: "16px",
                  },
                }}
                helperText={errors.user_type?.message}
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
                error={Boolean(errors.production_company_name) || false}
                {...register("production_company_name")}
                id="Company"
                variant="outlined"
                size="medium"
                className="text-purple-700"
                placeholder="Company"
                sx={{
                  "& .MuiFormHelperText-root": {
                    mt: "8px",
                    mx: 0,
                    color: "red",
                    fontSize: "16px",
                  },
                }}
                helperText={errors.production_company_name?.message}
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
                error={Boolean(errors.portfolio) || false}
                {...register("portfolio")}
                id="portfolio"
                variant="outlined"
                size="medium"
                className="text-purple-700"
                placeholder="Link to your best work"
                sx={{
                  "& .MuiFormHelperText-root": {
                    mt: "8px",
                    mx: 0,
                    color: "red",
                    fontSize: "16px",
                  },
                }}
                helperText={errors.portfolio?.message}
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
                  <Link
                    href={routes.termsAndCondition.url}
                    className="text-warning-500 ml-1"
                  >
                    Terms & conditions
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
            loading={loading}
            color="primary"
          >
            Get Started
          </Btn>
        </div>
      </form>
      <div className="flex justify-center mt-3 lg:mt-7 lg:hidden">
        <Typography className="text-grey-400 text-center mb-2 futura">
          Already have an account?
          <Link href={`${routes.signin.url}`} className="text-success-500 ml-2">
            Sign in
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default RegisterForm;
