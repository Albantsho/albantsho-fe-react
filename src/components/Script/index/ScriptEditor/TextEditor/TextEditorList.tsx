import { ButtonGroup, IconButton, SvgIcon, Tooltip } from "@mui/material";

import { useEffect, useRef, useState } from "react";
import { RiFileUserLine } from "react-icons/ri";
import { useResizeDetector } from "react-resize-detector";
import BookMarkIcon from "../assets/book-mark.svg";
import TextEditor from "./TextEditor";

const TextEditorList = () => {
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);
  const { ref, height } = useResizeDetector();

  const [numberOfPage, setNumberOfPage] = useState(1);
  const stepLinks = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (stepLinks.current[stepLinks.current.length - 1].clientHeight >= 765) {
      setNumberOfPage((prevState) => prevState + 1);
    }
  }, [height]);

  return (
    <div ref={ref} className="relative">
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
      {Array.from(new Array(numberOfPage)).map((_, i) => (
        <TextEditor
          contextMenu={contextMenu}
          setContextMenu={setContextMenu}
          stepLinks={stepLinks}
          key={i}
        />
      ))}
    </div>
  );
};

export default TextEditorList;
