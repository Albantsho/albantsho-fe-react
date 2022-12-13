import escapeHTML from "escape-html";
import { CustomElement, IEditor } from "interfaces/slate";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import {
  createEditor,
  Element,
  Text,
  Transforms,
  type Descendant,
} from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import { io } from "socket.io-client";
import ChangeFormatMenuList from "../ChangeFormatMenuList/ChangeFormatMenuList";
import EditorElement from "./EditorElement/EditorElement";
import useBlockButton from "./hooks/useBlockbutton";
import withNewFeatures from "./plugins/withNewFeatures";

const initialValue: CustomElement[] = [
  {
    type: "page",
    children: [{ type: "heading", children: [{ text: "" }] }],
  },
];

interface IProps {
  setTextEditorValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
  setContextMenu: React.Dispatch<
    React.SetStateAction<{
      mouseX: number;
      mouseY: number;
    } | null>
  >;
  contextMenu: {
    mouseX: number;
    mouseY: number;
  } | null;
  width: number | undefined;
}

interface INode {
  children: Descendant[];
}

const TextEditor = ({
  setContextMenu,
  contextMenu,
  setTextEditorValue,
  width,
}: IProps) => {
  const editor: IEditor = useMemo(
    () => withNewFeatures(withHistory(withReact(createEditor()))),
    []
  );
  const { isBlockActive } = useBlockButton();
  const socket = io(process.env.NEXT_PUBLIC_API_BASE_URL);
  const { query } = useRouter();
  // socket.on("createRoom", () => {
  //   console.log(socket.id);
  // });

  // useEffect(() => {
  //   socket.on("createRoom", () => {
  //     console.log(socket.id);
  //   });
  // }, []);
  // useEffect(() => {
  //   socket.emit("createRoom", query.id);
  // }, []);
  useEffect(() => {
    try {
      socket.on("connect", () => {
        console.log(socket.id);
      });
      socket.on("error", () => {
        console.log(socket.id);
      });
    } catch (error) {
      console.log(error);
    }
  }, [socket]);

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
    console.log(element);

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
      } else {
        return;
      }
    }
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      style={{ cursor: "context-menu", maxWidth: `${width! - 1}px` }}
      className="bg-tinted-50/25 w-full mx-auto"
    >
      <Slate onChange={handleChangeEditor} editor={editor} value={initialValue}>
        <Editable
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
