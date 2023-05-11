import Loader from "@shared/Loader/Loader";
import Nav from "@shared/Nav/Nav";
import useScriptsApi from "apis/Scripts.api";
import Abstract from "components/Abstract/Index/Abstract";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";

const links = [
  { title: "Home", href: routes.home.url },
  { title: "About Us", href: routes.aboutUs.url },
  { title: "Blog", href: routes.blog.url },
  { title: "FAQ", href: routes.FAQs.url },
];

const controller = new AbortController();

const AbstractPage = () => {
  const { query } = useRouter();

  // Use custom hook useScriptsApi to retrieve a script data
  const { getScriptUnComplete } = useScriptsApi(controller);

  const scriptID = typeof query?.id === "string" ? query.id : "";

  const {
    data: scriptData,
    isLoading: isLoadingGetScript,
    refetch,
  } = useQuery(
    ["script", scriptID],
    () => getScriptUnComplete(scriptID),

    {
      onError: (err) => errorHandler(err),
      enabled: scriptID.length > 0,
    }
  );

  return (
    <>
      <Head>
        <title>Albantsho || Abstract</title>
      </Head>
      <Nav links={links} secondaryUnderLineColor={false} position="static" />

      {!isLoadingGetScript && scriptData ? (
        <div className="px-5 sm:px-10 py-10 md:py-20 min-h-screen bg-gray-50">
          <Abstract refetch={refetch} script={scriptData.script} />
        </div>
      ) : (
        <Loader setCustomHeight="min-h-[80vh]" />
      )}
    </>
  );
};

export default AbstractPage;
