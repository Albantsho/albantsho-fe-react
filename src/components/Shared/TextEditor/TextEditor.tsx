import escapeHTML from "escape-html";
import { CustomElement } from "interfaces/slate";
import { Dispatch, SetStateAction, useMemo } from "react";
import { createEditor, Element, Text, type Descendant } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import EditorDrawer from "./EditorDrawer/EditorDrawer";
import EditorElement from "./EditorElement/EditorElement";
import EditorLeaf from "./EditorLeaf/EditorLeaf";
import withNewFeatures from "./plugins/withNewFeatures";
import DesktopToolbar from "./Toolbars/DesktopToolbar/DesktopToolbar";
import MobileToolbar from "./Toolbars/MobileToolbar/MobileToolbar";
import useTextEditor from "./useTextEditor";

interface IProps {
  setTextEditorValue?: Dispatch<SetStateAction<string | undefined>>;
  initialValue: CustomElement[];
}

interface INode {
  children: Descendant[];
}

const TextEditor = ({ setTextEditorValue, initialValue }: IProps) => {
  const editor = useMemo(
    () => withHistory(withNewFeatures(withReact(createEditor()))),
    []
  );
  const { handleKeyDown } = useTextEditor({ editor });

  const handleChangeEditor = (element: Descendant[]) => {
    const node = { children: element };
    const serialize = (node: INode | Descendant): string | undefined => {
      if (Text.isText(node)) {
        let string = escapeHTML(node.text);
        if (node.bold && node.underline && node.italic && node.code) {
          string = `<code style="color:${node.color};"><u><em><strong>${string}</strong></em></u></code>`;
        } else if (node.bold && node.underline && node.italic) {
          string = `<u style="color:${node.color};"><em><strong>${string}</strong></em></u>`;
        } else if (node.bold && node.underline && node.code) {
          string = `<code style="color:${node.color};"><u><strong>${string}</strong></u></code>`;
        } else if (node.bold && node.italic && node.code) {
          string = `<code style="color:${node.color};"><em><strong>${string}</strong></em></code>`;
        } else if (node.underline && node.italic && node.code) {
          string = `<code style="color:${node.color};"><u><em>${string}</em></u></code>`;
        } else if (node.underline && node.code) {
          string = `<code style="color:${node.color};"><u>${string}</u></code>`;
        } else if (node.italic && node.code) {
          string = `<code style="color:${node.color};"><em>${string}</em></code>`;
        } else if (node.bold && node.code) {
          string = `<code style="color:${node.color};"><strong>${string}</strong></code>`;
        } else if (node.italic && node.underline) {
          string = `<u style="color:${node.color};"><em>${string}</em></u>`;
        } else if (node.bold && node.underline) {
          string = `<u style="color:${node.color};"><strong>${string}</strong></u>`;
        } else if (node.bold && node.italic) {
          string = `<em style="color:${node.color};"><strong>${string}</strong></em>`;
        } else if (node.bold) {
          string = `<strong style="color:${node.color};">${string}</strong>`;
        } else if (node.underline) {
          string = `<u style="color:${node.color};">${string}</u>`;
        } else if (node.code) {
          string = `<code style="color:${node.color};">${string}</code>`;
        } else if (node.italic) {
          string = `<em style="color:${node.color};">${string}</em>`;
        }

        return string;
      }

      const children = node.children.map((n) => serialize(n)).join("");
      if (Element.isElement(node)) {
        switch (node.type) {
          case "blockquote": {
            const color = node.children.map((node) => node.color);
            return `<blockquote style="border-left-width:4px;padding:6px 2px;border-radius: 2px;color:${color[0]};">${children}</blockquote>`;
          }
          case "headOne": {
            const color = node.children.map((node) => node.color);
            return `<h1 style="font-size:36px;color:${color[0]};">${children}</h1>`;
          }
          case "headTwo": {
            const color = node.children.map((node) => node.color);
            return `<h2 style="font-size:30px;color:${color[0]};">${children}</h2>`;
          }
          case "headThree": {
            const color = node.children.map((node) => node.color);
            return `<h3 style="font-size:26px;color:${color[0]};">${children}</h3>`;
          }
          case "headFour": {
            const color = node.children.map((node) => node.color);
            return `<h4 style="font-size:24px;color:${color[0]};">${children}</h4>`;
          }
          case "headFive": {
            const color = node.children.map((node) => node.color);
            return `<h5 style="font-size:22px;color:${color[0]};">${children}</h5>`;
          }
          case "headSix": {
            const color = node.children.map((node) => node.color);
            return `<h6 style="font-size:20px;color:${color[0]};">${children}</h6>`;
          }
          case "paragraph": {
            const color = node.children.map((node) => node.color);
            return `<p style="font-size:16px;color:${color[0]};">${children}</p>`;
          }
          case "numberList": {
            return `<ol style="list-style-type:decimal;list-style-position:inside;">${children}</ol>`;
          }
          case "bulletList":
            return `<ul style="list-style-type:disc;list-style-position:inside;">${children}</ul>`;
          case "listItem": {
            const color = node.children.map((node) => node.color);
            return `<li style="color:${color};" >${children}</li>`;
          }
          case "email": {
            const color = node.children.map((node) => node.color);
            return `<a style="text-decoration-line:underline;text-decoration-color:${color};color:${color};" href="mailto:${escapeHTML(
              node.email
            )}">${children}</a>`;
          }
          case "link": {
            const color = node.children.map((node) => node.color);
            return `<a style="text-decoration-line:underline;text-decoration-color:${color};color:${color};" href="${escapeHTML(
              node.url
            )}">${children}</a>`;
          }
          case "table": {
            return `<table style="border-collapse:collapse;flex:1 1 0%;"><tbody>${children}</tbody></table>`;
          }
          case "tableRow": {
            return `<tr>${children}</tr>`;
          }
          case "tableCell": {
            const color = node.children.map((node) => node.color);
            return `<td style="border-width:2px;border-radius:6px;text-align:start;vertical-align:top;padding:8px 16px;min-width:200px;max-width:320px;color:${color[0]};">${children}</td>`;
          }
          case "image": {
            return `<img style="width:fit-content;height:auto;"
            alt="" src="${escapeHTML(node.url as string)}" />`;
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
    <div className="relative border rounded-xl py-4 px-5 sm:px-8 lg:px-6 min-h-[350px] flex flex-col justify-start text-start pb-16 lg:pb-8">
      <Slate onChange={handleChangeEditor} editor={editor} value={initialValue}>
        <DesktopToolbar />
        <EditorDrawer />
        <Editable
          className="isolation-auto -z-0"
          placeholder="Add text..."
          spellCheck
          autoFocus
          onKeyDown={handleKeyDown}
          renderElement={(props) => <EditorElement {...props} />}
          renderLeaf={(props) => <EditorLeaf {...props} />}
        />
        <MobileToolbar />
      </Slate>
    </div>
  );
};

export default TextEditor;
