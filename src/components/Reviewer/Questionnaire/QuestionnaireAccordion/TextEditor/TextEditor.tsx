import { CustomElement } from "interfaces/slate";
import { useMemo } from "react";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { withHistory } from "slate-history";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import EditorDrawer from "./EditorDrawer/EditorDrawer";
import EditorElement from "./EditorElement/EditorElement";
import EditorLeaf from "./EditorLeaf/EditorLeaf";
import MobileMenu from "./MobileMenu/MobileMenu";
import withNewFeatures from "./plugins/withNewFeatures";
import useTextEditor from "./useTextEditor";

const initialValue: CustomElement[] = [
  { type: "typography", variant: "body1", children: [{ text: "" }] },
];

const TextEditor = () => {
  const editor = useMemo(
    () => withHistory(withNewFeatures(withReact(createEditor()))),
    []
  );

  const { handleKeyDown } = useTextEditor({ editor });

  return (
    <div className="relative border rounded-xl py-4 px-8 lg:px-4 min-h-[350px] flex flex-col justify-start text-start pb-16 overflow-hidden">
      <Slate editor={editor} value={initialValue}>
        <DesktopMenu />
        <EditorDrawer />
        <Editable
          placeholder="Add comment..."
          spellCheck
          autoFocus
          onKeyDown={handleKeyDown}
          renderElement={(props) => <EditorElement {...props} />}
          renderLeaf={(props) => <EditorLeaf {...props} />}
        />
        <MobileMenu />
      </Slate>
    </div>
  );
};

export default TextEditor;
