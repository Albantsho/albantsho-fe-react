import useMouse from "@react-hook/mouse-position";
import useUserStore from "app/user.store";
import escapeHTML from "escape-html";
import { CustomElement, IEditor } from "interfaces/slate";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  createEditor,
  Editor,
  Element,
  Text,
  Transforms,
  type Descendant,
} from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import { io, Socket } from "socket.io-client";
import ChangeFormatMenuList from "../ChangeFormatMenuList/ChangeFormatMenuList";
import CreateComment from "./CreateComment/CreateComment";
import EditorElement from "./EditorElement/EditorElement";
import useBlockButton from "./hooks/useBlockbutton";
import withNewFeatures from "./plugins/withNewFeatures";
import { DefaultEventsMap } from "@socket.io/component-emitter";

interface IProps {
  setTextEditorValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
  initialValue: CustomElement[];
  width: number | undefined;
}

interface INode {
  children: Descendant[];
}

const TextEditor = ({ setTextEditorValue, width, initialValue }: IProps) => {
  console.log("hi");

  const accessToken = useUserStore((state) => state.accessToken);
  const editor: IEditor = useMemo(
    () => withNewFeatures(withHistory(withReact(createEditor()))),
    []
  );
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);
  const { isBlockActive } = useBlockButton();
  const { query } = useRouter();
  const socket = io(process.env.NEXT_PUBLIC_API_BASE_URL, {
    auth: { accessToken: `Bearer ${accessToken}` },
    query: { scriptId: query.id as string },
  });
  const [AllCommentsPositions, setAllCommentsPositions] = useState<
    Array<{
      positionX: number;
      positionY: number;
      socket: Socket<DefaultEventsMap, DefaultEventsMap>;
    }>
  >([]);
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket);
    });
    socket.on("writeScript", (node) => {
      console.log("🚀 ~ file: TextEditor.tsx:86 ~ socket.on ~ node", node);
      // if (node !== null) {
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
      // }

      socket.on("newComment", (comment) => {
        console.log(
          "🚀 ~ file: TextEditor.tsx:87 ~ socket,on ~ comment",
          comment
        );
        return;
      });

      // return () => {
      //   socket.off("writeScript", (node) => {
      //     console.log(node);
      //   });
      // };
    });
  }, []);

  useEffect(() => {
    socket.on("newComment", (newComment) => {
      console.log(newComment);
    });
  }, []);

  // useEffect(() => {
  //   socket.on("writeScript", (node) => {
  //     console.log("🚀 ~ file: TextEditor.tsx:86 ~ socket.on ~ node", node);
  //     if (node !== null) {
  //       Transforms.insertNodes(
  //         editor,
  //         {
  //           type: node[0].type,
  //           children: node[0].children,
  //         },
  //         {
  //           at: node[1],
  //           match: (node) => Editor.isBlock(editor, node),
  //         }
  //       );
  //     }
  //   });
  // }, []);

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

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };

  const handleChangeEditor = (element: Descendant[]) => {
    const node = { children: element };
    const serialize = (node: INode | Descendant): string | undefined => {
      if (Text.isText(node)) {
        const string = escapeHTML(node.text);
        return string;
      }
      const children = node.children.map((n) => serialize(n)).join("");
      if (Element.isElement(node)) {
        switch (node.type) {
          case "heading": {
            return `<p itemID="heading" style="font-family:Courier;padding:0 40px;font-size:18px;margin-bottom:20px;color:black;width:100%;text-transform:uppercase;">${children}</p>`;
          }
          case "action": {
            return `<p itemID="action" style="font-family:Courier;width:100%;padding:0 40px;color:black;margin-bottom:20px;font-size:16px;">${children}</p>`;
          }
          case "character": {
            return `<p itemID="character" style="font-family:Courier;padding:0 40px;margin-bottom:18px;text-align:start;width:60%;text-transform:uppercase;color:black;margin-left:auto;font-size:18px;">${children}</p>`;
          }
          case "dialogue": {
            return `<p itemID="dialogue" style="font-family:Courier;padding:0 40px;margin-bottom:16px;text-align:start;width:70%;color:black;margin-left:auto;margin-right:auto;font-size:16px;">${children}</p>`;
          }
          case "parentethical": {
            return `<p itemID="parentethical" style="font-family:Courier;color:black;padding:0 16px;margin-bottom:18px;max-width:50%;width:fit-content;margin-left:auto;margin-right:auto;border-radius:6px;font-size:16px;">${children}</p>`;
          }
          case "transition": {
            return `<p itemID="transition" style="font-family:Courier;margin-bottom:32px; padding:0 40px;color;black;text-align:end;text-transform:uppercase;font-size:18px;">${children}</p>`;
          }
          case "shot": {
            return `<p itemID="shot" style="font-family:Courier;padding:0 40px;margin-bottom:18px;color:black;text-transform:uppercase;font-size:16px;">${children}</p>`;
          }
          case "general": {
            return `<p itemID="general" style="font-family:Courier;margin-bottom:18px;padding:0 40px;color;black;font-size:16px;">${children}</p>`;
          }
          case "paragraph": {
            return `<p style="font-family:Courier;margin-bottom:3px;font-size:16px;">${children}</p>`;
          }
          default:
            return children;
        }
      }
    };

    const value = serialize(node);

    if (value !== undefined && setTextEditorValue !== undefined)
      setTextEditorValue(value);
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

  return (
    <div
      ref={ref}
      onContextMenu={handleContextMenu}
      onDoubleClick={(e) => {
        setAllCommentsPositions([
          ...AllCommentsPositions,
          { positionX: mouse.x!, positionY: mouse.y!, socket },
        ]);
      }}
      style={{ cursor: "context-menu", maxWidth: `${width! - 1}px` }}
      className="bg-tinted-50/25 w-full mx-auto relative"
    >
      {AllCommentsPositions.map((position, index) => (
        <CreateComment
          key={index}
          positionX={position.positionX}
          positionY={position.positionY}
          socket={position.socket}
        />
      ))}

      <Slate onChange={handleChangeEditor} editor={editor} value={initialValue}>
        <Editable
          onKeyUp={() => {
            const [selectedNode] = Editor.nodes(editor, {
              match: (n) => Editor.isBlock(editor, n),
              mode: "lowest",
            });
            socket.emit("writeTextInScript", selectedNode);
          }}
          onKeyDown={handleKeyDown}
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
