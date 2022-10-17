import type { TypographyProps } from "@mui/material";
import { CustomElement } from "interfaces/slate";
import { useRef, useState } from "react";
import { useSlate } from "slate-react";
import useBlockButton from "../hooks/useBlockButton";
interface IListButtons {
  format: CustomElement["type"];
  option: string;
  variant: TypographyProps["variant"];
}

const listButtons: IListButtons[] = [
  { format: "typography", option: "Normal Text", variant: "body1" },
  { format: "typography", option: "Heading 1", variant: "h1" },
  { format: "typography", option: "Heading 2", variant: "h2" },
  { format: "typography", option: "Heading 3", variant: "h3" },
  { format: "typography", option: "Heading 4", variant: "h4" },
  { format: "typography", option: "Heading 5", variant: "h5" },
  { format: "typography", option: "Heading 6", variant: "h6" },
];

const useHeadingButtonList = () => {
  const [openListHeadingButton, setOpenListHeadingButton] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isBlockActive, toggleBlock } = useBlockButton();
  const editor = useSlate();

  const handleMenuItemClick =
    (
      index: number,
      variant: TypographyProps["variant"],
      format: CustomElement["type"]
    ) =>
    () => {
      setSelectedIndex(index);
      setOpenListHeadingButton(false);
      toggleBlock(editor, format, variant);
    };

  const handleToggleListHeadingButton = () => {
    setOpenListHeadingButton((prevOpen) => !prevOpen);
  };

  const handleCloseListHeadingButton = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpenListHeadingButton(false);
  };

  return {
    openListHeadingButton,
    selectedIndex,
    isBlockActive,
    handleMenuItemClick,
    handleToggleListHeadingButton,
    handleCloseListHeadingButton,
    anchorRef,
    editor,
    listButtons,
  };
};

export default useHeadingButtonList;
