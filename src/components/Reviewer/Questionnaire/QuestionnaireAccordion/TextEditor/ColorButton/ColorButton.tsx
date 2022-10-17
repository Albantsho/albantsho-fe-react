import { IconButton, SvgIcon } from "@mui/material";
import { SketchPicker } from "react-color";
import { RiFontColor } from "react-icons/ri";
import useColorButton from "./useColorButton";

const ColorButton = () => {
  const {
    color,
    colorPickerOpen,
    handleOpenColorPicker,
    handleSelectedColor,
    handleCloseColorPicker,
  } = useColorButton();

  return (
    <div className="relative">
      <IconButton
        disableRipple
        className="hover:bg-inherit"
        onClick={handleOpenColorPicker}
      >
        <SvgIcon component={RiFontColor} />
        <div
          style={{ backgroundColor: `${color}` }}
          className={`w-2 h-2`}
        ></div>
      </IconButton>
      {colorPickerOpen && (
        <div
          onClick={handleCloseColorPicker}
          className="absolute -left-[80px] top-6 p-5 z-10"
        >
          <SketchPicker color={color} onChangeComplete={handleSelectedColor} />
        </div>
      )}
    </div>
  );
};

export default ColorButton;
