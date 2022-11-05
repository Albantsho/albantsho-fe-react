import ScriptLayout from "@shared/Layouts/ScriptLayout/ScriptLayout";
import CommentList from "components/Script/CommentList/CommentList";
import ExportFile from "components/Script/ExportFile/ExportFile";
import ScriptEditor from "components/Script/index/ScriptEditor/ScriptEditor";
import ScenesList from "components/Script/ScenesList/ScenesList";
import ScriptDocument from "components/Script/ScriptDocument/ScriptDocument";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";

const Script: NextPageWithLayout = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Albantsho || Script </title>
      </Head>
      {query.tab && (
        <div className="max-w-sm w-full bg-white pt-11 px-6 space-y-4 overflow-y-scroll h- hidden lg:block">
          {query.tab === "scenes" && <ScenesList />}
          {query.tab === "comment" && <CommentList />}
          {query.tab === "export" && <ExportFile />}
          {query.tab === "document" && <ScriptDocument />}
        </div>
      )}

      <ScriptEditor />
    </>
  );
};

Script.getLayout = (page: React.ReactElement) => (
  <ScriptLayout>{page}</ScriptLayout>
);

export default Script;
