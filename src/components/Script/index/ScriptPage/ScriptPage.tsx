import ScriptSidebarOnMobile from "@shared/Layouts/ScriptLayout/ScriptList/ScriptSidebarOnMobile/ScriptSidebarOnMobile";
import useDraftApi from "apis/Draft.api";
import useUserStore from "app/user.store";
import CommentList from "components/Script/CommentList/CommentList";
import ExportFile from "components/Script/ExportFile/ExportFile";
import ScenesList from "components/Script/ScenesList/ScenesList";
import ScriptDocument from "components/Script/ScriptDocument/ScriptDocument";
import { IComment } from "interfaces/comment";
import { IFullInformationScript } from "interfaces/script";
import { CustomElement } from "interfaces/slate";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import errorHandler from "utils/error-handler";
import ScriptEditor from "../ScriptEditor/ScriptEditor";

interface IProps {
  script: IFullInformationScript;
  initialValue: CustomElement[];
}

const ScriptPage = ({ script, initialValue }: IProps) => {
  const { query } = useRouter();
  const { saveFileDraft, getOneDraft } = useDraftApi();
  const [textEditorValue, setTextEditorValue] = useState<string>("");
  const textEditorValueSave = useRef<string>("");
  const accessToken = useUserStore((state) => state.accessToken);
  const socket = io(process.env.NEXT_PUBLIC_API_BASE_URL, {
    auth: { accessToken: `Bearer ${accessToken}` },
    query: { scriptId: query.id as string },
  });
  const [commentList, setCommentList] = useState<Array<IComment>>([]);

  useEffect(() => {
    socket.on("connect", () => null);
    socket.on("saveScriptOrder", async () => {
      console.log("save");
      try {
        const res = await saveFileDraft(query.id as string, {
          content: textEditorValueSave.current,
        });
        console.log(res);
      } catch (error) {
        errorHandler(error);
      }
    });
    socket.on("getScriptOrder", async () => {
      console.log("get");
      try {
        const res = await getOneDraft(query.id as string);
        initialValue = res.data.draft;
      } catch (error) {
        errorHandler(error);
      }
    });
    socket.on("roomData", (roomData) => {
      console.log(roomData);

      setCommentList(roomData.comments);
    });
    socket.on("newComment", (comment) => {
      console.log(commentList);
      setCommentList([...commentList, comment]);
      console.log(comment);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ScriptSidebarOnMobile
        script={script}
        textEditorValue={textEditorValue}
        commentList={commentList}
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
            {query.tab === "comment" && (
              <CommentList commentList={commentList} />
            )}
            {query.tab === "export" && (
              <ExportFile textEditorValue={textEditorValue} />
            )}
            {query.tab === "document" && <ScriptDocument script={script} />}
          </div>
        )}

        <ScriptEditor
          initialValue={initialValue}
          script={script}
          setTextEditorValue={setTextEditorValue}
          textEditorValueSave={textEditorValueSave}
          socket={socket}
        />
      </div>
    </>
  );
};

export default ScriptPage;
