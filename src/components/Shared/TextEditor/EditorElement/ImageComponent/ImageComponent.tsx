import { Button, ButtonGroup, SvgIcon } from "@mui/material";
import useImageStore from "app/image.store";
import { useState } from "react";
import { CiAlignCenterV, CiAlignLeft, CiAlignRight } from "react-icons/ci";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
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
  const [openSetImageSize, setOpenSetImageSize] = useState(false);
  const [imageSizeValue, setImageSizeValue] = useState({
    width: "",
    height: "",
  });

  const { imagePosition, imageSize, setImagePosition, setImageSize } =
    useImageStore((state) => ({
      imageSize: state.imageSize,
      imagePosition: state.imagePosition,
      setImageSize: state.setImageSize,
      setImagePosition: state.setImagePosition,
    }));

  const handleChangeImageSize = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const result = e.target.value.replace(/\D/g, "");
    setImageSizeValue({
      ...imageSizeValue,
      [e.target.name]: result,
    });
  };
  const setImageSizeFunc = () => {
    setImageSizeValue({
      width: imageSizeValue.width,
      height: imageSizeValue.height,
    });
    setImageSize({
      width: imageSizeValue.width,
      height: imageSizeValue.height,
    });
    handleCloseSetImageSize();
    setImageSizeValue({ width: "", height: "" });
  };
  const handleOpenSetImageSize = () => setOpenSetImageSize(true);
  const handleCloseSetImageSize = () => setOpenSetImageSize(false);
  const handleStartJustifyImage = () => setImagePosition(0);
  const handleCenterJustifyImage = () => setImagePosition(1);
  const handleEndJustifyImage = () => setImagePosition(2);

  if (element.type === "image") {
    return (
      <div {...attributes} className="overflow-auto h-full">
        <div style={{ opacity: 0 }}>{children}</div>
        <div
          style={element.style}
          contentEditable={false}
          className={`relative flex justify-center rounded-lg min-w-[195px] min-h-[195px] max-w-4xl text-gray-300 ${
            selected
              ? "shadow-sm border pt-11 border-gray-300 duration-200 ease-in"
              : "none duration-200 p-1 ease-in"
          }
          ${
            imagePosition === 0
              ? "mr-auto"
              : imagePosition === 1
              ? "mx-auto"
              : imagePosition === 2
              ? "ml-auto"
              : ""
          }
          ${imageSize.width ? `w-[${imageSize.width}px]` : "w-[195px]"}
          ${imageSize.height ? `w-[${imageSize.height}px]` : "h-[195px]"}
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
          imageSizeValues={imageSizeValue}
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
