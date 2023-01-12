import {
  Chip,
  Divider,
  InputAdornment,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import { Controller } from "react-hook-form";
import useWithdraw from "./useWithdraw";

const Withdraw = () => {
  const {
    control,
    errors,
    handleSubmit,
    loading,
    onSubmit,
    register,
    withdrawTypeValue,
  } = useWithdraw();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-md px-5 sm:px-6 py-9 md:px-10  lg:px-14 lg:py-14 flex-1 w-full"
    >
      <Typography
        variant="h4"
        className="text-primary-700 futura font-medium leading-normal mb-2 md:mb-3"
      >
        Withdraw
      </Typography>
      <Typography variant="body1" className="text-neutral-800 max-w-lg">
        Your assets is safe with us and available to you whenever needed. Please
        make sure to fill in the correct details
      </Typography>
      <Divider className="my-5" />

      <div className="flex lg:pt-5 items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="amount">
          <Typography
            variant="body1"
            className="futura font-medium text-neutral-800"
          >
            Amount<span className="text-error-700">*</span>
          </Typography>
        </label>
        <CustomInput
          error={Boolean(errors.amount) || false}
          {...register("amount")}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-input": { py: 2 },
            maxWidth: "628px",
            "& .MuiFormHelperText-root": {
              mt: "8px",
              mx: 0,
              color: "red",
              fontSize: "16px",
            },
          }}
          helperText={errors.amount?.message}
          id="amount"
          variant="outlined"
          size="medium"
          placeholder="How much would you like to withdraw?"
        />
      </div>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="method">
          <Typography
            variant="body1"
            className="futura font-medium text-neutral-800"
          >
            Method<span className="text-error-700">*</span>
          </Typography>
        </label>
        <Controller
          name="method"
          control={control}
          render={({ field }) => (
            <CustomInput
              {...field}
              fullWidth
              select
              sx={{
                maxWidth: "628px",
                "& .MuiSvgIcon-root": { color: "#7953B5" },
                "& .MuiOutlinedInput-input": { py: 1.5 },
              }}
              id="method"
              variant="outlined"
              size="medium"
              defaultValue="bank_deposit"
            >
              <MenuItem value="bank_deposit">
                <ListItemText className="text-primary-700">
                  Bank Deposit
                </ListItemText>
              </MenuItem>
              <MenuItem value="network_deposit">
                <ListItemText className="text-primary-700">USDT</ListItemText>
              </MenuItem>
            </CustomInput>
          )}
        />
      </div>
      {withdrawTypeValue === "bank_deposit" && (
        <>
          <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
            <label htmlFor="bank">
              <Typography
                variant="body1"
                className="futura font-medium text-neutral-800"
              >
                Bank<span className="text-error-700">*</span>
              </Typography>
            </label>
            <CustomInput
              error={Boolean(errors.bank) || false}
              {...register("bank")}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-input": { py: 2 },
                maxWidth: "628px",
                "& .MuiFormHelperText-root": {
                  mt: "8px",
                  mx: 0,
                  color: "red",
                  fontSize: "16px",
                },
              }}
              helperText={errors.bank?.message}
              id="bank"
              variant="outlined"
              size="medium"
            />
          </div>

          <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
            <label htmlFor="account-name">
              <Typography
                variant="body1"
                className="futura font-medium text-neutral-800"
              >
                Account Name<span className="text-error-700">*</span>
              </Typography>
            </label>
            <CustomInput
              error={Boolean(errors.bankName) || false}
              {...register("bankName")}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-input": { py: 2 },
                maxWidth: "628px",
                "& .MuiFormHelperText-root": {
                  mt: "8px",
                  mx: 0,
                  color: "red",
                  fontSize: "16px",
                },
              }}
              helperText={errors.bankName?.message}
              id="account-name"
              variant="outlined"
              size="medium"
            />
          </div>

          <div className="flex items-start flex-col justify-start gap-2 mb-8 lg:mb-12">
            <label htmlFor="account-number">
              <Typography
                variant="body1"
                className="futura font-medium text-neutral-800"
              >
                Account Number<span className="text-error-700">*</span>
              </Typography>
            </label>
            <CustomInput
              error={Boolean(errors.withdrawPlatform) || false}
              {...register("withdrawPlatform")}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-input": { py: 2 },
                maxWidth: "628px",
                "& .MuiFormHelperText-root": {
                  mt: "8px",
                  mx: 0,
                  color: "red",
                  fontSize: "16px",
                },
              }}
              helperText={errors.withdrawPlatform?.message}
              id="account-number"
              variant="outlined"
              size="medium"
            />
          </div>
        </>
      )}

      {withdrawTypeValue === "network_deposit" && (
        <>
          <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
            <label
              htmlFor="network"
              className="futura font-medium text-neutral-800"
            >
              Network<span className="text-error-700">*</span>
            </label>
            <CustomInput
              error={Boolean(errors.network) || false}
              {...register("network")}
              defaultValue="TRC-20"
              fullWidth
              sx={{
                maxWidth: "628px",
                "& .MuiSvgIcon-root": { color: "#7953B5" },
                "& .MuiOutlinedInput-input": { py: 2 },
                "& .MuiFormHelperText-root": {
                  mt: "8px",
                  mx: 0,
                  color: "red",
                  fontSize: "16px",
                },
              }}
              helperText={errors.network?.message}
              id="network"
              variant="outlined"
              size="medium"
              value="USDT"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Chip
                      className="text-primary-700 bg-primary-50/50 px-4"
                      label="Fee - $1"
                    />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="flex items-start flex-col justify-start gap-2 mb-8 lg:mb-12">
            <label
              htmlFor="address"
              className="futura font-medium text-neutral-800"
            >
              Address<span className="text-error-700">*</span>
            </label>
            <CustomInput
              error={Boolean(errors.address) || false}
              {...register("address")}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-input": { py: 2 },
                maxWidth: "628px",
                "& .MuiFormHelperText-root": {
                  mt: "8px",
                  mx: 0,
                  color: "red",
                  fontSize: "16px",
                },
              }}
              helperText={errors.address?.message}
              id="address"
              variant="outlined"
              size="medium"
            />
          </div>
        </>
      )}

      <Btn type="submit" loading={loading} className="py-3 px-6">
        Withdraw
      </Btn>
    </form>
  );
};

export default Withdraw;
