import {
  Avatar,
  Divider,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  SvgIcon,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import countryList from "config/country-list.json";
import { IUserProfile } from "interfaces/user";
import Image from "next/image";
import pencil from "../assets/pencil.svg";
import camera from "./assets/camera.svg";
import useBasicPersonalInformation from "./useBasicPersonalInformation";

interface IProps {
  userProfile: IUserProfile[];
}

const BasicPersonalInformation = ({ userProfile }: IProps) => {
  const {
    availableChangeValue,
    updateInformationUserAccess,
    errors,
    handleSubmit,
    onSubmit,
    register,
    loading,
  } = useBasicPersonalInformation({ userProfile });
  const countryUser = Object.entries(countryList).find(
    (countryFlag) => countryFlag[1] === userProfile[0].country
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" className="futura font-medium text-primary-700">
        Basic Info
      </Typography>
      <Divider />
      <div className="flex flex-col md:mt-8 py-8 gap-3 gap-y-8 md:items-start  md:flex-row md:gap-x-20">
        <div className="flex flex-col mx-auto gap-2">
          <div className="relative mx-auto">
            <Avatar
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${userProfile[0].image}`}
              sx={{ width: { xs: 100, md: 180 }, height: { xs: 100, md: 180 } }}
            />
            <IconButton
              component="label"
              className="bg-white absolute -bottom-1 -right-1 md:bottom-0 md:right-0  md:w-14 md:h-14 shadow-md hover:bg-white"
            >
              <input
                {...register("image")}
                className="opacity-0"
                type="file"
                hidden
                name="image"
                accept="image/*"
                max={1}
              />
              <SvgIcon component={camera} inheritViewBox />
            </IconButton>
          </div>
          {errors.image && (
            <span className="text-error-700">{errors.image?.message}</span>
          )}
        </div>
        <div className="gap-y-5 md:gap-y-6 flex flex-col md:flex-1">
          <div>
            <label className="mb-1 inline-block" htmlFor="first-name">
              <Typography
                variant="h6"
                className=" futura font-medium text-neutral-800"
              >
                First Name
              </Typography>
            </label>
            <CustomInput
              error={Boolean(errors.first_name) || false}
              {...register("first_name")}
              disabled={!availableChangeValue}
              fullWidth
              id="first-name"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={updateInformationUserAccess}
                      color="primary"
                    >
                      <SvgIcon
                        fontSize="small"
                        component={pencil}
                        inheritViewBox
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                readOnly: !availableChangeValue,
              }}
              sx={{
                "& .MuiInputBase-input": { color: "#9A7EC7", py: "13px" },
                "& .MuiFormHelperText-root": {
                  mt: "8px",
                  mx: 0,
                  color: "red",
                  fontSize: "16px",
                },
              }}
              helperText={errors.first_name?.message}
            />
          </div>
          <div>
            <label className="mb-1 inline-block" htmlFor="last-name">
              <Typography
                variant="h6"
                className=" futura font-medium text-neutral-800"
              >
                Last Name
              </Typography>
            </label>
            <CustomInput
              error={Boolean(errors.last_name) || false}
              {...register("last_name")}
              disabled={!availableChangeValue}
              fullWidth
              id="last-name"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={updateInformationUserAccess}
                      color="primary"
                    >
                      <SvgIcon
                        fontSize="small"
                        component={pencil}
                        inheritViewBox
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                readOnly: !availableChangeValue,
              }}
              sx={{
                "& .MuiInputBase-input": { color: "#9A7EC7", py: "13px" },
                "& .MuiFormHelperText-root": {
                  mt: "8px",
                  mx: 0,
                  color: "red",
                  fontSize: "16px",
                },
              }}
              helperText={errors.last_name?.message}
            />
          </div>
          <div>
            <label className="mb-1 inline-block" htmlFor="email">
              <Typography
                variant="h6"
                className="futura font-medium text-neutral-800"
              >
                Email
              </Typography>
            </label>
            <CustomInput
              InputProps={{ readOnly: true }}
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7", py: "13px" } }}
              fullWidth
              id="email"
              defaultValue={userProfile[0].email}
              variant="outlined"
              size="small"
            />
          </div>
          <div>
            <label className="mb-1 inline-block" htmlFor="country">
              <Typography
                variant="h6"
                className="futura font-medium text-neutral-800"
              >
                Country
              </Typography>
            </label>
            <div
              id="country"
              className="min-w-[180px] p-3 border border-gray-300 rounded-lg flex gap-3"
            >
              {countryUser && (
                <Image
                  width={37}
                  height={21}
                  src={`https://flagcdn.com/w40/${countryUser[0]}.png`}
                  alt={`${countryUser[1]} flag`}
                />
              )}
              <Typography className="leading-normal text-primary-500">
                {userProfile[0].country}
              </Typography>
            </div>
          </div>
          <Btn
            loading={loading}
            type="submit"
            className="mt-2  xl:mt-5 py-3 px-6 mr-auto md:mr-0 md:ml-auto"
          >
            Save and Update
          </Btn>
        </div>
      </div>
    </form>
  );
};

export default BasicPersonalInformation;
