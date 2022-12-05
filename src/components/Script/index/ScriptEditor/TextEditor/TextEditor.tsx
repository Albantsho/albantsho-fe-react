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
            return `<h6 itemID="heading" style="font-family:Curior;font-weight:700;padding:0 40px;font-size:20px;line-height:28px;margin-bottom:25px;color:black;position:relative;width:100%;text-transform:uppercase;">${children}</h6>`;
          }
          case "action": {
            return `<p itemID="action" style="font-family:Curior;width:100%;padding:0 40px;position:relative;color:black;margin-bottom:25px;font-size:16px;">${children}</p>`;
          }
          case "character": {
            return `<p itemID="character" style="font-family:Curior;padding:0 40px;margin-bottom:16px;text-align:start;position:relative;width:60%;text-transform:uppercase;color:black;margin-left:auto;margin-bottom:25px;font-size:16px;">${children}</p>`;
          }
          case "dialogue": {
            return `<p itemID="font-family:Curior;dialogue" style="padding:0 40px;margin-bottom:25px;margin-top:6px;text-align:start;position:relative;width:60%;color:black;margin-left:auto;margin-right:auto;font-size:16px;">${children}</p>`;
          }
          case "parentethical": {
            return `<p itemID="parentethical" style="font-family:Curior;color:black;padding:0 16px;margin-bottom:25px;max-width:40%;width:fit-content;margin-left:auto;margin-right:auto;border-radius:6px;position:relative;font-size:16px;">${children}</p>`;
          }
          case "transition": {
            return `<p itemID="transition" style="font-family:Curior;margin-bottom:25px; padding:0 40px;color;black;position:relative;text-align:end;text-transform:uppercase;font-size:16px;">${children}</p>`;
          }
          case "shot": {
            return `<p itemID="shot" style="font-family:Curior;padding:0 40px;margin-bottom:25px;color:black;position:relative;text-transform:uppercase;font-size:16px;">${children}</p>`;
          }
          case "general": {
            return `<p itemID="font-family:Curior;general" style="margin-bottom:25px;padding:0 40px;color;black;position:relative;font-size:16px;">${children}</p>`;
          }
          case "paragraph": {
            return `<p style="font-family:Curior;margin-bottom:3px;font-size:16px;">${children}</p>`;
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
