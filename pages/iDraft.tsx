import { Typography } from "@mui/material";
import IDrafyLayout from "@shared/Layouts/IDraftLayout/IDrafyLayout";
import BenefitsIDeaft from "components/IDraft/BenefitsIDeaft/BenefitsIDeaft";
import DeadLineIDraft from "components/IDraft/DeadLineIDraft/DeadLineIDraft";
import DescriptionIDraft from "components/IDraft/DescriptionIDraft/DescriptionIDraft";
import ElgibilityIDraft from "components/IDraft/ElgibilityIDraft/ElgibilityIDraft";
import HeadingIDraft from "components/IDraft/HeadingIDraft/HeadingIDraft";
import MentorInfoList from "components/IDraft/MentorInfoList/MentorInfoList";
import Sponsers from "components/IDraft/Sponsers/Sponsers";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const IDraft: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || iDraft</title>
      </Head>
      <HeadingIDraft />
      <DescriptionIDraft />
      <BenefitsIDeaft />
      <ElgibilityIDraft />
      <DeadLineIDraft />
      <Typography variant="h6" className="font-semibold leading-normal text-center px-5">
        TERMS AND CONDITIONS APPLY
      </Typography>
      <Sponsers />
      <MentorInfoList />
    </>
  );
};

IDraft.getLayout = (page) => <IDrafyLayout>{page}</IDrafyLayout>;

export default IDraft;
