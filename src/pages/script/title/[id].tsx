import DashboardNav from "@shared/Layouts/DashboardLayout/DashboardNav/DashboardNav";
import useScriptsApi from "apis/Scripts.api";
import { IFullInformationScript } from "interfaces/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";

const TitlePage = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState<IFullInformationScript>();
  const { getScript } = useScriptsApi();

  useEffect(() => {
    async function getScriptsData() {
      try {
        if (query.id) {
          const res = await getScript(query.id as string);
          setScript(res.data.script);
          setLoading(false);
        }
      } catch (error) {
        errorHandler(error);
      }
    }
    getScriptsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.id]);

  return (
    <>
      <Head>
        <title>Albantsho || Title Page</title>
      </Head>
      <DashboardNav className="shadow-lg" color="inherit" position="fixed" />
      {!loading && script ? (
        <main className="bg-tinted-50/50 w-full h-screen px-5 sm:px-10 lg:px-20">
          <div className="max-w-3xl bg-white w-full h-full mx-auto  px-5 sm:px-10 lg:px-20 py-20 lg:py-40">
            <input
              className="text-center mb-7 lg:mb-12 w-full h-10 rounded-md duration-100 outline-none px-2 py-3 focus:border-2 border-primary-700 placeholder:text-center placeholder:font-bold placeholder:text-black font-bold underline"
              defaultValue={script.title}
              placeholder="YOUR SCRIPT TITLE"
            />

            <input
              className="text-center mb-7 lg:mb-12 w-full h-10 rounded-md duration-100 outline-none px-2 py-3 focus:border-2 border-primary-700 placeholder:text-center placeholder:font-bold placeholder:text-black font-bold"
              placeholder="Written by"
            />
            <input
              className="text-center mb-7 lg:mb-12 w-full h-10 rounded-md duration-100 outline-none px-2 py-3 focus:border-2 border-primary-700 placeholder:text-center placeholder:font-bold placeholder:text-black font-bold"
              placeholder="THIS IS WHERE THE NAMES GO"
            />
            <input
              className="text-center mb-7 lg:mb-12 w-full h-10 rounded-md duration-100 outline-none px-2 py-3 focus:border-2 border-primary-700 placeholder:text-center placeholder:font-bold placeholder:text-black font-bold"
              placeholder="Based on (if any)"
            />
            <input
              className="text-center mb-7 lg:mb-12 w-full h-10 rounded-md duration-100 outline-none px-2 py-3 focus:border-2 border-primary-700 placeholder:text-center placeholder:font-bold placeholder:text-black font-bold"
              placeholder="DRAFT DATE"
            />
          </div>
        </main>
      ) : (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      )}
    </>
  );
};

export default TitlePage;
