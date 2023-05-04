/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DefaultEventsMap } from "@socket.io/component-emitter";
import useCommentStore from "store/comments.store";
import { CustomElement, IEditor } from "interfaces/slate";
import React, { useMemo } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import { Socket } from "socket.io-client";
import { deserializeScriptWithDiv } from "utils/deserialize-script-with-div";
import ChangeFormatMenuList from "../ChangeFormatMenuList/ChangeFormatMenuList";
import AllCommentsLogo from "./CreateComment/AllCommentsLogo/AllCommentsLogo";
import CreateComment from "./CreateComment/CreateComment";
import EditorElement from "./EditorElement/EditorElement";
import withNewFeatures from "./plugins/withNewFeatures";

import useTextEditor from "./useTextEditor";

interface IProps {
  htmlInitialValue: string;
  width: number | undefined;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  editorSetting: { icons: string };
}

const TextEditor = ({
  width,
  htmlInitialValue,
  socket,
  editorSetting,
}: IProps) => {
  const editor: IEditor = useMemo(
    () => withNewFeatures(withHistory(withReact(createEditor()))),
    []
  );
  const htmlContent = new DOMParser().parseFromString(
    htmlInitialValue,
    "text/html"
  );

  const value = deserializeScriptWithDiv(htmlContent.body);
  const initialValue: CustomElement[] = htmlInitialValue
    ? value
    : [
        {
          type: "page",
          children: [{ type: "heading", children: [{ text: "" }] }],
        },
      ];
  const {
    handleChangeEditor,
    handleCloseContextMenu,
    handleContextMenu,
    handleKeyDown,
    contextMenu,
    createCommentFunc,
    ref,
    cancelComment,
    addComment,
    elementInform,
  } = useTextEditor({
    width,
    editor,
    socket,
  });
  const comments = useCommentStore((state) => state.comments);

  return (
    <div
      ref={ref}
      onContextMenu={handleContextMenu}
      style={{ cursor: "context-menu", maxWidth: `${width! - 1}px` }}
      className="bg-tinted-50/25 w-full mx-auto relative"
    >
      {addComment?.showComponent && (
        <CreateComment
          key={addComment.key}
          elementWidth={elementInform.elementWidth}
          positionX={addComment.positionX}
          positionY={addComment.positionY}
          socket={socket}
          setShowFormStatus={addComment.setShowFormStatus}
          cancelComment={cancelComment}
        />
      )}
      {comments
        .filter((comment) => comment.parentId === null)
        .map((comment) => (
          <AllCommentsLogo key={comment._id} comment={comment} />
        ))}
      <Slate onChange={handleChangeEditor} editor={editor} value={initialValue}>
        <Editable
          onDoubleClick={createCommentFunc}
          onPaste={(e) => e.preventDefault()}
          onKeyDown={handleKeyDown}
          translate="yes"
          className="isolation-auto -z-0 break-words"
          spellCheck
          renderElement={(props) => (
            <EditorElement editorSetting={editorSetting} {...props} />
          )}
        />
        <ChangeFormatMenuList
          contextMenu={contextMenu}
          handleCloseContextMenu={handleCloseContextMenu}
        />
      </Slate>
    </div>
  );
};

export default React.memo(TextEditor);
