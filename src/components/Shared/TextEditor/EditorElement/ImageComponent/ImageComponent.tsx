import {
  Button,
  ButtonGroup,
  IconButton,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CiAlignLeft, CiAlignRight, CiAlignCenterV } from "react-icons/ci";
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
import { Resizable } from "re-resizable";

const ImageComponent = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  const editor = useSlate();
  const path = ReactEditor.findPath(editor, element);
  const selected = useSelected();
  const focused = useFocused();
  const [positionImage, setPositionImage] = useState(0);
  const { ref, width } = useResizeDetector();
  const { size, onMouseDown } = useResize();

  const handleStartJustifyImage = () => setPositionImage(0);
  const handleCenterJustifyImage = () => setPositionImage(1);
  const handleEndJustifyImage = () => setPositionImage(2);

  if (element.type === "image") {
    return (
      <div {...attributes}>
        <div style={{ opacity: 0 }}>{children}</div>
        {/* <div ref={ref}> */}
        <div
          contentEditable={false}
          style={{
            // width: `${size.width}px`,
            // height: `${size.height}px`,
            // maxWidth: `${width}px`,
            resize: "both",
            overflow: "auto",
          }}
          className={`relative flex justify-center rounded-lg min-w-[135px] min-h-[135px] text-gray-300 ${
            selected
              ? "shadow-sm border pt-10 border-gray-300 duration-200 ease-in"
              : "none duration-200 p-1 ease-in"
          }
          ${
            positionImage === 0
              ? "mr-auto"
              : positionImage === 1
              ? "mx-auto"
              : "ml-auto"
          }
          `}
        >
          <img
            style={{ resize: "both", overflow: "auto" }}
            className="w-fit h-fit"
            alt=""
            src={element.url as string}
          />
          {/* <button
              onMouseDown={onMouseDown}
              className={`${
                selected ? "flex" : "hidden"
              } bottom-0 -right-2 absolute bg-transparent cursor-nwse-resize`}
            >
              <IoIosResize
                style={{ rotate: "90deg", fontSize: "20px" }}
                fontSize="16px"
              />
            </button> */}
          <ButtonGroup
            color="inherit"
            className={`${
              selected ? "flex" : "hidden"
            } top-0 absolute w-full max-w-[135px]`}
          >
            <Button
              onClick={handleStartJustifyImage}
              startIcon={<SvgIcon component={CiAlignLeft} />}
            />
            <Button
              onClick={handleCenterJustifyImage}
              startIcon={<SvgIcon component={CiAlignCenterV} />}
            />
            <Button
              onClick={handleEndJustifyImage}
              startIcon={<SvgIcon component={CiAlignRight} />}
            />
          </ButtonGroup>
        </div>
        {/* </div> */}
      </div>
    );
  } else {
    return <Typography {...attributes}>{children}</Typography>;
  }
};

export default ImageComponent;
