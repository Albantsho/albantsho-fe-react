import { Divider, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Head from "next/head";
import React from "react";
import { NextPageWithLayout } from "../_app";

const Deposit: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Deposit </title>
      </Head>
      <div className="bg-white rounded-md px-5 sm:px-6 py-9 md:px-10   lg:px-14 lg:py-14 flex-1 w-full">
        <Typography
          variant="h4"
          className="text-primary-700 futura font-medium leading-normal mb-2 md:mb-3"
        >
          Deposit
        </Typography>
        <Typography variant="body1" className="text-neutral-800 max-w-lg">
          Make sure to have enough in your wallet to purchase as much amazing
          scripts as you would need.
        </Typography>
        <Divider className="my-5" />
        <div className="flex lg:pt-5 items-start flex-col justify-start gap-2 mb-9 md:mb-14">
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
            placeholder="How much would you like to deposit?"
          />
        </div>
        <Btn className="py-3 px-6">Deposit</Btn>
      </div>
    </>
  );
};

Deposit.getLayout = (pages) => <WalletLayout>{pages}</WalletLayout>;

export default Deposit;
