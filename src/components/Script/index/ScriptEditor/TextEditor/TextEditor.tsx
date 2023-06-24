/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CustomElement, IEditor } from "interfaces/slate";
import React, { useMemo } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import { deserializeScriptWithDiv } from "utils/deserialize-script-with-div";
import ChangeFormatMenuList from "../ChangeFormatMenuList/ChangeFormatMenuList";
import EditorElement from "./EditorElement/EditorElement";
import withNewFeatures from "./plugins/withNewFeatures";

import useTextEditor from "./useTextEditor";

interface IProps {
  htmlInitialValue: string;
  width: number | undefined;
  editorSetting: { icons: string };
}

const TextEditor = ({ width, htmlInitialValue, editorSetting }: IProps) => {
  const editor: IEditor = useMemo(
    () => withNewFeatures(withHistory(withReact(createEditor()))),
    []
  );
  const htmlContent = new DOMParser().parseFromString(
    htmlInitialValue,
    "text/html"
  );

  const value = deserializeScriptWithDiv(htmlContent.body);
  const initialValue: CustomElement[] = htmlInitialValue
    ? value
    : [
        {
          type: "page",
          children: [{ type: "heading", children: [{ text: "" }] }],
        },
      ];
  const {
    handleChangeEditor,
    handleCloseContextMenu,
    handleContextMenu,
    handleKeyDown,
    contextMenu,
  } = useTextEditor({
    width,
    editor,
  });

  return (
    <div
      onContextMenu={handleContextMenu}
      style={{ cursor: "context-menu", maxWidth: `${width! - 1}px` }}
      className="bg-tinted-50/25 w-full mx-auto relative"
    >
      <Slate onChange={handleChangeEditor} editor={editor} value={initialValue}>
        <Editable
          onKeyDown={handleKeyDown}
          translate="yes"
          className="isolation-auto -z-0 break-words"
          spellCheck
          renderElement={(props) => (
            <EditorElement editorSetting={editorSetting} {...props} />
          )}
        />
        <ChangeFormatMenuList
          contextMenu={contextMenu}
          handleCloseContextMenu={handleCloseContextMenu}
        />
      </Slate>
    </div>
  );
};

export default React.memo(TextEditor);
