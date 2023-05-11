import { Typography } from "@mui/material";
import IDraftLayout from "@shared/Layouts/IDraftLayout/IDraftLayout";
import DescriptionIDraft from "components/IDraft/Index/DescriptionIDraft/DescriptionIDraft";
import HeadingIDraft from "components/IDraft/Index/HeadingIDraft/HeadingIDraft";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { Suspense } from "react";
import routes from "utils/routes";
import { NextPageWithLayout } from "../_app";

const BenefitsIDraft = dynamic(
  () => import("components/IDraft/Index/BenefitsIDraft/BenefitsIDraft")
);
const EligibilityIDraft = dynamic(
  () => import("components/IDraft/Index/EligibilityIDraft/EligibilityIDraft")
);
const DeadLineIDraft = dynamic(
  () => import("components/IDraft/Index/DeadLineIDraft/DeadLineIDraft")
);
const Sponsors = dynamic(
  () => import("components/IDraft/Index/Sponsors/Sponsors")
);
const MentorInfoList = dynamic(
  () => import("components/IDraft/Index/MentorInfoList/MentorInfoList")
);

const IDraft: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || iDraft</title>
      </Head>
      <HeadingIDraft />
      <DescriptionIDraft />
      <Suspense fallback={null}>
        <BenefitsIDraft />
        <EligibilityIDraft />
        <DeadLineIDraft />
        <Link
          target="_blank"
          href={routes.iDraftTermsAndConditions.url}
          className="text-gray-900 cursor-pointer z-10"
        >
          <Typography
            variant="h6"
            className="font-semibold leading-normal text-center px-5"
          >
            TERMS AND CONDITIONS APPLY
          </Typography>
        </Link>
        ;
        <Sponsors />
        <MentorInfoList />
      </Suspense>
    </>
  );
};

IDraft.getLayout = (page) => <IDraftLayout>{page}</IDraftLayout>;

export default IDraft;
