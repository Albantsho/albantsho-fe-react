import { Button, ButtonGroup, SvgIcon } from "@mui/material";
import { useState } from "react";
import { CiAlignCenterV, CiAlignLeft, CiAlignRight } from "react-icons/ci";
import {
  ReactEditor,
  useFocused,
  useSelected,
  useSlate,
  type RenderElementProps,
} from "slate-react";

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

  const handleStartJustifyImage = () => setPositionImage(0);
  const handleCenterJustifyImage = () => setPositionImage(1);
  const handleEndJustifyImage = () => setPositionImage(2);

  if (element.type === "image") {
    return (
      <div {...attributes}>
        <div style={{ opacity: 0 }}>{children}</div>
        <div
          contentEditable={false}
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
            style={{
              width: "fit-content",
              height: "fit-content",
            }}
            alt=""
            src={element.url as string}
          />
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
      </div>
    );
  } else {
    return (
      <p style={{ fontSize: "16px" }} {...attributes}>
        {children}
      </p>
    );
  }
};

export default ImageComponent;
