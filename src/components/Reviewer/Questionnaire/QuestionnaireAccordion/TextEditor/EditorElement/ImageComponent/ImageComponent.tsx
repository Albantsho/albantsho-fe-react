import { IconButton, SvgIcon, Typography } from "@mui/material";
import { IoIosResize } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useResizeDetector } from "react-resize-detector";
import { Transforms } from "slate";
import {
  ReactEditor,
  useFocused,
  useSelected,
  useSlate,
  type RenderElementProps,
} from "slate-react";
import useResize from "./useResize";

const ImageComponent = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  const editor = useSlate();
  const path = ReactEditor.findPath(editor as any, element);
  const selected = useSelected();
  const focused = useFocused();
  const { ref, width } = useResizeDetector();
  const { size, onMouseDown } = useResize();

  const handleRemoveImage = () => {
    Transforms.removeNodes(editor, { at: path });
  };

  if (element.type === "image") {
    return (
      <div {...attributes}>
        <div style={{ opacity: 0 }}>{children}</div>
        <div ref={ref}>
          <div
            contentEditable={false}
            style={{
              width: `${size.width}px`,
              height: `${size.height}px`,
              maxWidth: `${width}px`,
            }}
            className={`relative  rounded-lg  min-w-[80px] min-h-[80px] ${
              selected && focused
                ? "shadow-sm border border-gray-300 p-4 duration-200 ease-in"
                : "none duration-200 ease-in"
            }`}
          >
            <img className="w-full h-full" alt="" src={element.url} />
            <button
              onMouseDown={onMouseDown}
              className={`${
                selected ? "flex" : "hidden"
              } bottom-0 -right-2 absolute bg-transparent cursor-nwse-resize`}
            >
              <IoIosResize
                style={{ rotate: "90deg", fontSize: "20px" }}
                fontSize="16px"
              />
            </button>
            <IconButton
              onClick={handleRemoveImage}
              className={`${
                selected ? "flex" : "hidden"
              } top-1 left-1 absolute`}
            >
              <SvgIcon fontSize="small" component={RiDeleteBin6Line} />
            </IconButton>
          </div>
        </div>
      </div>
    );
  } else {
    return <Typography {...attributes}>{children}</Typography>;
  }
};

export default ImageComponent;
