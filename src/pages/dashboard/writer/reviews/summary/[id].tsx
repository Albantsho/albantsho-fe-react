import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import useScriptsApi from "apis/Scripts.api";
import Heading from "components/Dashboard/Writer/Reviews/Index/Heading/Heading";
import Summary from "components/Dashboard/Writer/Reviews/Summary/Summary";
import { IFullInformationScript } from "interfaces/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import { NextPageWithLayout } from "../../../../_app";

const SummaryPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const { getScript } = useScriptsApi();
  const [script, setScript] = useState<IFullInformationScript>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getScriptFunc() {
      try {
        if (typeof query.id === "string") {
          const res = await getScript(query.id as string);
          setScript(res.data.script);
          setLoading(false);
        }
      } catch (error) {
        ("");
      }
    }

    getScriptFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <Head>
        <title>Albantsho || Summary</title>
      </Head>
      <div className="bg-white shadow-primary rounded-md mb-16">
        <Heading />
        {!loading && script ? (
          <Summary script={script} />
        ) : (
          <DotLoader color="#7953B5" className="mx-auto mt-10" />
        )}
      </div>
    </>
  );
};

SummaryPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default SummaryPage;
