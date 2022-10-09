import { IconButton, SvgIcon } from "@mui/material";
import { useEffect, useState } from "react";
import { type ColorResult, SketchPicker } from "react-color";
import { RiFontColor } from "react-icons/ri";
import { useSlate } from "slate-react";
import useMarkButton from "../hooks/useMarkButton/useMarkButton";

const ColorButton = () => {
  const [color, setColor] = useState("#000");
  const { toggleMark } = useMarkButton();
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const editor = useSlate();

  // useEffect(() => {
  //   const marks = editor.marks;
  //   console.log(
  //     "🚀 ~ file: ColorButton.tsx ~ line 16 ~ useEffect ~ marks",
  //     marks
  //   );
  //   if (editor.marks) {
  //     setColor(marks?.color);
  //   }
  // }, [editor.marks]);

  const handleColor = (color: ColorResult) => {
    setColor(color.hex);
    toggleMark({ editor, format: "color", color: color.hex });
  };
  const handleClose = () => {
    setColorPickerOpen(false);
  };

  const handleOpenColorPicker = () => {
    setColorPickerOpen((prevState) => !prevState);
  };

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
        // <Menu>
        //   <MenuItem onClick={handleClose}>
        <div className="absolute -left-[80px] top-4 p-5 z-10">
          <SketchPicker
            onSwatchHover={handleClose}
            color={color}
            onChangeComplete={handleColor}
          />
        </div>
        //   </MenuItem>
        // </Menu>
      )}
    </div>
  );
};

export default ColorButton;
