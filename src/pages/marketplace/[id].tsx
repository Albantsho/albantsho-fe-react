import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";
import useAuthApi from "apis/Auth.api";
import { apiPrivate } from "apis/configs/axios.config";
import useScriptsApi from "apis/Scripts.api";
import useUserStore from "app/user.store";
import ScriptInfo from "components/Marketplace/MarketScript/ScriptInfo/ScriptInfo";
import { IBidInMarketplace } from "interfaces/bid";
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
  const [bid, setBid] = useState<null | IBidInMarketplace | boolean>(false);
  const [loading, setLoading] = useState(true);
  const { getScript } = useScriptsApi();
  const { query } = useRouter();
  const setAccessToken = useUserStore((state) => state.setAccessToken);

  useEffect(() => {
    async function getScriptsDate() {
      try {
        if (typeof query.id === "string") {
          const response = await apiPrivate.post("/user/refresh", {});
          setAccessToken(response.data.data.accessToken);
          const res = await getScript(query.id as string);
          setScript(res.data.script);
          setBid(res.data.bid);
          setLoading(false);
        }
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
        <title>Albantsho || {script?.title}</title>
      </Head>
      <Nav color="inherit" position="static" />
      {!loading && script ? (
        <>
          <ScriptInfo setBid={setBid} bid={bid} script={script} />
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
