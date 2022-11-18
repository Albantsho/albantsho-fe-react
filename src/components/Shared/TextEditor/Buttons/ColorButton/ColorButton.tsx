import { ClickAwayListener, IconButton, SvgIcon } from "@mui/material";
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
    <ClickAwayListener onClickAway={handleCloseColorPicker}>
      <div className="relative">
        <IconButton
          disableRipple
          className="hover:bg-inherit text-primary-700 lg:text-gray-500"
          onClick={handleOpenColorPicker}
        >
          <SvgIcon component={RiFontColor} />
          <div
            style={{ backgroundColor: `${color}` }}
            className="w-2 h-2"
          ></div>
        </IconButton>
        {openColorPicker && (
          <div className="absolute z-10 -left-[110px] -top-7 lg:top-6 p-5">
            <SketchPicker
              color={color}
              onChangeComplete={handleSelectedColor}
            />
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default ColorButton;
