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
import { IUserProfile } from "interfaces/user";
import Image from "next/image";
import { Controller } from "react-hook-form";
import pencil from "../assets/pencil.svg";
import bank from "./assets/bank.png";
import usePersonalWithdrawalDetails from "./usePersonalWithdrawalDetails";

interface IProps {
  userProfile: IUserProfile;
}

const PersonalWithdrawalDetails = ({ userProfile }: IProps) => {
  const {
    availableChangeValue,
    errors,
    handleSubmit,
    loading,
    onSubmit,
    register,
    control,
    updateInformationBankAccess,
  } = usePersonalWithdrawalDetails({ userProfile });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              error={Boolean(errors.bankAccountName) || false}
              {...register("bankAccountName")}
              disabled={!availableChangeValue}
              fullWidth
              id="account-name"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={updateInformationBankAccess}
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
              helperText={errors.bankAccountName?.message}
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
              error={Boolean(errors.bankAccountNumber) || false}
              {...register("bankAccountNumber")}
              disabled={!availableChangeValue}
              className="disabled:text-red-700"
              fullWidth
              id="account-number"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={updateInformationBankAccess}
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
              helperText={errors.bankAccountNumber?.message}
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
            <Controller
              name="bankName"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  error={Boolean(errors.bankName) || false}
                  select
                  sx={{
                    "& .MuiInputBase-input": { color: "#9A7EC7", py: "13px" },
                    "& .MuiSvgIcon-root": { color: "#7953B5" },
                    "& .MuiFormHelperText-root": {
                      mt: "8px",
                      mx: 0,
                      color: "red",
                      fontSize: "16px",
                    },
                  }}
                  fullWidth
                  id="bank"
                  variant="outlined"
                  size="small"
                  defaultValue="Guaranty Trust Bank"
                >
                  <MenuItem value="Guaranty Trust Bank">
                    <ListItemText className="text-primary-700">
                      Guaranty Trust Bank
                    </ListItemText>
                  </MenuItem>
                </CustomInput>
              )}
            />
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
              error={Boolean(errors.usdtTrc20Address) || false}
              {...register("usdtTrc20Address")}
              sx={{
                "& .MuiInputBase-input": { color: "#9A7EC7", py: "13px" },
                "& .MuiFormHelperText-root": {
                  mt: "8px",
                  mx: 0,
                  color: "red",
                  fontSize: "16px",
                },
              }}
              fullWidth
              id="USDT"
              variant="outlined"
              size="small"
              helperText={errors.usdtTrc20Address?.message}
            />
          </div>
          <div className="flex justify-between mt-2 xl:mt-8 gap-4 flex-wrap">
            <Btn type="submit" loading={loading} className="py-3 px-6">
              Save and Update
            </Btn>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalWithdrawalDetails;
