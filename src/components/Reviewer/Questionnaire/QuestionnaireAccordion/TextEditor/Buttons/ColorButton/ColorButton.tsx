import { IconButton, SvgIcon } from "@mui/material";
import { SketchPicker } from "react-color";
import { RiFontColor } from "react-icons/ri";
import useColorButton from "./useColorButton";

const ColorButton = () => {
  const {
    color,
    openColorPicker,
    handleOpenColorPicker,
    handleSelectedColor,
    handleCloseColorPicker,
  } = useColorButton();

  return (
    <div className="relative">
      <IconButton
        disableRipple
        className="hover:bg-inherit text-primary-700 lg:text-gray-500"
        onClick={handleOpenColorPicker}
      >
        <SvgIcon component={RiFontColor} />
        <div style={{ backgroundColor: `${color}` }} className="w-2 h-2"></div>
      </IconButton>
      {openColorPicker && (
        <div
          onClick={handleCloseColorPicker}
          className="absolute -left-[100px] top-6 p-5 z-10"
        >
          <SketchPicker color={color} onChangeComplete={handleSelectedColor} />
        </div>
      )}
    </div>
  );
};

export default ColorButton;
