import { Button, ButtonGroup, SvgIcon } from "@mui/material";
import useMarkButton from "@shared/TextEditor/hooks/useMarkButton";
import { useState } from "react";
import { CiAlignCenterV, CiAlignLeft, CiAlignRight } from "react-icons/ci";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { Editor } from "slate";
import {
  ReactEditor,
  useFocused,
  useSelected,
  useSlate,
  type RenderElementProps,
} from "slate-react";
import SetImageSizeModal from "./SetImageSizeModal/SetImageSizeModal";

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
  const [openSetImageSize, setOpenSetImageSize] = useState(false);
  const [imageSize, setImageSize] = useState({
    width: "",
    height: "",
  });
  const [size, setSize] = useState({
    width: "",
    height: "",
  });

  const handleChangeImageSize = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const result = e.target.value.replace(/\D/g, "");
    setImageSize({
      ...imageSize,
      [e.target.name]: result,
    });
  };
  const setImageSizeFunc = () => {
    setSize({ width: imageSize.width, height: imageSize.height });
    handleCloseSetImageSize();
    setImageSize({ width: "", height: "" });
  };
  const handleOpenSetImageSize = () => setOpenSetImageSize(true);
  const handleCloseSetImageSize = () => setOpenSetImageSize(false);
  const handleStartJustifyImage = () => {
    setPositionImage(0);
  };
  const handleCenterJustifyImage = () => {
    setPositionImage(1);
  };
  const handleEndJustifyImage = () => {
    setPositionImage(2);
  };

  if (element.type === "image") {
    return (
      <div {...attributes} className="overflow-auto h-full">
        <div style={{ opacity: 0 }}>{children}</div>
        <div
          style={{
            width: size.width ? `${size.width}px` : "195px",
            height: size.height ? `${size.height}px` : "195px",
          }}
          contentEditable={false}
          className={`relative flex justify-center rounded-lg min-w-[195px] min-h-[195px] max-w-4xl text-gray-300 ${
            selected
              ? "shadow-sm border pt-11 border-gray-300 duration-200 ease-in"
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
          <img className="w-fit h-auto" alt="" src={element.url as string} />
          <ButtonGroup
            color="inherit"
            className={`${
              selected ? "flex" : "hidden"
            } top-1 absolute w-full max-w-[185px]`}
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
            <Button
              onClick={handleOpenSetImageSize}
              startIcon={<SvgIcon component={MdPhotoSizeSelectLarge} />}
            />
          </ButtonGroup>
        </div>
        <SetImageSizeModal
          imageSizeValues={imageSize}
          handleChangeValueImageSize={handleChangeImageSize}
          setImageSizeFunc={setImageSizeFunc}
          handleCloseSetImageSize={handleCloseSetImageSize}
          openSetImageSize={openSetImageSize}
        />
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
