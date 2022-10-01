import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";
import ScriptInfo from "components/Marketplace/MarketScript/ScriptInfo/ScriptInfo";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense } from "react";

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
  () =>
    import("components/Marketplace/MarketScript/RateToScript/RateToScript")
);

const ScriptInfoPage = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Marketplace Info</title>
      </Head>
      <Nav color="inherit" position="static" />
      <ScriptInfo />
      <Suspense fallback={null}>
        <div className="flex flex-col md:flex-row mt-7 mb-4 py-6 gap-10 lg:gap-7 mx-auto px-5 sm:px-10 max-w-screen-2xl">
          <MarketScriptChips />
          <MarketScriptAccordion />
        </div>
        <MainDetailsMarketScript />
        <RateToScript />
        <Footer />
      </Suspense>
    </>
  );
};

export default ScriptInfoPage;
