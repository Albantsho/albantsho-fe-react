import {
  Chip,
  Divider,
  InputAdornment,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import Btn from "@shared/Btn/Btn";

const CryptoWithdraw: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || WithdrawCrypto </title>
      </Head>
      <div className="bg-white rounded-md px-5 sm:px-6 md:px-10 py-9 lg:px-14 lg:py-14 flex-1 w-full">
        <Typography
          variant="h4"
          className="text-primary-700 futura font-medium leading-normal mb-2 md:mb-3"
        >
          Withdraw
        </Typography>
        <Typography variant="body1" className="text-neutral-800 max-w-lg">
          Your assets is safe with us and available to you whenever needed.
          Please make sure to fill in the correct details
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
            fullWidth
            sx={{ "& .MuiOutlinedInput-input": { py: 2 }, maxWidth: "628px" }}
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
          <CustomInput
            fullWidth
            sx={{ "& .MuiOutlinedInput-input": { py: 2 }, maxWidth: "628px" }}
            id="method"
            variant="outlined"
            size="medium"
          />
        </div>

        <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
          <label htmlFor="bank" className="futura font-medium text-neutral-800">
            Method<span className="text-error-700">*</span>
          </label>
          <CustomInput
            fullWidth
            select
            sx={{
              maxWidth: "628px",
              "& .MuiSvgIcon-root": { color: "#7953B5" },
              "& .MuiOutlinedInput-input": { py: 1.5 },
            }}
            id="bank"
            variant="outlined"
            size="medium"
            value="USDT"
          >
            <MenuItem value="USDT">
              <ListItemText className="text-primary-700">USDT</ListItemText>
            </MenuItem>
          </CustomInput>
        </div>

        <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
          <label
            htmlFor="network"
            className="futura font-medium text-neutral-800"
          >
            Network<span className="text-error-700">*</span>
          </label>
          <CustomInput
            defaultValue="TRC - 20"
            fullWidth
            sx={{
              maxWidth: "628px",
              "& .MuiSvgIcon-root": { color: "#7953B5" },
              "& .MuiOutlinedInput-input": { py: 2 },
            }}
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
            fullWidth
            sx={{ "& .MuiOutlinedInput-input": { py: 2 }, maxWidth: "628px" }}
            id="address"
            variant="outlined"
            size="medium"
          />
        </div>

        <Btn className="py-3 px-6">Withdraw</Btn>
      </div>
    </>
  );
};

CryptoWithdraw.getLayout = (pages) => <WalletLayout>{pages}</WalletLayout>;

export default CryptoWithdraw;