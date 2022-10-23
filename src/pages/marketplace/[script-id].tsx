import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";
import useMarketplaceApi from "apis/Marketplace.api";
import useUserStore from "app/user.store";
import ScriptInfo from "components/Marketplace/MarketScript/ScriptInfo/ScriptInfo";
import { IProduct } from "interfaces/product";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";

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
  const [script, setScript] = useState<IProduct>();
  const [loading, setLoading] = useState(true);
  const { getScript } = useMarketplaceApi();
  const { query } = useRouter();

  useEffect(() => {
    async function getScriptsDate() {
      try {
        if (query.script_id === "string") {
          const res = await getScript(query.script_id);
          await setScript(res.data);
          await setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getScriptsDate();
  }, []);
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
            <RateToScript />
            <Footer />
          </Suspense>
        </>
      ) : (
        <h2>loading</h2>
      )}
    </>
  );
};

export default ScriptInfoPage;
