import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";
import ScriptInfo from "components/Marketplace/MarketScriptPage/ScriptInfo/ScriptInfo";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense } from "react";

const MarketScriptChips = dynamic(
  () =>
    import(
      "components/Marketplace/MarketScriptPage/MarketScriptChips/MarketScriptChips"
    )
);
const MarketScriptAccordion = dynamic(
  () =>
    import(
      "components/Marketplace/MarketScriptPage/AccordionInfo/MarketScriptAccordion"
    )
);
const MainDetailsMarketScript = dynamic(
  () =>
    import(
      "components/Marketplace/MarketScriptPage/Accordionbig/MainDetailsPageMarketScript"
    )
);
const RateToScript = dynamic(
  () =>
    import("components/Marketplace/MarketScriptPage/RateToScript/RateToScript")
);

const MarketPlace = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Market Place Info</title>
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

export default MarketPlace;
