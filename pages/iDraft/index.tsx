import Head from "next/head";
import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import { Typography } from "@mui/material";
import HeadingIDraft from "components/IDraft/Index/HeadingIDraft/HeadingIDraft";
import DescriptionIDraft from "components/IDraft/Index/DescriptionIDraft/DescriptionIDraft";
import BenefitsIDraft from "components/IDraft/Index/BenefitsIDraft/BenefitsIDraft";
import ElgibilityIDraft from "components/IDraft/Index/ElgibilityIDraft/ElgibilityIDraft";
import DeadLineIDraft from "components/IDraft/Index/DeadLineIDraft/DeadLineIDraft";
import Sponsers from "components/IDraft/Index/Sponsers/Sponsers";
import MentorInfoList from "components/IDraft/Index/MentorInfoList/MentorInfoList";
import IDraftLayout from "@shared/Layouts/IDraftLayout/IDrafyLayout";
import routes from "routes/routes";

const IDraft: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || iDraft</title>
      </Head>
      <HeadingIDraft />
      <DescriptionIDraft />
      <BenefitsIDraft />
      <ElgibilityIDraft />
      <DeadLineIDraft />
      <Link href={`${routes.iDraft}/terms-and-conditions`}>
        <a className="text-gray-900">
          <Typography
            variant="h6"
            className="font-semibold leading-normal text-center px-5"
          >
            TERMS AND CONDITIONS APPLY
          </Typography>
        </a>
      </Link>
      ;
      <Sponsers />
      <MentorInfoList />
    </>
  );
};

IDraft.getLayout = (page) => <IDraftLayout>{page}</IDraftLayout>;

export default IDraft;
