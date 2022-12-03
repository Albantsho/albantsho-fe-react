import { ButtonGroup, IconButton, SvgIcon, Tooltip } from "@mui/material";

import { useState } from "react";
import { RiFileUserLine } from "react-icons/ri";
import { useResizeDetector } from "react-resize-detector";
import BookMarkIcon from "../assets/book-mark.svg";
import TextEditor from "./TextEditor";

interface IProps {
  setTextEditorValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
}
const TextEditorList = ({ setTextEditorValue }: IProps) => {
  const { ref, width } = useResizeDetector();
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  return (
    <div ref={ref} className="relative">
      <ButtonGroup className="absolute ml-auto hidden xl:flex w-min flex-col -right-16 top-10">
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
      <TextEditor
        width={width}
        setTextEditorValue={setTextEditorValue}
        contextMenu={contextMenu}
        setContextMenu={setContextMenu}
      />
    </div>
  );
};

export default TextEditorList;
