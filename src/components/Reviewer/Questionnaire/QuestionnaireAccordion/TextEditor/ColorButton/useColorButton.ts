import { useEffect, useState } from "react";
import type { ColorResult } from "react-color";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import useMarkButton from "../hooks/useMarkButton";

const useColorButton = () => {
  const [color, setColor] = useState("#000");
  const { toggleMark } = useMarkButton();
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const editor = useSlate();

  const marks = Editor.marks(editor);

  useEffect(() => {
    if (marks?.color) setColor(marks?.color);
    else {
      setColor("#000");
    }
  }, [marks?.color]);

  const handleSelectedColor = (color: ColorResult) => {
    setColor(color.hex);
    toggleMark({ editor, format: "color", color: color.hex });
  };

  const handleOpenColorPicker = () =>
    setColorPickerOpen((prevState) => !prevState);

  const handleCloseColorPicker = () => {
    if (color !== "#000") setColorPickerOpen(false);
  };

  return {
    color,
    colorPickerOpen,
    handleSelectedColor,
    handleOpenColorPicker,
    handleCloseColorPicker,
  };
};

export default useColorButton;
