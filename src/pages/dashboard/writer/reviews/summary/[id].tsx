import { Divider, Skeleton } from "@mui/material";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import useScriptsApi from "apis/Scripts.api";
import Heading from "components/Dashboard/Writer/Reviews/Index/Heading/Heading";
import Summary from "components/Dashboard/Writer/Reviews/Summary/Summary";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../../../../_app";

const SummaryPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const { getScriptUnComplete } = useScriptsApi();

  const scriptID = typeof query?.id === "string" ? query.id : "";

  const { data: scriptData, isLoading: isLoadingGetScript } = useQuery(
    ["script", scriptID],
    () => getScriptUnComplete(scriptID),
    {
      onError: (err) => errorHandler(err),
      enabled: scriptID.length > 0,
    }
  );

  return (
    <>
      <Head>
        <title>Albantsho || Summary</title>
      </Head>
      <div className="bg-white shadow-primary rounded-md mb-16">
        <Heading />
        {!isLoadingGetScript && scriptData ? (
          <Summary script={scriptData.script} />
        ) : (
          <div className="pb-9 lg:pb-16 bg-white rounded-md px-5">
            <div
              data-aos="flip-left"
              className="mt-7 lg:mt-12 rounded-md mx-auto lg:px-10   lg:py-9  xl:py-12 lg:shadow-secondary  max-w-3xl"
            >
              <Skeleton variant="rounded" width={210} height={60} />
              <div className="flex flex-col  md:flex-row lg:flex-col xl:flex-row mb-2 lg:mb-5 lg:max-w-max  gap-x-2 xl:gap-x-4 gap-y-4">
                <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
                  <Skeleton variant="rounded" width={210} height={40} />
                  <Skeleton variant="rounded" width={120} height={40} />
                </div>
                <Divider
                  className="hidden md:block md:mx-4 xl:mx-7 2xl:mx-9 lg:hidden xl:block"
                  orientation="vertical"
                  flexItem
                />
                <div>
                  <Skeleton variant="rounded" width={160} height={60} />
                </div>
              </div>
              <Skeleton variant="rounded" width={160} height={40} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

SummaryPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default SummaryPage;
