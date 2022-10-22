import { useMediaQuery } from "@mui/material";
import { MouseEvent, useState } from "react";

const useResize = () => {
  const matches = useMediaQuery("(max-width:650px)");
  const [size, setSize] = useState({
    width: matches ? 150 : 500,
    height: matches ? 150 : 500,
  });
  const [resizing, setResizing] = useState(false);

  const onMouseDown = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    setResizing(true);
  };

  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    setResizing(false);
  };

  const onMouseMove = (event: MouseEvent<Document>) => {
    setSize((currentSize) => ({
      width: currentSize.width + event.movementX,
      height: currentSize.height + event.movementY,
    }));
  };

  return { size, onMouseDown, resizing };
};

export default useResize;
