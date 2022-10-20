import { CustomText, IEditor } from "interfaces/slate";
import { KeyboardEvent } from "react";
import { Editor, Range } from "slate";
interface IProps {
  editor: IEditor;
}
interface IToggleMark {
  editor: IEditor;
  format: keyof Omit<CustomText, "text">;
  color?: string;
}

const useTextEditor = ({ editor }: IProps) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.ctrlKey && e.code === "KeyB") {
      e.preventDefault();
      isMarkActive({ editor, format: "bold" });
      toggleMark({ editor, format: "bold" });
    }
    if (e.ctrlKey && e.code === "KeyI") {
      e.preventDefault();
      isMarkActive({ editor, format: "italic" });
      toggleMark({ editor, format: "italic" });
    }
    if (e.ctrlKey && e.code === "KeyU") {
      e.preventDefault();
      isMarkActive({ editor, format: "underline" });
      toggleMark({ editor, format: "underline" });
    }
    if (e.ctrlKey && e.code === "Backquote") {
      e.preventDefault();
      isMarkActive({ editor, format: "code" });
      toggleMark({ editor, format: "code" });
    }

    const beforeTag = Editor.previous(editor, {
      match: (n) => Editor.isBlock(editor, n) && n.type === "table",
    });

    if (e.key === "Backspace") {
      const { selection } = editor;

      if (
        selection &&
        selection.focus.offset === 0 &&
        selection.anchor.offset === 0 &&
        Range.isCollapsed(selection)
      ) {
        if (
          editor.selection?.anchor.path[0] !== null &&
          editor.selection?.anchor.path[0] !== undefined
        ) {
          if (
            beforeTag &&
            editor.selection?.anchor.path[0] - beforeTag?.[1][0] === 1
          ) {
            e.preventDefault();
          }
        }
      }
    }
  };

  const isMarkActive = ({ editor, format }: IToggleMark) => {
    const marks = Editor.marks(editor);

    return marks ? !!marks[format] : false;
  };

  const toggleMark = ({ editor, format, color }: IToggleMark) => {
    const isActive = isMarkActive({ editor, format });

    if (isActive && format !== "color") {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, format === "color" ? color : true);
    }
  };

  return {
    handleKeyDown,
  };
};

export default useTextEditor;
