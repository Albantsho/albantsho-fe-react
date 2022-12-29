import ScriptSidebarOnMobile from "@shared/Layouts/ScriptLayout/ScriptList/ScriptSidebarOnMobile/ScriptSidebarOnMobile";
import useDraftApi from "apis/Draft.api";
import useCommentStore from "app/comments.store";
import useUserStore from "app/user.store";
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

interface IProps {
  script: IFullInformationScript;
  setHtmlInitialValue: React.Dispatch<React.SetStateAction<string>>;
  htmlInitialValue: string;
}

const ScriptPage = ({
  script,
  htmlInitialValue,
  setHtmlInitialValue,
}: IProps) => {
  const { query, replace } = useRouter();
  const { getOneDraft } = useDraftApi();
  const { getComments } = useCommentStore((state) => ({
    getComments: state.getComments,
  }));
  const accessToken = useUserStore((state) => state.accessToken);
  const socket = useMemo(
    () =>
      io(process.env.NEXT_PUBLIC_API_BASE_URL, {
        auth: { accessToken: `Bearer ${accessToken}` },
        query: { scriptId: query.id as string },
      }),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    socket.on("connect", () => null);
    socket.on("roomData", (roomData) => {
      getComments(roomData.comments);
    });
    socket.on("getScriptOrder", async () => {
      try {
        const res = await getOneDraft(query.id as string);
        setHtmlInitialValue(res.data.draft);
      } catch (error) {
        errorHandler(error);
      }
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
      <div
        data-aos="fade-left"
        data-aos-duration="300"
        className="py-3 lg:py-5 flex px-5 sm:px-10 max-w-screen-2xl"
      >
        {query.tab && (
          <div className="max-w-sm w-full bg-white pt-11 px-6 space-y-4 overflow-y-auto mb-8 h-screen min-w-[384px] hidden sticky top-0 lg:block">
            {query.tab === "scenes" && <ScenesList />}
            {query.tab === "comment" && <CommentList socket={socket} />}
            {query.tab === "export" && <ExportFile />}
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
