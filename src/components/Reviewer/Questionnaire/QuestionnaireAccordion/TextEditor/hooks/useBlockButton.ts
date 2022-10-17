import type { TypographyProps } from "@mui/material";
import { CustomElement } from "interfaces/slate";
import {
  type BaseEditor,
  Editor,
  Transforms,
  Node,
  Element as SlateElement,
} from "slate";
import { useSlate } from "slate-react";

const LIST_TYPES = ["numberList", "bulletList"];

const useBlockButton = () => {
  const mainEditor = useSlate();
  const isBlockActive = (
    editor: BaseEditor,
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

  const toggleBlock = (
    editor: BaseEditor,
    format: CustomElement["type"],
    variant?: TypographyProps["variant"]
  ) => {
    const isActive = isBlockActive(editor, format, variant);
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
      type: isActive ? "typography" : isList ? "listItem" : format,
      variant: isActive ? "body1" : variant,
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
