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
import camera from "./assets/camera.svg";
import pencil from "../assets/pencil.svg";
import { useState } from "react";

const BasicPersonalInformation = () => {
  const [availableChangeValue, setAvailableChangeValue] = useState(true);
  return (
    <div>
      <Typography variant="h4" className="futura font-medium text-primary-700">
        Basic Info
      </Typography>
      <Divider />
      <div className="flex flex-col md:mt-8 py-8 gap-3 gap-y-8 md:items-start  md:flex-row md:gap-x-20">
        <div className="relative mx-auto">
          <Avatar
            src="/assets/images/profile.jpg"
            sx={{ width: { xs: 100, md: 180 }, height: { xs: 100, md: 180 } }}
          />
          <IconButton
            component="label"
            className="bg-white absolute -bottom-1 -right-1 md:bottom-0 md:right-0  md:w-14 md:h-14 shadow-md hover:bg-white"
          >
            <input hidden accept="image/*" type="file" />
            <SvgIcon component={camera} inheritViewBox />
          </IconButton>
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
              disabled={availableChangeValue}
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7", py: "13px" } }}
              fullWidth
              id="first-name"
              variant="outlined"
              defaultValue="Jane"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setAvailableChangeValue(!availableChangeValue)
                      }
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
                readOnly: availableChangeValue,
              }}
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
              disabled={availableChangeValue}
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7", py: "13px" } }}
              fullWidth
              id="last-name"
              variant="outlined"
              defaultValue="Mawe"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setAvailableChangeValue(!availableChangeValue)
                      }
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
                readOnly: availableChangeValue,
              }}
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
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7", py: "13px" } }}
              fullWidth
              id="email"
              defaultValue="JaneMawe@dummymail.com"
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
            <CustomInput
              select
              sx={{
                "& .MuiInputBase-input": { color: "#9A7EC7", py: "13px" },
                "& .MuiSvgIcon-root": {
                  color: "#7953B5",
                },
              }}
              fullWidth
              id="country"
              variant="outlined"
              size="small"
              defaultValue="Nigeria"
            >
              <MenuItem
                TouchRippleProps={{ className: "text-primary-main" }}
                className="w-full hover:bg-primary-50/25"
                value="Nigeria"
              >
                <ListItemText className="text-primary-700">
                  Nigeria
                </ListItemText>
              </MenuItem>
            </CustomInput>
          </div>
          <Btn className="mt-2  xl:mt-5 py-3 px-6 mr-auto md:mr-0 md:ml-auto">
            Save and Update
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default BasicPersonalInformation;
