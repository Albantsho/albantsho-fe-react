/* eslint-disable @typescript-eslint/no-non-null-assertion */
import useMouse from "@react-hook/mouse-position";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import useDraftApi from "apis/Draft.api";
import useCommentStore from "store/comments.store";
import useScriptValueStore from "store/scriptValue.store";
import { IEditor } from "interfaces/slate";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Editor, Transforms, type BaseOperation, type Descendant } from "slate";
import { Socket } from "socket.io-client";
import errorHandler from "utils/error-handler";
import { serializeWithDiv } from "utils/serialize-slate";
import useBlockButton from "./hooks/useBlockbutton";

interface IProps {
  width: number | undefined;
  editor: IEditor;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

interface IAddComment {
  positionX: number;
  positionY: number;
  setShowFormStatus: boolean;
  showComponent: boolean;
  key: number;
}

const useTextEditor = ({ width, editor, socket }: IProps) => {
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);
  const { isBlockActive } = useBlockButton();

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 300,
    leaveDelay: 300,
  });
  const { query } = useRouter();
  const { saveFileDraft } = useDraftApi();
  const [addComment, setAddComment] = useState<IAddComment>();
  const { setScriptValue } = useScriptValueStore((state) => ({
    setScriptValue: state.setScriptValue,
  }));
  const { addNewComment } = useCommentStore((state) => ({
    addNewComment: state.addNewComment,
  }));
  const remote = useRef(false);
  const socketChange = useRef(false);
  const createCommentFunc = () => {
    setAddComment({
      key: Date.now(),
      positionX: mouse.x!,
      positionY: mouse.y!,
      setShowFormStatus: true,
      showComponent: true,
    });
  };

  const cancelComment = () => {
    setAddComment({
      key: Date.now(),
      positionX: mouse.x!,
      positionY: mouse.y!,
      setShowFormStatus: true,
      showComponent: false,
    });
  };

  useEffect(() => {
    socket.on("writeScript", (ops) => {
      console.log(ops);

      remote.current = true;
      Editor.withoutNormalizing(editor, () => {
        JSON.parse(ops).forEach((op: BaseOperation) => {
          editor.apply(op);
        });
      });
      remote.current = false;
      socketChange.current = true;
    });

    socket.on("newComment", (comment) => {
      addNewComment(comment);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleCloseContextMenu = () => setContextMenu(null);

  const handleChangeEditor = (element: Descendant[]) => {
    const ops = editor.operations.filter((o) => {
      if (o) {
        return o.type !== "set_selection" && o.type !== "split_node";
      }
      return false;
    });
    if (ops.length && !remote.current && !socketChange.current) {
      socket.emit("writeTextInScript", JSON.stringify(ops));
    }
    socketChange.current = false;
    const node = { children: element };
    const value = serializeWithDiv(node);
    if (value !== undefined) {
      setScriptValue(value);
      socket.on("saveScriptOrder", async () => {
        try {
          await saveFileDraft(query.id as string, {
            content: value,
          });
          socket.emit("scriptSaved");
        } catch (error) {
          errorHandler(error);
        }
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const isActiveParagraph = isBlockActive(editor, "paragraph");
    if (isActiveParagraph && e.code !== "Backspace") {
      e.preventDefault();
      setContextMenu(
        contextMenu === null
          ? {
            mouseX: window.innerWidth - width!,
            mouseY: 400,
          }
          : null
      );
    }
    if (e.code === "Enter") {
      const isActiveHeading = isBlockActive(editor, "heading");
      const isActiveCharacter = isBlockActive(editor, "character");
      const isActiveDialogue = isBlockActive(editor, "dialogue");
      const isActiveParentethical = isBlockActive(editor, "parentethical");
      const isActiveTransition = isBlockActive(editor, "transition");
      const isActiveShot = isBlockActive(editor, "shot");
      const isActiveGeneral = isBlockActive(editor, "general");
      const isActiveAction = isBlockActive(editor, "action");
      if (isActiveHeading) {
        e.preventDefault();
        Transforms.insertNodes(editor, {
          type: "action",
          children: [{ text: "" }],
        });
        return;
      } else if (isActiveCharacter) {
        e.preventDefault();
        Transforms.insertNodes(editor, {
          type: "dialogue",
          children: [{ text: "" }],
        });
        return;
      } else if (isActiveParentethical) {
        e.preventDefault();
        Transforms.insertNodes(editor, {
          type: "dialogue",
          children: [{ text: "" }],
        });
        return;
      } else if (isActiveDialogue) {
        e.preventDefault();
        Transforms.insertNodes(editor, {
          type: "action",
          children: [{ text: "" }],
        });
        return;
      } else if (isActiveTransition) {
        e.preventDefault();
        Transforms.insertNodes(editor, {
          type: "heading",
          children: [{ text: "" }],
        });
        return;
      } else if (isActiveShot) {
        e.preventDefault();
        Transforms.insertNodes(editor, {
          type: "action",
          children: [{ text: "" }],
        });
        return;
      } else if (isActiveGeneral) {
        e.preventDefault();
        Transforms.insertNodes(editor, {
          type: "action",
          children: [{ text: "" }],
        });
        return;
      } else if (isActiveAction) {
        e.preventDefault();
        Transforms.insertNodes(editor, {
          type: "paragraph",
          children: [{ text: "" }],
        });
      } else {
        return;
      }
    }
  };

  return {
    handleChangeEditor,
    handleCloseContextMenu,
    handleContextMenu,
    handleKeyDown,
    contextMenu,
    createCommentFunc,
    ref,
    mouse,
    cancelComment,
    addComment,
  };
};

export default useTextEditor;
