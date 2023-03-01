import DashboardNav from "@shared/Layouts/DashboardLayout/DashboardNav/DashboardNav";
import useScriptsApi from "apis/Scripts.api";
import Abstract from "components/Abstract/Index/Abstract";
import { IFullInformationScript } from "interfaces/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";

const AbstractPage = () => {
  const { query } = useRouter();
  const [script, setScript] = useState<IFullInformationScript>();
  const { getScript } = useScriptsApi();

  useEffect(() => {
    async function getScriptFunc() {
      try {
        if (typeof query.id === "string") {
          const res = await getScript(query.id);

          setScript(res.data.script);
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
        <title>Albantsho || Abstract</title>
      </Head>
      <DashboardNav color="inherit" position="static" />

      <div className="px-5 sm:px-10 py-10 md:py-20 min-h-screen bg-gray-50">
        {script ? (
          <Abstract script={script} />
        ) : (
          <DotLoader color="#7953B5" className="mx-auto mt-10" />
        )}
      </div>
    </>
  );
};

export default AbstractPage;
