import {
  Divider,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import Image from "next/image";
import pencil from "../assets/pencil.svg";
import bank from "./assets/bank.png";

const PersonalWithdrawalDetails = () => {
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
        <div className="w-24 h-24 md:w-44 md:h-44 bg-purple-100 flex justify-center items-center mx-auto rounded-full">
          <div className="w-12 h-12 md:w-24 md:h-24">
            <Image src={bank} alt="withdrawal details" />
          </div>
        </div>

        <div className="gap-y-5 md:gap-y-6 flex flex-col md:flex-1">
          <div>
            <label
              htmlFor="account-name"
              className="inline-block mb-1 futura"
            >
              Account Name
            </label>
            <CustomInput
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7" } }}
              fullWidth
              id="account-name"
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
              htmlFor="account-number"
              className="inline-block mb-1 futura"
            >
              Account Number
            </label>
            <CustomInput
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7" } }}
              fullWidth
              id="account-number"
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
              htmlFor="bank"
              className="inline-block mb-1 futura"
            >
             Bank
            </label>
            <CustomInput
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7" } }}
              fullWidth
              id="bank"
              variant="outlined"
              size="small"
            />
          </div>
          <div>
            <label
              htmlFor="USDT"
              className="inline-block mb-1 futura"
            >
            USDT TRC20 Address
            </label>
            <CustomInput
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7" } }}
              fullWidth
              id="USDT"
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

export default PersonalWithdrawalDetails;
