/* eslint-disable @typescript-eslint/no-non-null-assertion */
import useMouse from "@react-hook/mouse-position";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { IEditor } from "interfaces/slate";
import { debounce } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import { Editor, Transforms, type Descendant } from "slate";
import { Socket } from "socket.io-client";
import {
  serializeForConvertPdf,
  serializeForSaveInBackend,
} from "utils/serialize-slate";
import useBlockButton from "./hooks/useBlockbutton";

interface IProps {
  setTextEditorValue: React.Dispatch<React.SetStateAction<string>>;
  textEditorValueSave: React.MutableRefObject<string>;
  width: number | undefined;
  editor: IEditor;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

interface IAddComment {
  positionX: number;
  positionY: number;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  setShowFormStatus: boolean;
  _id: number;
}

const useTextEditor = ({
  setTextEditorValue,
  width,
  editor,
  socket,
  textEditorValueSave,
}: IProps) => {
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);
  const { isBlockActive } = useBlockButton();
  const [allComments, setAllComments] = useState<Array<IAddComment>>([]);
  // const ref = useRef(null);
  // const mouse = useMouse(ref, {
  //   enterDelay: 100,
  //   leaveDelay: 100,
  // });

  const createCommentFunc = () => {
    // setAllComments([
    //   ...allComments,
    //   {
    //     positionX: mouse.x!,
    //     positionY: mouse.y!,
    //     socket,
    //     setShowFormStatus: true,
    //     _id: Math.random(),
    //   },
    // ]);
  };

  const cancelComment = (id: number) => () => {
    const filteredComment = allComments.filter((c) => c._id !== id);
    setAllComments(filteredComment);
  };
  console.log("hi");

  useEffect(() => {
    socket.on(
      "writeScript",
      // debounce(
      (node) => {
        try {
          Transforms.insertNodes(
            editor,
            {
              type: node[0].type,
              children: node[0].children,
            },
            {
              at: node[1],
              match: (node) => Editor.isBlock(editor, node),
            }
          );
        } catch (error) {
          ("");
        }
        try {
          Transforms.removeNodes(editor, {
            at: [node[1][0], node[1][1] + 1],
            mode: "lowest",
          });
        } catch (error) {
          ("");
        }
      }
      //   800,
      //   { leading: false }
      // )
    );

    socket.on("newComment", (comment) => {
      console.log(
        "🚀 ~ file: TextEditor.tsx:87 ~ socket,on ~ comment",
        comment
      );
      setAllComments([
        ...allComments,
        {
          positionX: +comment.positionX,
          positionY: +comment.positionY,
          socket,
          setShowFormStatus: false,
          _id: comment._id,
        },
      ]);
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
    // console.log("rerender");
    // const [selectedNode] = Editor.nodes(editor, {
    //   match: (n) => Editor.isBlock(editor, n),
    //   mode: "lowest",
    // });
    // socket.emit("writeTextInScript", selectedNode);
    // const node = { children: element };
    // const valueForSave = serializeForSaveInBackend(node);
    // const value = serializeForConvertPdf(node);
    // if (valueForSave !== undefined && textEditorValueSave !== undefined)
    //   textEditorValueSave.current = valueForSave;
    // // if (value !== undefined) setTextEditorValue(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Enter") {
      const isActiveHeading = isBlockActive(editor, "heading");
      const isActiveCharacter = isBlockActive(editor, "character");
      const isActiveDialogue = isBlockActive(editor, "dialogue");
      const isActiveParentethical = isBlockActive(editor, "parentethical");
      const isActiveTransition = isBlockActive(editor, "transition");
      const isActiveShot = isBlockActive(editor, "shot");
      const isActiveGeneral = isBlockActive(editor, "general");
      const isActiveAction = isBlockActive(editor, "action");
      const isActiveParagraph = isBlockActive(editor, "paragraph");
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
      } else if (isActiveParagraph) {
        setContextMenu(
          contextMenu === null
            ? {
                mouseX: window.innerWidth - width!,
                mouseY: 400,
              }
            : null
        );
      } else {
        return;
      }
    }
  };

  const handleKeyUp = () => {
    console.log("rerender");
    const [selectedNode] = Editor.nodes(editor, {
      match: (n) => Editor.isBlock(editor, n),
      mode: "lowest",
    });
    socket.emit("writeTextInScript", selectedNode);
  };

  return {
    handleChangeEditor,
    handleCloseContextMenu,
    handleContextMenu,
    handleKeyDown,
    handleKeyUp,
    contextMenu,
    allComments,
    createCommentFunc,
    // ref,
    // mouse,
    cancelComment,
  };
};

export default useTextEditor;
