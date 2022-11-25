import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";
import useScriptsApi from "apis/Scripts.api";
import ScriptInfo from "components/Marketplace/MarketScript/ScriptInfo/ScriptInfo";
import { IFullInformationScript } from "interfaces/script";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";

const MarketScriptChips = dynamic(
  () =>
    import(
      "components/Marketplace/MarketScript/MarketScriptChips/MarketScriptChips"
    )
);
const MarketScriptAccordion = dynamic(
  () =>
    import(
      "components/Marketplace/MarketScript/AccordionInfo/MarketScriptAccordion"
    )
);
const MainDetailsMarketScript = dynamic(
  () =>
    import(
      "components/Marketplace/MarketScript/ScriptMainDetails/ScriptMainDetails "
    )
);
const RateToScript = dynamic(
  () => import("components/Marketplace/MarketScript/RateToScript/RateToScript")
);

const ScriptInfoPage = () => {
  const [script, setScript] = useState<IFullInformationScript>();
  const [loading, setLoading] = useState(true);
  const { getScript } = useScriptsApi();
  const { query } = useRouter();

  useEffect(() => {
    async function getScriptsDate() {
      try {
        const res = await getScript(query.id as string);
        setScript(res.data);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }
    getScriptsDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.id]);

  return (
    <>
      <Head>
        <title>Albantsho || Marketplace Info</title>
      </Head>
      <Nav color="inherit" position="static" />
      {!loading && script ? (
        <>
          <ScriptInfo script={script} />
          <Suspense fallback={null}>
            <div className="flex flex-col md:flex-row mt-7 mb-4 py-6 gap-10 lg:gap-7 mx-auto px-5 sm:px-10 max-w-screen-2xl">
              <MarketScriptChips script={script} />
              <MarketScriptAccordion script={script} />
            </div>
            <MainDetailsMarketScript script={script} />
            <RateToScript id={script._id} />
            <Footer />
          </Suspense>
        </>
      ) : (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      )}
    </>
  );
};

export default ScriptInfoPage;
