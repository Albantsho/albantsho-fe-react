import { Typography } from "@mui/material";
import ScriptLayout from "@shared/Layouts/ScriptLayout/ScriptLayout";
import CommentList from "components/Script/CommentList/CommentList";
import CommentModal from "components/Script/CommentList/CommentModal/CommentModal";
import ExportFile from "components/Script/ExportFile/ExportFile";
import ExportFileModal from "components/Script/ExportFile/ExportFileModal/ExportFileModal";
import ChangeFormatMenu from "components/Script/index/ChangeFormatMenu";
import ScenesList from "components/Script/ScenesList/ScenesList";
import ScenesListModal from "components/Script/ScenesList/ScenesListModal/ScenesListModal";
import ScriptDocument from "components/Script/ScriptDocument/ScriptDocument";
import ScriptDocumentModal from "components/Script/ScriptDocument/ScriptDocumentModal/ScriptDocumentModal";
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
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
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
        <div className="max-w-[360px] w-full bg-white pt-12 px-6 space-y-4 overflow-y-scroll h-screen hidden lg:block">
          {query.tab === "scenes" && <ScenesList />}
          {query.tab === "comment" && <CommentList />}
          {query.tab === "export" && <ExportFile />}
          {query.tab === "document" && <ScriptDocument />}
        </div>
      )}
      {/* <ExportFileModal /> */}
      {/* <ScenesListModal /> */}
      {/* <CommentModal /> */}
      {/* <ScriptDocumentModal /> */}

      <div
        onContextMenu={handleContextMenu}
        style={{ cursor: "context-menu" }}
        className="w-full px-10 flex flex-col"
      >
        <div className="bg-white max-w-3xl py-14">
          <Typography className="text-center futura font-bold">
            LONG MAN OF LONG BEACH
          </Typography>
        </div>
        <div className="bg-white max-w-3xl mt-10 py-14">
          <Typography className="text-center futura font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quasi facere obcaecati quis vel, unde reprehenderit beatae velit.
            Nostrum dolorem reprehenderit eos aliquid reiciendis dignissimos
            quas quam inventore similique tenetur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aspernatur expedita iure soluta. Error
            ullam deserunt perspiciatis maxime non. Beatae quae possimus
            cupiditate repellendus, accusantium sint. Enim quo aliquid
            temporibus deserunt! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Earum qui expedita ratione repellat maxime quia
            saepe cum, magni voluptates in architecto debitis veritatis,
            corrupti voluptas ullam fugiat dignissimos eligendi dolore?
          </Typography>
        </div>
        <ChangeFormatMenu contextMenu={contextMenu} handleClose={handleClose} />
      </div>
    </>
  );
};

Script.getLayout = (page: React.ReactElement) => (
  <ScriptLayout>{page}</ScriptLayout>
);

export default Script;
