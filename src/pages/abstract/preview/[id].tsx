import Footer from "@shared/Footer/Footer";
import Loader from "@shared/Loader/Loader";
import Nav from "@shared/Nav/Nav";
import useScriptsApi from "apis/Scripts.api";
import PublishCard from "components/Abstract/Preview/PublishCard/PublishCard";
import ScriptInfo from "components/Abstract/Preview/ScriptInfo/ScriptInfo";
import MarketScriptAccordion from "components/Marketplace/MarketScript/AccordionInfo/MarketScriptAccordion";
import MarketScriptChips from "components/Marketplace/MarketScript/MarketScriptChips/MarketScriptChips";
import ScriptMainDetails from "components/Marketplace/MarketScript/ScriptMainDetails/ScriptMainDetails ";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense } from "react";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";
import routes from "utils/routes";

const links = [
  { title: "Home", href: routes.home.url },
  { title: "Story Base", href: routes.marketplace.url },
  { title: "About Us", href: routes.aboutUs.url },
  { title: "Blog", href: routes.blog.url },
  { title: "FAQ", href: routes.FAQs.url },
];

const PreviewPage = () => {
  const { query } = useRouter();

  // Use custom hook useScriptsApi to retrieve a script data
  const { getScriptUnComplete } = useScriptsApi();

  const scriptID = typeof query?.id === "string" ? query.id : "";

  const { data: scriptPreviewData, isLoading: isLoadingGetScript } = useQuery(
    ["script_preview", scriptID],
    () => getScriptUnComplete(scriptID),

    {
      onError: (err) => errorHandler(err),
      enabled: scriptID.length > 0,
    }
  );

  return (
    <>
      <Head>
        <title>Albantsho || {scriptPreviewData?.script.title}</title>
      </Head>
      <Nav
        className="bg-white shadow-primary"
        secondaryUnderLineColor={false}
        links={links}
        position="static"
      />
      {!isLoadingGetScript && scriptPreviewData ? (
        <>
          <ScriptInfo
            script={scriptPreviewData.script}
          />
          <Suspense fallback={null}>
            <div className="flex flex-col md:flex-row mb-4 py-6 gap-10 lg:gap-7 mx-auto px-5 sm:px-10 max-w-screen-xl">
              <MarketScriptChips script={scriptPreviewData.script} />
            <div className="lg:-mt-40" >
              <MarketScriptAccordion script={scriptPreviewData.script} />
            </div>
            </div>
            <ScriptMainDetails script={scriptPreviewData.script} />
            <PublishCard />
            <Footer />
          </Suspense>
        </>
      ) : (
        <Loader setCustomHeight="min-h-[45vh]" />
      )}
    </>
  );
};

export default PreviewPage;
