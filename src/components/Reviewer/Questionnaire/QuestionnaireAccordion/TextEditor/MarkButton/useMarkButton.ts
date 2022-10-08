import { CustomText } from "interfaces/slate";
import { type BaseEditor, Editor } from "slate";

interface IToggleMark {
  editor: BaseEditor;
  format: keyof Omit<CustomText, "text">;
}

const useMarkButton = () => {
  const isMarkActive = ({ editor, format }: IToggleMark) => {
    const marks = Editor.marks(editor);

    return marks ? marks[format] === true : false;
  };

  const toggleMark = ({ editor, format }: IToggleMark) => {
    const isActive = isMarkActive({ editor, format });

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };
  return { isMarkActive, toggleMark };
};

export default useMarkButton;
