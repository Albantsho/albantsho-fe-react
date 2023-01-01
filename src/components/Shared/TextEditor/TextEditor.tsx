import { CustomElement } from "interfaces/slate";
import { useMemo } from "react";
import { createEditor, type Descendant } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import { serializeRichTextEditorValue } from "utils/serialize-slate";
import EditorDrawer from "./EditorDrawer/EditorDrawer";
import EditorElement from "./EditorElement/EditorElement";
import EditorLeaf from "./EditorLeaf/EditorLeaf";
import withNewFeatures from "./plugins/withNewFeatures";
import DesktopToolbar from "./Toolbars/DesktopToolbar/DesktopToolbar";
import MobileToolbar from "./Toolbars/MobileToolbar/MobileToolbar";
import useTextEditor from "./useTextEditor";

interface IProps {
  textEditorValue?: React.MutableRefObject<string>;
  initialValue: CustomElement[];
  editorValue?: (value: string) => void;
}

const TextEditor = ({ textEditorValue, initialValue, editorValue }: IProps) => {
  const editor = useMemo(
    () => withHistory(withNewFeatures(withReact(createEditor()))),
    []
  );
  const { handleKeyDown } = useTextEditor({ editor });

  const handleChangeEditor = (element: Descendant[]) => {
    const node = { children: element };

    const value = serializeRichTextEditorValue(node);

    if (value !== undefined && textEditorValue !== undefined)
      textEditorValue.current = value;
    if (value !== undefined && editorValue !== undefined) editorValue(value);
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
