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

  useQuery(["draft", scriptID], () => getOneDraft(scriptID), {
    onSuccess: (data) => {
      setHtmlInitialValue(data.draft);
    },
    refetchOnWindowFocus: false,
    enabled: scriptID.length > 0,
  });

  return (
    <>
      <Head>
        <title>Albantsho || Script</title>
      </Head>
      {!isLoadingGetScript && scriptData && scriptData.script ? (
        <ScriptPage
          htmlInitialValue={htmlInitialValue}
          setHtmlInitialValue={setHtmlInitialValue}
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
