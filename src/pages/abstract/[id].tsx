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

const AbstractPage = () => {
  const { query } = useRouter();
  const { getScript } = useScriptsApi();

  const { data: scriptData, isLoading: isLoadingGetScript } = useQuery(
    "script",
    () => getScript(query.id as string),
    {
      onError: (err) => errorHandler(err),
    }
  );

  return (
    <>
      <Head>
        <title>Albantsho || Abstract</title>
      </Head>
      <Nav links={links} secondaryUnderLineColor={false} position="static" />

      <div className="px-5 sm:px-10 py-10 md:py-20 min-h-screen bg-gray-50">
        {!isLoadingGetScript && scriptData ? (
          <Abstract script={scriptData.script} />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default AbstractPage;
