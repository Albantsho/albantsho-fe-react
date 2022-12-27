/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { CustomElement, IEditor } from "interfaces/slate";
import React, { useMemo } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import { Socket } from "socket.io-client";
import { deserializeScriptWithDiv } from "utils/deserialize-script-with-div";
import ChangeFormatMenuList from "../ChangeFormatMenuList/ChangeFormatMenuList";
import CreateComment from "./CreateComment/CreateComment";
import EditorElement from "./EditorElement/EditorElement";
import withNewFeatures from "./plugins/withNewFeatures";
import { IAddComment } from "./TextEditorList";
import useTextEditor from "./useTextEditor";

interface IProps {
  htmlInitialValue: string;
  width: number | undefined;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  setAllComments: React.Dispatch<React.SetStateAction<IAddComment[]>>;
  allComments: IAddComment[];
}

const TextEditor = ({
  width,
  htmlInitialValue,
  socket,
  allComments,
  setAllComments,
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
    mouse,
    cancelComment,
  } = useTextEditor({
    width,
    editor,
    socket,
    allComments,
    setAllComments,
  });

  return (
    <div
      ref={ref}
      onContextMenu={handleContextMenu}
      style={{ cursor: "context-menu", maxWidth: `${width! - 1}px` }}
      className="bg-tinted-50/25 w-full mx-auto relative"
    >
      {allComments.map((comment) => (
        <CreateComment
          key={comment._id}
          elementWidth={mouse.elementWidth!}
          positionX={comment.positionX}
          positionY={comment.positionY}
          socket={comment.socket}
          id={comment._id}
          setShowFormStatus={comment.setShowFormStatus}
          cancelComment={cancelComment}
        />
      ))}
      <Slate onChange={handleChangeEditor} editor={editor} value={initialValue}>
        <Editable
          onDoubleClick={createCommentFunc}
          onPaste={(e) => e.preventDefault()}
          onKeyDown={handleKeyDown}
          translate="yes"
          className="isolation-auto -z-0 break-words"
          spellCheck
          autoFocus
          renderElement={(props) => <EditorElement {...props} />}
        />
        <ChangeFormatMenuList
          contextMenu={contextMenu}
          handleCloseContextMenu={handleCloseContextMenu}
        />
      </Slate>
    </div>
  );
};

export default TextEditor;
