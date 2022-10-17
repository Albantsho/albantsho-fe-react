import { IconButton, SvgIcon, type TypographyProps } from "@mui/material";
import { CustomElement } from "interfaces/slate";
import type { IconType } from "react-icons";
import { useSlate } from "slate-react";
import useBlockButton from "../hooks/useBlockButton";

interface IProps {
  icon: IconType;
  format: CustomElement["type"];
  variant?: TypographyProps["variant"];
}

const BlockButton = ({ format, icon, variant }: IProps) => {
  const editor = useSlate();
  const { isBlockActive, toggleBlock } = useBlockButton();
  const isActive = isBlockActive(editor, format);

  const handleFormatElement = () => toggleBlock(editor, format, variant);

  return (
    <IconButton
      className="w-10 h-10"
      color={isActive ? "primary" : "default"}
      onClick={handleFormatElement}
    >
      <SvgIcon component={icon} inheritViewBox />
    </IconButton>
  );
};

export default BlockButton;
