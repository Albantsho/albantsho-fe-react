import { IconButton, SvgIcon, type TypographyProps } from "@mui/material";
import { CustomElement } from "interfaces/slate";
import type { IconType } from "react-icons";
import { useSlate } from "slate-react";
import useBlockButton from "../hooks/useBlockButton/useBlockButton";

interface IProps {
  icon: IconType;
  format: CustomElement["type"];
  variant?: TypographyProps["variant"];
  href?: string;
}

const BlockButton = ({ format, icon, href, variant }: IProps) => {
  const editor = useSlate();
  const { isBlockActive, toggleBlock } = useBlockButton();
  const isActive = isBlockActive(editor, format);
  return (
    <IconButton
      color={isActive ? "primary" : "default"}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format, variant);
      }}
    >
      <SvgIcon component={icon} inheritViewBox />
    </IconButton>
  );
};

export default BlockButton;
