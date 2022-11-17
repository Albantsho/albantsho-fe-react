import escapeHTML from "escape-html";
import { CustomElement } from "interfaces/slate";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
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
  setTextEditorValue?: Dispatch<SetStateAction<string>>;
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
        if (node.bold) {
          string = `<strong style={{color:${
            node.color ? node.color : "black"
          }}} >${string}</strong>`;
        } else if (node.underline) {
          string = `<u style={{color:${
            node.color ? node.color : "black"
          }}}>${string}</u>`;
        } else if (node.code) {
          string = `<code style={{color:${
            node.color ? node.color : "black"
          }}}>${string}</code>`;
        } else if (node.italic) {
          string = `<em style={{color:${
            node.color ? node.color : "black"
          }}}>${string}</em>`;
        }
        // else {
        //   string = `<span style={{color:${
        //     node.color ? node.color : "black"
        //   }}>${string}</span>`;
        // }
        return string;
      }
      const children = node.children.map((n) => serialize(n)).join("");
      if (Element.isElement(node)) {
        switch (node.type) {
          case "blockquote":
            return `<blockquote>${children}</blockquote>`;
          case "typography":
            return `<Typography variant={${escapeHTML(
              node.variant
            )}}>${children}</Typography>`;
          case "numberList":
            return `<ol className="list-decimal list-inside">${children}</ol>`;
          case "bulletList":
            return `<ul className="list-disc list-inside">${children}</ul>`;
          case "listItem":
            return `<li>${children}</li>`;
          case "email":
            return `<a underline="always" href={mailto:${escapeHTML(
              node.email
            )}}>${children}</a>`;
          case "link": {
            console.log(children);

            return `<Link underline="always" href={${escapeHTML(
              node.url
            )}}>${children}</Link>`;
          }
          case "table":
            return `<table className="border-collapse flex-1"><tbody>${children}</tbody></table>`;
          case "tableRow":
            return `<tr>${children}</tr>`;
          case "tableCell":
            return `<td className="border-2 rounded-md text-start align-top py-2 px-4 min-w-[200px] max-w-xs">${children.trim()}</td>`;
          case "image":
            return `<img
              alt=""
              src={${escapeHTML(node.url as string)}}
            />`;

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
    <div className="relative border rounded-xl py-4 px-5 sm:px-8 lg:px-4 min-h-[350px] flex flex-col justify-start text-start pb-16 lg:pb-8">
      <Slate onChange={handleChangeEditor} editor={editor} value={initialValue}>
        <DesktopToolbar />
        <EditorDrawer />
        <Editable
          className="isolation-auto -z-0"
          placeholder="Add comment..."
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

// className={`relative flex justify-center rounded-lg min-w-[135px] min-h-[135px] text-gray-300 ${
//   selected
//     ? "shadow-sm border pt-10 border-gray-300 duration-200 ease-in"
//     : "none duration-200 p-1 ease-in"
// }
// ${
//   positionImage === 0
//     ? "mr-auto"
//     : positionImage === 1
//     ? "mx-auto"
//     : "ml-auto"
// }
// `}
