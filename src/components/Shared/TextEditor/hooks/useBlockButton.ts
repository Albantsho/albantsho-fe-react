import { CustomElement, IEditor } from "interfaces/slate";
import { Editor, Element as SlateElement, Transforms } from "slate";
import { useSlate } from "slate-react";

const LIST_TYPES = ["numberList", "bulletList"];

const useBlockButton = () => {
  const mainEditor = useSlate();

  const isBlockActive = (editor: IEditor, format: CustomElement["type"]) => {
    const { selection } = editor;
    if (!selection) return false;

    const [match] = Array.from(
      Editor.nodes(editor, {
        at: Editor.unhangRange(editor, selection),
        match: (n) => {
          return (
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            n.type === format
          );
        },
      })
    );

    return !!match;
  };

  const toggleBlock = (editor: IEditor, format: CustomElement["type"]) => {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);

    const [table] = Editor.nodes(mainEditor, {
      match: (n) => Editor.isBlock(mainEditor, n) && n.type === "table",
    });

    if (table) return;

    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        LIST_TYPES.includes(n.type),
      split: true,
    });

    Transforms.setNodes<SlateElement>(editor, {
      type: isActive ? "paragraph" : isList ? "listItem" : format,
    });

    if (!isActive && isList) {
      const block = {
        type: format as "bulletList" | "numberList",
        children: [],
      };
      Transforms.wrapNodes(editor, block);
    }
  };

  return { toggleBlock, isBlockActive };
};

export default useBlockButton;
