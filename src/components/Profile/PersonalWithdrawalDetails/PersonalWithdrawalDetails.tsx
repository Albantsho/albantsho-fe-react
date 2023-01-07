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
              error={Boolean(errors.bank_account_name) || false}
              {...register("bank_account_name")}
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
              helperText={errors.bank_account_name?.message}
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
              error={Boolean(errors.bank_account_number) || false}
              {...register("bank_account_number")}
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
              helperText={errors.bank_account_number?.message}
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
            >
              <MenuItem>
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
              InputProps={{ readOnly: true }}
              sx={{ "& .MuiInputBase-input": { color: "#9A7EC7", py: "13px" } }}
              fullWidth
              id="USDT"
              variant="outlined"
              size="small"
            />
          </div>
          <Btn
            type="submit"
            loading={loading}
            className="mt-2 xl:mt-8 py-3 px-6 mr-auto md:mr-0 md:ml-auto"
          >
            Save and Update
          </Btn>
        </div>
      </div>
    </form>
  );
};

export default PersonalWithdrawalDetails;
