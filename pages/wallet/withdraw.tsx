import { Divider, ListItemText, MenuItem, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import Btn from "@shared/Btn/Btn";

const Withdraw: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Withdraw </title>
      </Head>
      <div className="bg-white rounded-md px-5 sm:px-6 py-9 md:px-10  lg:px-14 lg:py-14 flex-1 w-full">
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
            select
            sx={{
              maxWidth: "628px",
              "& .MuiSvgIcon-root": { color: "#7953B5" },
              "& .MuiOutlinedInput-input": { py: 1.5 },
            }}
            id="method"
            variant="outlined"
            size="medium"
            value="Bank Deposit"
          >
            <MenuItem value="Bank Deposit">
              <ListItemText className="text-primary-700">
                Bank Deposit
              </ListItemText>
            </MenuItem>
          </CustomInput>
        </div>

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
            fullWidth
            sx={{
              "& .MuiOutlinedInput-input": { py: 2 },
              maxWidth: "628px",
            }}
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
            fullWidth
            sx={{ "& .MuiOutlinedInput-input": { py: 2 }, maxWidth: "628px" }}
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
            fullWidth
            sx={{ "& .MuiOutlinedInput-input": { py: 2 }, maxWidth: "628px" }}
            id="account-number"
            variant="outlined"
            size="medium"
          />
        </div>

        <Btn className="py-3 px-6">Withdraw</Btn>
      </div>
    </>
  );
};

Withdraw.getLayout = (pages) => <WalletLayout>{pages}</WalletLayout>;

export default Withdraw;
