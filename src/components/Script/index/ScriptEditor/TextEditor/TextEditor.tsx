import escapeHTML from "escape-html";
import { CustomElement, IEditor } from "interfaces/slate";
import { useMemo } from "react";
import { createEditor, Element, Text, type Descendant } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import ChangeFormatMenuList from "../ChangeFormatMenuList/ChangeFormatMenuList";
import EditorElement from "./EditorElement/EditorElement";
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

  return (
    <div
      onContextMenu={handleContextMenu}
      style={{ cursor: "context-menu", maxWidth: `${width! - 1}px` }}
      className="bg-tinted-50/25 w-full mx-auto"
    >
      <Slate onChange={handleChangeEditor} editor={editor} value={initialValue}>
        <Editable
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
