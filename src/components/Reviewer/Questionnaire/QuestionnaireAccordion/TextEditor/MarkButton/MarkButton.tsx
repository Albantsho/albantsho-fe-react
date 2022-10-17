import { IconButton, SvgIcon } from "@mui/material";
import { CustomText } from "interfaces/slate";
import type { IconType } from "react-icons";
import { useSlate } from "slate-react";
import useMarkButton from "../hooks/useMarkButton";

interface IProps {
  icon: IconType;
  format: keyof Omit<CustomText, "text">;
}

const MarkButton = ({ icon, format }: IProps) => {
  const editor = useSlate();
  const { isMarkActive, toggleMark } = useMarkButton();
  const isActive = isMarkActive({ editor, format });

  const handleFormatLeaf = () => toggleMark({ editor, format });

  return (
    <IconButton
      color={isActive ? "primary" : "default"}
      className="w-10 h-10"
      onClick={handleFormatLeaf}
    >
      <SvgIcon component={icon} inheritViewBox />
    </IconButton>
  );
};

export default MarkButton;
