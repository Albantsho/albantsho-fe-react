/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { CustomElement, IEditor } from "interfaces/slate";
import React, { useMemo } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import { Socket } from "socket.io-client";
import ChangeFormatMenuList from "../ChangeFormatMenuList/ChangeFormatMenuList";
import CreateComment from "./CreateComment/CreateComment";
import EditorElement from "./EditorElement/EditorElement";
import withNewFeatures from "./plugins/withNewFeatures";
import useTextEditor from "./useTextEditor";

interface IProps {
  setTextEditorValue: React.Dispatch<React.SetStateAction<string>>;
  textEditorValueSave: React.MutableRefObject<string>;
  initialValue: CustomElement[];
  width: number | undefined;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const TextEditor = ({
  setTextEditorValue,
  width,
  initialValue,
  socket,
  textEditorValueSave,
}: IProps) => {
  const editor: IEditor = useMemo(
    () => withNewFeatures(withHistory(withReact(createEditor()))),
    []
  );
  const {
    handleChangeEditor,
    handleCloseContextMenu,
    handleContextMenu,
    handleKeyDown,
    handleKeyUp,
    contextMenu,
    createCommentFunc,
    allComments,
    // ref,
    // mouse,
    cancelComment,
  } = useTextEditor({
    width,
    setTextEditorValue,
    editor,
    socket,
    textEditorValueSave,
  });

  return (
    <div
      onContextMenu={handleContextMenu}
      style={{ cursor: "context-menu", maxWidth: `${width! - 1}px` }}
      className="bg-tinted-50/25 w-full mx-auto relative"
    >
      {allComments.map((comment) => (
        <CreateComment
          key={comment._id}
          // elementWidth={mouse.elementWidth!}
          elementWidth={500}
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
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          className="isolation-auto -z-0 break-words"
          spellCheck
          autoFocus={false}
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

export default React.memo(TextEditor);
