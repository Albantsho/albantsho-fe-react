import {
  BottomNavigation,
  BottomNavigationAction,
  SvgIcon,
} from "@mui/material";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import CommentModal from "components/Script/CommentList/CommentModal/CommentModal";
import ExportFileModal from "components/Script/ExportFile/ExportFileModal/ExportFileModal";
import ScenesListModal from "components/Script/ScenesList/ScenesListModal/ScenesListModal";
import ScriptDocumentModal from "components/Script/ScriptDocument/ScriptDocumentModal/ScriptDocumentModal";
import { IFullInformationScript } from "interfaces/script";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import routes from "utils/routes";
import { Socket } from "socket.io-client";
import Comment from "../assets/comment.svg";
import Document from "../assets/document.svg";
import Export from "../assets/export.svg";
import Scenes from "../assets/scenes.svg";

const routesArray = [
  { route: "?tab=scenes", title: "Scenes", icon: Scenes, value: 1 },
  { route: "?tab=comment", title: "Comment", icon: Comment, value: 2 },
  { route: "?tab=export", title: "Export", icon: Export, value: 3 },
  { route: "?tab=document", title: "Document", icon: Document, value: 4 },
];

interface IProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  script: IFullInformationScript;
}

const ScriptSidebarOnMobile = ({ script, socket }: IProps) => {
  const [activeRoute, setActiveRoute] = useState(0);
  const [openExportModal, setOpenExportModal] = useState(false);
  const [openScenesModal, setOpenScenesModal] = useState(false);
  const [openCommentsModal, setOpenCommentsModal] = useState(false);
  const [openDocumentModal, setOpenDocumentModal] = useState(false);
  const { query } = useRouter();

  const handleShowModal = (value: number) => () => {
    value === 1 && setOpenScenesModal(true);
    value === 2 && setOpenCommentsModal(true);
    value === 3 && setOpenExportModal(true);
    value === 4 && setOpenDocumentModal(true);
  };

  const handleActiveRoute = (
    event: SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setActiveRoute(newValue);
  };

  return (
    <div className="grid">
      <BottomNavigation
        showLabels
        value={activeRoute}
        className="bg-primary-900 xl:hidden min-h-[60px] no-scrollbar overflow-x-scroll text-white w-full"
        onChange={handleActiveRoute}
      >
        {routesArray.map((item) => {
          return (
            <Link
              legacyBehavior
              href={routes.scriptWritingTabs.url(
                query.id as string,
                item.route
              )}
              key={item.title}
            >
              <BottomNavigationAction
                showLabel
                onClick={handleShowModal(item.value)}
                sx={{
                  "&:hover": {
                    backgroundColor: "#6842A5",
                  },
                  "&.MuiButtonBase-root": {
                    color: "white",
                  },
                  gap: 0.5,
                  py: 1,
                  borderBottom: `${
                    query.tab === item.route.split("=")[1] &&
                    "4px solid #FDDC6A"
                  }`,
                  "&.Mui-selected": {
                    borderBottom: `${
                      query.tab === item.route.split("=")[1] &&
                      "4px solid #FDDC6A"
                    }`,
                  },
                }}
                className={`${
                  query.tab === item.route.split("=")[1] && " bg-primary-700"
                } sm:max-w-full`}
                label={item.title}
                icon={<SvgIcon component={item.icon} inheritViewBox />}
              />
            </Link>
          );
        })}
      </BottomNavigation>
      <ExportFileModal
        script={script}
        openExportModal={openExportModal}
        setOpenExportModal={setOpenExportModal}
      />
      <ScenesListModal
        openScenesModal={openScenesModal}
        setOpenScenesModal={setOpenScenesModal}
      />
      <CommentModal
        socket={socket}
        openCommentsModal={openCommentsModal}
        setOpenCommentsModal={setOpenCommentsModal}
      />
      <ScriptDocumentModal
        socket={socket}
        script={script}
        openDocumentModal={openDocumentModal}
        setOpenDocumentModal={setOpenDocumentModal}
      />
    </div>
  );
};

export default React.memo(ScriptSidebarOnMobile);
