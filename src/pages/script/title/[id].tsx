import Loader from "@shared/Loader/Loader";
import useScriptsApi from "apis/Scripts.api";
import Title from "components/Script/Title/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";

const TitlePage = () => {
  const { getScriptUnComplete } = useScriptsApi();
  const { query } = useRouter();

  const { data: scriptData, isLoading: isLoadingGetScript } = useQuery(
    "script",
    () => getScriptUnComplete(query.id as string),
    {
      onError: (err) => errorHandler(err),
    }
  );

  return (
    <>
      <Head>
        <title>Albantsho || {scriptData?.script.title}</title>
      </Head>
      {!isLoadingGetScript && scriptData ? (
        <Title script={scriptData.script} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TitlePage;
