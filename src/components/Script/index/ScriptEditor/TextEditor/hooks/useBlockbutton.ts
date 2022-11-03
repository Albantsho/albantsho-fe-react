import type { TypographyProps } from "@mui/material";
import { CustomElement, IEditor } from "interfaces/slate";
import { Editor, Element as SlateElement, Transforms } from "slate";

const LIST_TYPES = ["action"];

const useBlockButton = () => {
  const isBlockActive = (
    editor: IEditor,
    format: CustomElement["type"],
    variant?: TypographyProps["variant"]
  ) => {
    const { selection } = editor;
    if (!selection) return false;

    const [match] = Array.from(
      Editor.nodes(editor, {
        at: Editor.unhangRange(editor, selection),
        match: (n) => {
          if (variant) {
            return (
              !Editor.isEditor(n) &&
              SlateElement.isElement(n) &&
              n.type === "typography" &&
              n.variant === variant
            );
          }
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

    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        LIST_TYPES.includes(n.type),
      split: true,
    });

    Transforms.setNodes<SlateElement>(editor, {
      type: isActive ? "typography" : isList ? "typography" : format,
    });

    if (!isActive && isList) {
      const block = {
        type: format as "action",
        children: [],
      };
      Transforms.wrapNodes(editor, block);
    }
  };

  return { toggleBlock, isBlockActive };
};

export default useBlockButton;