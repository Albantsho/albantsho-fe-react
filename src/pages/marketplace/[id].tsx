import Footer from "@shared/Footer/Footer";
import Loader from "@shared/Loader/Loader";
import Nav from "@shared/Nav/Nav";
import ScriptInfo from "components/Marketplace/MarketScript/ScriptInfo/ScriptInfo";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IBidInMarketplace } from "interfaces/bid";
import { IFullInformationScript } from "interfaces/script";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";
import routes from "utils/routes";

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
const BidRequestCard = dynamic(
  () => import("components/Marketplace/MarketScript/BidRequestCard/BidRequestCard")
);
// const RateToScript = dynamic(
//   () => import("components/Marketplace/MarketScript/RateToScript/RateToScript")
// );

const links = [
  { title: "Home", href: routes.home.url },
  { title: "Story base", href: routes.marketplace.url },
  { title: "Blog", href: routes.blog.url },
];

const ScriptInfoPage = () => {
  const [script, setScript] = useState<IFullInformationScript>();
  const [bid, setBid] = useState<null | IBidInMarketplace>(null);
  const [loading, setLoading] = useState(true);
  const { query } = useRouter();
  const privateAxios = useAxiosPrivate();

  useEffect(() => {
    async function getScriptsDate() {
      try {
        if (typeof query.id === "string") {
          const res = await privateAxios.get(`/script/${query.id as string}`);
          setScript(res.data.data.script);
          setBid(res.data.data.bid);
          setLoading(false);
        }
      } catch (error) {
        ("");
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
      <Nav
        className="bg-white shadow-primary"
        secondaryUnderLineColor={false}
        links={links}
        position="static"
      />
      {!loading && script ? (
        <>
          <ScriptInfo bid={bid} script={script} />
          <Suspense fallback={null}>
            <div className="flex flex-col md:flex-row mb-4 py-6 gap-10 lg:gap-7 mx-auto px-5 sm:px-10 max-w-screen-xl">
              <MarketScriptChips script={script} />
              <MarketScriptAccordion script={script} />
            </div>
            <MainDetailsMarketScript script={script} />
            <BidRequestCard/>
            {/* <RateToScript id={script._id} rate={script.rate} /> */}
            <Footer />
          </Suspense>
        </>
      ) : (
        <Loader setCustomHeight="min-h-[45vh]" />
      )}
    </>
  );
};

export default ScriptInfoPage;
