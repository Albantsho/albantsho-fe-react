import { CustomElement } from "interfaces/slate";
import { Dispatch, SetStateAction, useMemo } from "react";
import { createEditor, type Descendant } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { withHistory } from "slate-history";
import DesktopToolbar from "./Toolbars/DesktopToolbar/DesktopToolbar";
import EditorDrawer from "./EditorDrawer/EditorDrawer";
import EditorElement from "./EditorElement/EditorElement";
import EditorLeaf from "./EditorLeaf/EditorLeaf";
import MobileToolbar from "./Toolbars/MobileToolbar/MobileToolbar";
import withNewFeatures from "./plugins/withNewFeatures";
import useTextEditor from "./useTextEditor";

const initialValue: CustomElement[] = [
  { type: "typography", variant: "body1", children: [{ text: "" }] },
];

interface IProps {
  setTextEditorValue: Dispatch<SetStateAction<Descendant[] | undefined>>;
}

const TextEditor = ({ setTextEditorValue }: IProps) => {
  const editor = useMemo(
    () => withHistory(withNewFeatures(withReact(createEditor()))),
    []
  );
  const { handleKeyDown } = useTextEditor({ editor });

  const handleEditorValue = (event: Descendant[]) => {
    setTextEditorValue(event);
  };

  return (
    <div className="relative border rounded-xl py-4 px-5 sm:px-8 lg:px-4 min-h-[350px] flex flex-col justify-start text-start pb-16 lg:pb-8">
      <Slate onChange={handleEditorValue} editor={editor} value={initialValue}>
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
