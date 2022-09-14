import { Divider, Typography } from "@mui/material";
import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Head from "next/head";
import React from "react";
import { NextPageWithLayout } from "../_app";
import success from "@assets/images/success.png";
import Image from "next/image";
import Btn from "@shared/Btn/Btn";
import { useRouter } from "next/router";

const WithdrawSuccessful: NextPageWithLayout = () => {
  const { push } = useRouter();

  return (
    <>
      <Head>
        <title>Albantsho || Withdraw Successful </title>
      </Head>
      <div className="bg-white rounded-md px-5 sm:px-6  md:px-10 py-9 lg:px-14 lg:py-14 flex-1 w-full max-w-screen-2xl">
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
        <Divider className="my-5 sm:mb-8 md:mb-12 lg:mb-20" />
        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto">
          <Image src={success} placeholder="blur" alt="success" />
        </div>

        <Typography
          variant="h5"
          className="mt-3 sm:mt-6 md:mt-10 text-center leading-normal mx-auto futura font-medium text-primary-700"
        >
          Successful Withdrawal
        </Typography>
        <Typography
          variant="h5"
          className="mt-3 text-center leading-normal mx-auto futura font-medium text-primary-700"
        >
          Transaction ID: 1234567890AVGED
        </Typography>
        <Typography
          variant="body1"
          className="mt-5 text-center mx-auto max-w-[357px] md:max-w-[501px]"
        >
          Please note that your withdrawal includes charges and may take up to
          24 hours before arriving in your account. Thanks for trusting
          Albantsho
        </Typography>

        <div
          onClick={() => push("/projects")}
          className="flex mt-4 sm:mt-6 md:my-8"
        >
          <Btn className="py-3 px-6 mx-auto">Back to dashboard</Btn>
        </div>
      </div>
    </>
  );
};

WithdrawSuccessful.getLayout = (pages) => <WalletLayout>{pages}</WalletLayout>;

export default WithdrawSuccessful;
