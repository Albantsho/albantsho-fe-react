import ScriptSidebarOnMobile from "@shared/Layouts/ScriptLayout/ScriptList/ScriptSidebarOnMobile/ScriptSidebarOnMobile";
import useDraftApi from "apis/Draft.api";
import useCommentStore from "store/comments.store";
import useUserStore from "store/user.store";
import CommentList from "components/Script/CommentList/CommentList";
import ExportFile from "components/Script/ExportFile/ExportFile";
import ScenesList from "components/Script/ScenesList/ScenesList";
import ScriptDocument from "components/Script/ScriptDocument/ScriptDocument";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import { io } from "socket.io-client";
import errorHandler from "utils/error-handler";
import ScriptEditor from "../ScriptEditor/ScriptEditor";
import { QueryClient } from "react-query";

interface IProps {
  script: IFullInformationScript;
  setHtmlInitialValue: React.Dispatch<React.SetStateAction<string>>;
  htmlInitialValue: string;
  id: string | string[];
}

const queryClient = new QueryClient();

const ScriptPage = ({
  script,
  htmlInitialValue,
  setHtmlInitialValue,
  id,
}: IProps) => {
  const { query, replace, beforePopState, events, locale, route } = useRouter();
  const { getOneDraft } = useDraftApi();
  const { getComments, addNewComment } = useCommentStore((state) => ({
    getComments: state.getComments,
    addNewComment: state.addNewComment,
  }));
  const accessToken = useUserStore((state) => state.accessToken);
  const socket = useMemo(
    () =>
      io(process.env.NEXT_PUBLIC_API_BASE_URL, {
        auth: { accessToken: `Bearer ${accessToken}` },
        query: { scriptId: id as string },
      }),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    socket.on("connect", () => {
      ("");
    });
    socket.on("roomData", (roomData) => {
      getComments(roomData.comments);
    });
    socket.on("saveScriptOrder", async () => {
      try {
        document.getElementById("save-script-button")?.click();
        socket.emit("scriptSaved");
      } catch (error) {
        errorHandler(error);
      }
    });

    socket.on("getScriptOrder", async () => {
      try {
        const res = await getOneDraft(id as string);
        setHtmlInitialValue(res.draft);
      } catch (error) {
        errorHandler(error);
      }
    });
    socket.on("newComment", (comment) => {
      addNewComment(comment);
      queryClient.invalidateQueries("notification");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on("disconnect", () => {
      !socket.connected && replace("/");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return (
    <>
      <ScriptSidebarOnMobile socket={socket} script={script} />
      <div className="py-3 lg:py-5 flex px-5 sm:px-10 w-full max-w-screen-2xl">
        {query.tab && (
          <div className="max-w-sm w-full bg-white pt-11 px-6 space-y-4 overflow-y-auto mb-8 h-screen min-w-[384px] hidden sticky top-0 xl:block">
            {query.tab === "scenes" && <ScenesList />}
            {query.tab === "comment" && <CommentList socket={socket} />}
            {query.tab === "export" && <ExportFile script={script} />}
            {query.tab === "document" && (
              <ScriptDocument socket={socket} script={script} />
            )}
          </div>
        )}
        {
          <ScriptEditor
            htmlInitialValue={htmlInitialValue}
            script={script}
            socket={socket}
          />
        }
      </div>
    </>
  );
};

export default ScriptPage;
