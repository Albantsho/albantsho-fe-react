import { useState } from "react";
import type { ColorResult } from "react-color";
import { useSlate } from "slate-react";
import useMarkButton from "../hooks/useMarkButton";

const useColorButton = () => {
  const [color, setColor] = useState("#000");
  const { toggleMark } = useMarkButton();
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const editor = useSlate();

  const handleSelectedColor = (color: ColorResult) => {
    setColor(color.hex);
    toggleMark({ editor, format: "color", color: color.hex });
  };

  const handleOpenColorPicker = () => {
    setColorPickerOpen((prevState) => !prevState);
  };
  return { color, colorPickerOpen, handleSelectedColor, handleOpenColorPicker };
};

export default useColorButton;
