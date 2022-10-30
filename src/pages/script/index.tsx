import ScriptLayout from "@shared/Layouts/ScriptLayout/ScriptLayout";
import CommentList from "components/Script/CommentList/CommentList";
import ExportFile from "components/Script/ExportFile/ExportFile";
import ChangeFormatMenu from "components/Script/index/ChangeFormatMenu/ChangeFormatMenu";
import MainStory from "components/Script/index/MainStory/MainStory";
import ScenesList from "components/Script/ScenesList/ScenesList";
import ScriptDocument from "components/Script/ScriptDocument/ScriptDocument";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useState } from "react";

const Script: NextPageWithLayout = () => {
  const { query } = useRouter();
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <>
      <Head>
        <title>Albantsho || Script </title>
      </Head>
      {query.tab && (
        <div className="max-w-sm w-full bg-white pt-11 px-6 space-y-4 overflow-y-scroll h-screen hidden lg:block">
          {query.tab === "scenes" && <ScenesList />}
          {query.tab === "comment" && <CommentList />}
          {query.tab === "export" && <ExportFile />}
          {query.tab === "document" && <ScriptDocument />}
        </div>
      )}

      <div
        onContextMenu={handleContextMenu}
        style={{ cursor: "context-menu" }}
        className="w-full flex flex-col mx-auto"
      >
        <MainStory />
        <ChangeFormatMenu contextMenu={contextMenu} handleClose={handleClose} />
      </div>
    </>
  );
};

Script.getLayout = (page: React.ReactElement) => (
  <ScriptLayout>{page}</ScriptLayout>
);

export default Script;
