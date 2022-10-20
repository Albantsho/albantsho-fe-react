import {
  Button,
  IconButton,
  ListItemButton,
  ListItemText,
  SvgIcon,
  type TypographyProps,
} from "@mui/material";
import { CustomElement } from "interfaces/slate";
import type { IconType } from "react-icons";
import { useSlate } from "slate-react";
import useBlockButton from "../../hooks/useBlockButton";

interface IProps {
  icon: IconType;
  format: CustomElement["type"];
  variant?: TypographyProps["variant"];
  inDrawer?: "inDrawer";
  titleInDrawer?: string;
}

const BlockButton = ({
  format,
  icon,
  variant,
  inDrawer,
  titleInDrawer,
}: IProps) => {
  const editor = useSlate();
  const { isBlockActive, toggleBlock } = useBlockButton();
  const isActive = isBlockActive(editor, format);
  const handleFormatElement = () => toggleBlock(editor, format, variant);

  return (
    <>
      {!inDrawer ? (
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
      ) : (
        <ListItemButton
          onClick={handleFormatElement}
          TouchRippleProps={{ className: "text-primary-main" }}
          className={`${
            isActive
              ? "bg-primary-700 text-white hover:text-primary-700"
              : "bg-transparent text-gray-500"
          }  hover:bg-primary-50/50 max-h-[40px]`}
        >
          <SvgIcon component={icon} inheritViewBox />
          <ListItemText
            primaryTypographyProps={{
              variant: "h6",
              className: "font-medium futura leading-normal",
            }}
            className="pl-4"
          >
            {titleInDrawer}
          </ListItemText>
        </ListItemButton>
      )}
    </>
  );
};

export default BlockButton;
