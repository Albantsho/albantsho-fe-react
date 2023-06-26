import { IEditor } from "interfaces/slate";
import { useState } from "react";
import { Transforms, type Descendant } from "slate";
import useScriptValueStore from "store/scriptValue.store";
import { serializeWithDiv } from "utils/serialize-slate";
import useBlockButton from "./hooks/useBlockbutton";

interface IProps {
  width: number | undefined;
  editor: IEditor;
}

const useTextEditor = ({ width, editor }: IProps) => {
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);
  const { isBlockActive } = useBlockButton();
  const { setScriptValue } = useScriptValueStore((state) => ({
    setScriptValue: state.setScriptValue,
  }));

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
    const node = { children: element };
    const value = serializeWithDiv(node);
    if (value !== undefined) {
      setScriptValue(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const isActiveParagraph = isBlockActive(editor, "paragraph");
    if (isActiveParagraph && e.code !== "Backspace") {
      e.preventDefault();
      setContextMenu(
        contextMenu === null
          ? {
            mouseX: window.innerWidth - width!,
            mouseY: 400,
          }
          : null
      );
    }
    if (e.code === "Enter") {
      const isActiveHeading = isBlockActive(editor, "heading");
      const isActiveCharacter = isBlockActive(editor, "character");
      const isActiveDialogue = isBlockActive(editor, "dialogue");
      const isActiveParentethical = isBlockActive(editor, "parentethical");
      const isActiveTransition = isBlockActive(editor, "transition");
      const isActiveShot = isBlockActive(editor, "shot");
      const isActiveGeneral = isBlockActive(editor, "general");
      const isActiveAction = isBlockActive(editor, "action");
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
      } else {
        return;
      }
    }
  };

  return {
    handleChangeEditor,
    handleCloseContextMenu,
    handleContextMenu,
    handleKeyDown,
    contextMenu
  };
};

export default useTextEditor;
