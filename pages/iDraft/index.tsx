import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "../_app";
import { Typography } from "@mui/material";
import HeadingIDraft from "components/IDraft/Index/HeadingIDraft/HeadingIDraft";
import DescriptionIDraft from "components/IDraft/Index/DescriptionIDraft/DescriptionIDraft";
import routes from "routes/routes";
import IDraftLayout from "@shared/Layouts/IDraftLayout/IDraftLayout";
import { Suspense } from "react";

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
        <Sponsors />
        <MentorInfoList />
      </Suspense>
    </>
  );
};

IDraft.getLayout = (page) => <IDraftLayout>{page}</IDraftLayout>;

export default IDraft;
