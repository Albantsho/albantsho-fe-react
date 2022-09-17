import {
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
import Image from "next/image";
import pencil from "../assets/pencil.svg";
import bank from "./assets/bank.png";
import { useState } from "react";

const PersonalWithdrawalDetails = () => {
  const [availableChangeValue, setAvailableChangeValue] = useState(true);
  return (
    <div>
      <Typography variant="h4" className="futura font-medium text-primary-700">
        Withdrawal Details
      </Typography>
      <Divider />
      <div className="flex flex-col md:mt-8 pt-8 gap-3 gap-y-8 md:items-start  md:flex-row md:gap-x-20">
        <div className="w-[102px] h-[102px] md:w-44 md:h-44 bg-purple-100 flex justify-center items-center mx-auto rounded-full">
          <div className="w-14 h-14 md:w-24 md:h-24">
            <Image src={bank} alt="withdrawal details" />
          </div>
        </div>

        <div className="gap-y-5 md:gap-y-6 flex flex-col md:flex-1">
          <div>
            <label htmlFor="account-name" className="inline-block mb-1">
              <Typography
                variant="h6"
                className="futura font-medium text-neutral-800"
              >
                Account Name
              </Typography>
            </label>
            <CustomInput
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7", py: "13px" } }}
              fullWidth
              id="account-name"
              variant="outlined"
              size="small"
              defaultValue="Jane Mawe"
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
            <label htmlFor="account-number" className="inline-block mb-1">
              <Typography
                variant="h6"
                className="futura font-medium text-neutral-800"
              >
                Account Number
              </Typography>
            </label>
            <CustomInput
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7", py: "13px" } }}
              fullWidth
              id="account-number"
              variant="outlined"
              size="small"
              defaultValue="0118535169"
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
            <label htmlFor="bank" className="inline-block mb-1">
              <Typography
                variant="h6"
                className="futura font-medium text-neutral-800"
              >
                Bank
              </Typography>
            </label>
            <CustomInput
              select
              sx={{
                "& .MuiInputBase-input": { color: "#9A7EC7", py: "13px" },
                "& .MuiSvgIcon-root": { color: "#7953B5" },
              }}
              fullWidth
              id="bank"
              variant="outlined"
              size="small"
              defaultValue="Guaranty Trust Bank"
            >
              <MenuItem value="guaranty-trust-bank">
                <ListItemText className="text-primary-700">
                  Guaranty Trust Bank
                </ListItemText>
              </MenuItem>
            </CustomInput>
          </div>
          <div>
            <label htmlFor="USDT" className="inline-block mb-1">
              <Typography
                variant="h6"
                className="futura font-medium text-neutral-800"
              >
                USDT TRC20 Address
              </Typography>
            </label>
            <CustomInput
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7", py: "13px" } }}
              fullWidth
              id="USDT"
              variant="outlined"
              size="small"
            />
          </div>
          <Btn className="mt-2 xl:mt-8 py-3 px-6 mr-auto md:mr-0 md:ml-auto">
            Save and Update
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default PersonalWithdrawalDetails;
