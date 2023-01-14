import ScriptLayout from "@shared/Layouts/ScriptLayout/ScriptLayout";
import useDraftApi from "apis/Draft.api";
import useScriptsApi from "apis/Scripts.api";
import ScriptPage from "components/Script/index/ScriptPage/ScriptPage";
import { IFullInformationScript } from "interfaces/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";

const Script: NextPageWithLayout = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState<IFullInformationScript>();
  const [htmlInitialValue, setHtmlInitialValue] = useState("");
  const { getScript } = useScriptsApi();
  const { getOneDraft } = useDraftApi();

  useEffect(() => {
    async function getScriptsData() {
      try {
        if (query.id) {
          const res = await getScript(query.id as string);
          setScript(res.data.script);
          const resDraft = await getOneDraft(query.id as string);
          if (resDraft.data.draft) setHtmlInitialValue(resDraft.data.draft);
          setLoading(false);
        }
      } catch (error) {
        ("");
      }
    }
    getScriptsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.id]);

  return (
    <>
      <Head>
        <title>Albantsho || Script</title>
      </Head>
      {!loading && script ? (
        <ScriptPage
          htmlInitialValue={htmlInitialValue}
          setHtmlInitialValue={setHtmlInitialValue}
          script={script}
        />
      ) : (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      )}
    </>
  );
};

Script.getLayout = (page: React.ReactElement) => (
  <ScriptLayout>{page}</ScriptLayout>
);

export default Script;
