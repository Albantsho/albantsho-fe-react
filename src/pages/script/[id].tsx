import ScriptLayout from "@shared/Layouts/ScriptLayout/ScriptLayout";
import Loader from "@shared/Loader/Loader";
import useDraftApi from "apis/Draft.api";
import useScriptsApi from "apis/Scripts.api";
import ScriptPage from "components/Script/index/ScriptPage/ScriptPage";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useState } from "react";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";

const Script: NextPageWithLayout = () => {
  const { query } = useRouter();
  const [htmlInitialValue, setHtmlInitialValue] = useState("");
  const { getScriptUnComplete } = useScriptsApi();
  const { getOneDraft } = useDraftApi();
  const scriptID = typeof query?.id === "string" ? query.id : "";

  const { data: scriptData, isLoading: isLoadingGetScript } = useQuery(
    ["script-writing", scriptID],
    () => getScriptUnComplete(scriptID),
    {
      onError: (err) => errorHandler(err),
      refetchOnWindowFocus: false,
      enabled: scriptID.length > 0,
    }
  );

  const { isFetched: dataFetched } = useQuery(
    ["draft", scriptID],
    () => getOneDraft(scriptID),
    {
      onSuccess: (data) => {
        console.log(data);
        if (scriptData?.script.scriptFileType === "text/plain") {
          setHtmlInitialValue(data);
        }
      },
      refetchOnWindowFocus: false,
      enabled: scriptID.length > 0 && !!scriptData,
    }
  );

  return (
    <>
      <Head>
        <title>Albantsho || Script</title>
      </Head>
      {!isLoadingGetScript && scriptData && scriptData.script && dataFetched ? (
        <ScriptPage
          htmlInitialValue={htmlInitialValue}
          script={scriptData.script}
        />
      ) : (
        <Loader setCustomHeight="min-h-[75vh]" />
      )}
    </>
  );
};

Script.getLayout = (page: React.ReactElement) => (
  <ScriptLayout>{page}</ScriptLayout>
);

export default Script;
