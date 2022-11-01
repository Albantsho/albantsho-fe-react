import { ButtonGroup, Tooltip, IconButton, SvgIcon } from "@mui/material";
import { CustomElement, IEditor } from "interfaces/slate";
import { useMemo, useState } from "react";
import { RiFileUserLine } from "react-icons/ri";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import ChangeFormatMenuList from "../ChangeFormatMenuList/ChangeFormatMenuList";
import EditorElement from "./EditorElement/EditorElement";
import BookMarkIcon from "../assets/book-mark.svg";

const initialValue: CustomElement[] = [
  { type: "typography", variant: "body1", children: [{ text: "" }] },
];

const TextEditor = () => {
  const editor: IEditor = useMemo(
    () => withHistory(withReact(createEditor())),
    []
  );
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

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
    <div className="relative">
      <ButtonGroup className="absolute flex flex-col -right-14 top-10">
        <Tooltip
          classes={{
            tooltip: "bg-black",
            tooltipPlacementLeft: "bg-black",
          }}
          title="Act Structure"
          placement="left"
        >
          <IconButton
            disableRipple
            className="bg-white text-primary-700 rounded-none w-12 h-12"
          >
            <RiFileUserLine />
          </IconButton>
        </Tooltip>
        <Tooltip
          classes={{
            tooltip: "bg-black",
            tooltipPlacementLeft: "bg-black",
          }}
          title="Character Bible"
          placement="left"
        >
          <IconButton
            disableRipple
            className="bg-white text-primary-700 rounded-none w-12 h-12"
          >
            <SvgIcon inheritViewBox component={BookMarkIcon} />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
      <div
        onContextMenu={handleContextMenu}
        style={{ cursor: "context-menu" }}
        className="bg-white w-full max-w-3xl mx-auto mt-10 p-14"
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
    </div>
  );
};

export default TextEditor;
