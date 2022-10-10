import type { TypographyProps } from "@mui/material";
import { CustomElement } from "interfaces/slate";
import { useRef, useState } from "react";
import { useSlate } from "slate-react";
import useBlockButton from "../hooks/useBlockButton";

const useHeadingButtonList = () => {
  const [openListHeadingButton, setOpenListHeadingButton] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
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
  };
};

export default useHeadingButtonList;
