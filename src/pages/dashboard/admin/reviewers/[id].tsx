import { Divider } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import Loader from "@shared/Loader/Loader";
import useAuthApi from "apis/Auth.api";
import useScriptsApi from "apis/Scripts.api";
import BreadcrumbsRequestInfo from "components/Dashboard/Admin/Reviewers/RequestInfo/BreadcrumbsRequestInfo/BreadcrumbsRequestInfo";
import OneRequest from "components/Dashboard/Admin/Reviewers/RequestInfo/OneRequest/OneRequest";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";

const InformationReviewPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const { getAllReviewers } = useAuthApi();
  const { getScript } = useScriptsApi();

  const { data: reviewersData, isLoading: isLoadingGetReviewers } = useQuery(
    "reviewers",
    () => getAllReviewers(),
    {
      onError: (err) => {
        errorHandler(err);
      },
    }
  );

  const { data: scriptData, isLoading: isLoadingGetScript } = useQuery(
    "script",
    () => getScript(query.id as string),
    {
      onError: (err) => errorHandler(err),
    }
  );

  return (
    <>
      <Head>
        <title>Albantsho || Admin {scriptData?.script.title} script</title>
      </Head>
      {!isLoadingGetScript &&
      !isLoadingGetReviewers &&
      scriptData &&
      reviewersData ? (
        <div className="bg-white shadow-primary rounded-lg pt-4 lg:pt-8 pb-20 lg:pb-24 px-5 lg:px-14 max-w-5xl">
          <BreadcrumbsRequestInfo title={scriptData.script.title} />
          <Divider className="mt-2 lg:mt-6 mb-6 lg:mb-11" />
          <OneRequest
            script={scriptData.script}
            reviewersList={reviewersData.reviewers}
          />
        </div>
      ) : (
        <Loader setCustomHeight="min-h-[75vh]" />
      )}
    </>
  );
};

InformationReviewPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default InformationReviewPage;
