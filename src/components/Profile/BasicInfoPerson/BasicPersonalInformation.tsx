import {
  Avatar,
  Divider,
  IconButton,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import camera from "./assets/camera.svg";
import pencil from "../assets/pencil.svg";

const BasicPersonalInformation = () => {
  return (
    <div>
      <Typography
        variant="body1"
        className="futura font-medium text-primary-700 mb-3 lg:mb-5"
      >
        Basic Info
      </Typography>
      <Divider />
      <div className="flex flex-col md:mt-8 py-7 gap-3 gap-y-6 md:items-start  md:flex-row md:gap-x-10">
        <div className="relative mx-auto ">
          <Avatar
            src="/assets/images/profile.jpg"
            sx={{ width: { xs: 100, md: 180 }, height: { xs: 100, md: 180 } }}
          />
          <IconButton className="bg-white absolute -bottom-1 -right-1 md:bottom-0 md:right-0  md:w-14 md:h-14 shadow-md hover:bg-white">
            <SvgIcon component={camera} inheritViewBox />
          </IconButton>
        </div>
        <div className="gap-y-5 md:gap-y-6 flex flex-col md:flex-1">
          <div>
            <label
              htmlFor="first-name"
              className="inline-block mb-1 futura"
            >
              First Name
            </label>
            <CustomInput
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7" } }}
              fullWidth
              id="first-name"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SvgIcon
                      fontSize="small"
                      component={pencil}
                      inheritViewBox
                    />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="inline-block mb-1 futura"
            >
              Last Name
            </label>
            <CustomInput
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7" } }}
              fullWidth
              id="last-name"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SvgIcon
                      fontSize="small"
                      component={pencil}
                      inheritViewBox
                    />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="inline-block mb-1 futura"
            >
              Email Address
            </label>
            <CustomInput
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7" } }}
              fullWidth
              id="email"
              variant="outlined"
              size="small"
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="inline-block mb-1 futura"
            >
              Country
            </label>
            <CustomInput
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7" } }}
              fullWidth
              id="country"
              variant="outlined"
              size="small"
            />
          </div>
          <Btn className="mt-2 py-3 px-6 mr-auto md:mr-0 md:ml-auto">
            Save and Update
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default BasicPersonalInformation;
