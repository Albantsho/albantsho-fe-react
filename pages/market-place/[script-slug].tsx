import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";
import MainDetailsMarketScript from "components/MarketScriptPage/Accordionbig/MainDetailsPageMarketScript";
import MarketScriptAccordion from "components/MarketScriptPage/AccordionInfo/MarketScriptAccordion";
import MarketScriptChips from "components/MarketScriptPage/MarketScriptChips/MarketScriptChips";
import ScriptInfo from "components/MarketScriptPage/ScriptInfo/ScriptInfo";
import Head from "next/head";

const MarketPlace = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Market Place Info</title>
      </Head>
      <Nav color="inherit" position="static" />
      <ScriptInfo />
      <div className="flex flex-col md:flex-row mt-7 mb-4 px-5 py-6 md:px-16 gap-10 md:gap-4">
        <MarketScriptChips />
        <MarketScriptAccordion />
      </div>
      <MainDetailsMarketScript />
      <Footer />
    </>
  );
};

export default MarketPlace;
