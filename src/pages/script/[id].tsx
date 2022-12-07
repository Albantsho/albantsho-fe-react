import ScriptLayout from "@shared/Layouts/ScriptLayout/ScriptLayout";
import ScriptSidebarOnMobile from "@shared/Layouts/ScriptLayout/ScriptList/ScriptSidebarOnMobile/ScriptSidebarOnMobile";
import CommentList from "components/Script/CommentList/CommentList";
import ExportFile from "components/Script/ExportFile/ExportFile";
import ScriptEditor from "components/Script/index/ScriptEditor/ScriptEditor";
import ScenesList from "components/Script/ScenesList/ScenesList";
import ScriptDocument from "components/Script/ScriptDocument/ScriptDocument";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useState } from "react";

const Script: NextPageWithLayout = () => {
  const { query } = useRouter();
  const [textEditorValue, setTextEditorValue] = useState<string | undefined>(
    ""
  );
  return (
    <>
      <Head>
        <title>Albantsho || Script</title>
      </Head>

      <ScriptSidebarOnMobile textEditorValue={textEditorValue} />
      <div
        data-aos="fade-left"
        data-aos-duration="300"
        className="py-3 lg:py-5 flex px-5 sm:px-10 max-w-screen-2xl"
      >
        {query.tab && (
          <div className="max-w-sm w-full bg-white pt-11 px-6 space-y-4 overflow-y-auto mb-8 h-screen min-w-[384px] hidden sticky top-0 lg:block">
            {query.tab === "scenes" && <ScenesList />}
            {query.tab === "comment" && <CommentList />}
            {query.tab === "export" && (
              <ExportFile textEditorValue={textEditorValue} />
            )}
            {query.tab === "document" && <ScriptDocument />}
          </div>
        )}

        <ScriptEditor setTextEditorValue={setTextEditorValue} />
      </div>
    </>
  );
};

Script.getLayout = (page: React.ReactElement) => (
  <ScriptLayout>{page}</ScriptLayout>
);

export default Script;
