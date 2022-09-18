import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";
import MainDetailsMarketScript from "components/Marketplace/MarketScriptPage/Accordionbig/MainDetailsPageMarketScript";
import MarketScriptAccordion from "components/Marketplace/MarketScriptPage/AccordionInfo/MarketScriptAccordion";
import MarketScriptChips from "components/Marketplace/MarketScriptPage/MarketScriptChips/MarketScriptChips";
import RateToScript from "components/Marketplace/MarketScriptPage/RateToScript/RateToScript";
import ScriptInfo from "components/Marketplace/MarketScriptPage/ScriptInfo/ScriptInfo";
import Head from "next/head";

const MarketPlace = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Market Place Info</title>
      </Head>
      <Nav color="inherit" position="static" />
      <ScriptInfo />
      <div className="flex flex-col md:flex-row mt-7 mb-4 py-6 gap-10 lg:gap-7 mx-auto px-5 sm:px-10 max-w-screen-2xl">
        <MarketScriptChips />
        <MarketScriptAccordion />
      </div>
      <MainDetailsMarketScript />
      <RateToScript />
      <Footer />
    </>
  );
};

export default MarketPlace;
