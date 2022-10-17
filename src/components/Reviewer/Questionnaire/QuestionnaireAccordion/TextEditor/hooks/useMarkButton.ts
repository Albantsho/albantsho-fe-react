import { CustomText } from "interfaces/slate";
import { type BaseEditor, Editor } from "slate";

interface IToggleMark {
  editor: BaseEditor;
  format: keyof Omit<CustomText, "text">;
  color?: string;
}

const useMarkButton = () => {
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
  return { isMarkActive, toggleMark };
};

export default useMarkButton;
