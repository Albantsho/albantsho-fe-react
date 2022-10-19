import {
  Button,
  IconButton,
  SvgIcon,
  type TypographyProps,
} from "@mui/material";
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
    <>
      <IconButton
        className="w-10 h-10 hidden lg:flex"
        color={isActive ? "primary" : "default"}
        onClick={handleFormatElement}
      >
        <SvgIcon component={icon} inheritViewBox />
      </IconButton>
      <Button
        className={`${
          isActive
            ? "bg-primary-700 text-white hover:text-primary-700"
            : "text-primary-700"
        } lg:hidden w-10 h-10 min-w-[40px]`}
        onClick={handleFormatElement}
      >
        <SvgIcon component={icon} inheritViewBox />
      </Button>
    </>
  );
};

export default BlockButton;
