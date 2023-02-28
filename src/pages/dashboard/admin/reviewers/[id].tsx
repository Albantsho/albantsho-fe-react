import { Divider } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import useAuthApi from "apis/Auth.api";
import useScriptsApi from "apis/Scripts.api";
import BreadcrumbsRequestInfo from "components/Dashboard/Admin/Reviewers/RequestInfo/BreadcrumbsRequestInfo/BreadcrumbsRequestInfo";
import OneRequest from "components/Dashboard/Admin/Reviewers/RequestInfo/OneRequest/OneRequest";
import { IFullInformationScript } from "interfaces/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";

const InformationReviewPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const { getAllReviewers } = useAuthApi();
  const { getScript } = useScriptsApi();
  const [loading, setLoading] = useState(true);
  const [script, setScript] = useState<IFullInformationScript>(
    {} as IFullInformationScript
  );

  const { data, isLoading } = useQuery("revivers", () => getAllReviewers(), {
    onError: (err) => {
      errorHandler(err);
    },
  });

  useEffect(() => {
    async function getScriptInfoFunc() {
      try {
        if (typeof query.id === "string") {
          const res = await getAllReviewers();
          const resScript = await getScript(query.id);
          setScript(resScript.data.script);
          setLoading(false);
        }
      } catch (error) {
        ("");
      }
    }
    getScriptInfoFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <Head>
        <title>
          Albantsho || Admin {script?.title && script?.title} script
        </title>
      </Head>
      {!loading && !isLoading && data && script ? (
        <div className="bg-white shadow-primary rounded-lg pt-4 lg:pt-8 pb-20 lg:pb-24 px-5 lg:px-14 max-w-5xl">
          <BreadcrumbsRequestInfo title={script?.title && script?.title} />
          <Divider className="mt-2 lg:mt-6 mb-6 lg:mb-11" />
          <OneRequest script={script} reviewersList={data.reviewers} />
        </div>
      ) : (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      )}
    </>
  );
};

InformationReviewPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default InformationReviewPage;
