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

  const scriptID = typeof query?.id === "string" ? query.id : "";

  const {
    data: scriptData,
    isLoading: isLoadingGetScript,
    refetch,
  } = useQuery(["script", scriptID], () => getScriptUnComplete(scriptID), {
    onError: (err) => errorHandler(err),
    enabled: scriptID.length > 0,
  });

  return (
    <>
      <Head>
        <title>Albantsho || {scriptData?.script?.title}</title>
      </Head>
      {!isLoadingGetScript && scriptData && scriptData.script ? (
        <Title script={scriptData.script} refetch={refetch} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TitlePage;
