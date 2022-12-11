import ScriptLayout from "@shared/Layouts/ScriptLayout/ScriptLayout";
import ScriptSidebarOnMobile from "@shared/Layouts/ScriptLayout/ScriptList/ScriptSidebarOnMobile/ScriptSidebarOnMobile";
import useScriptsApi from "apis/Scripts.api";
import CommentList from "components/Script/CommentList/CommentList";
import ExportFile from "components/Script/ExportFile/ExportFile";
import ScriptEditor from "components/Script/index/ScriptEditor/ScriptEditor";
import ScenesList from "components/Script/ScenesList/ScenesList";
import ScriptDocument from "components/Script/ScriptDocument/ScriptDocument";
import { IFullInformationScript } from "interfaces/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";

const Script: NextPageWithLayout = () => {
  const { query } = useRouter();
  const [textEditorValue, setTextEditorValue] = useState<string | undefined>(
    ""
  );
  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState<IFullInformationScript>();
  const { getScript } = useScriptsApi();

  useEffect(() => {
    async function getScriptsData() {
      try {
        if (query.id) {
          const res = await getScript(query.id as string);
          setScript(res.data.script);
          setLoading(false);
        }
      } catch (error) {
        errorHandler(error);
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
        <>
          <ScriptSidebarOnMobile
            script={script}
            textEditorValue={textEditorValue}
          />
          <div
            data-aos="fade-left"
            data-aos-duration="300"
            className="py-3 lg:py-5 flex px-5 sm:px-10 max-w-screen-2xl"
          >
            {query.tab && (
              <div className="max-w-sm w-full bg-white pt-11 px-6 space-y-4 overflow-y-auto mb-8 h-screen min-w-[384px] hidden sticky top-0 lg:block">
                {query.tab === "scenes" && (
                  <ScenesList textEditorValue={textEditorValue} />
                )}
                {query.tab === "comment" && <CommentList />}
                {query.tab === "export" && (
                  <ExportFile textEditorValue={textEditorValue} />
                )}
                {query.tab === "document" && <ScriptDocument script={script} />}
              </div>
            )}

            <ScriptEditor
              script={script}
              setTextEditorValue={setTextEditorValue}
            />
          </div>
        </>
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
