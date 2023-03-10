import ScriptLayout from "@shared/Layouts/ScriptLayout/ScriptLayout";
import Loader from "@shared/Loader/Loader";
import useDraftApi from "apis/Draft.api";
import useScriptsApi from "apis/Scripts.api";
import ScriptPage from "components/Script/index/ScriptPage/ScriptPage";
import { IFullInformationScript } from "interfaces/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";

const Script: NextPageWithLayout = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState(true);
  const [htmlInitialValue, setHtmlInitialValue] = useState("");
  const [script, setScript] = useState<IFullInformationScript>();
  const { getScriptUnComplete } = useScriptsApi();
  const { getOneDraft } = useDraftApi();

  const { data: scriptData, isLoading: isLoadingGetScript } = useQuery(
    ["script-writing", query.id],
    () => getScriptUnComplete(query.id as string),
    {
      onError: (err) => errorHandler(err),
      refetchOnWindowFocus: false,
    }
  );

  useQuery(["draft", query.id], () => getOneDraft(query.id as string), {
    onSuccess: (data) => {
      setHtmlInitialValue(data.draft);
    },
    refetchOnWindowFocus: false,
  });

  // console.log({ script, htmlInitialValue });

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
