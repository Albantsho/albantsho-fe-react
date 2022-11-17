import { Dispatch, MutableRefObject, SetStateAction, useMemo } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Slate, Editable, withReact } from "slate-react";
import ChangeFormatMenuList from "../ChangeFormatMenuList/ChangeFormatMenuList";
import EditorElement from "./EditorElement/EditorElement";
import { CustomElement, IEditor } from "interfaces/slate";

const initialValue: CustomElement[] = [
  { type: "paragraph", children: [{ text: "" }] },
];

interface IProps {
  stepLinks: MutableRefObject<HTMLDivElement[]>;
  setContextMenu: Dispatch<
    SetStateAction<{
      mouseX: number;
      mouseY: number;
    } | null>
  >;
  contextMenu: {
    mouseX: number;
    mouseY: number;
  } | null;
}

const TextEditor = ({ setContextMenu, contextMenu, stepLinks }: IProps) => {
  const editor: IEditor = useMemo(
    () => withHistory(withReact(createEditor())),
    []
  );

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

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      style={{ cursor: "context-menu" }}
      className="bg-white w-full max-w-3xl mx-auto mt-10 p-14"
      ref={(elm: HTMLDivElement) =>
        (stepLinks.current = [...stepLinks.current, elm])
      }
    >
      <Slate editor={editor} value={initialValue}>
        <Editable
          className="isolation-auto -z-0"
          spellCheck
          autoFocus
          renderElement={(props) => <EditorElement {...props} />}
        />
        <ChangeFormatMenuList
          contextMenu={contextMenu}
          handleCloseContextMenu={handleCloseContextMenu}
        />
      </Slate>
    </div>
  );
};

export default TextEditor;
