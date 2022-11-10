import { useState } from "react";
import { CustomElement } from "interfaces/slate";
import type { TypographyProps } from "@mui/material";
import useBlockButton from "../hooks/useBlockButton";

import { useSlate } from "slate-react";
import { HistoryEditor } from "slate-history";
import useHeadingButtonList from "../Buttons/HeadingButtonList/useHeadingButtonList";

const useEditorDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeLinkIndex, setActiveLinkIndex] = useState("0");
  const [openHeadingList, setOpenHeadingList] = useState(false);
  const editor = useSlate();
  const { toggleBlock } = useBlockButton();
  const { setSelectedIndex } = useHeadingButtonList();

  const handleListItemClick =
    (
      index: number,
      variant: TypographyProps["variant"],
      format: CustomElement["type"]
    ) =>
    () => {
      setSelectedIndex(index);
      toggleBlock(editor, format, variant);
      handleCloseOpenDrawer();
      handleCloseHeadingList();
    };

  const handleOpenDrawer = () => setOpenDrawer(true);

  const handleCloseOpenDrawer = () => setOpenDrawer(false);

  const activeLinkChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveLinkIndex(newValue);
  };

  const handleOpenHeadingList = () =>
    setOpenHeadingList((prevState) => !prevState);

  const handleCloseHeadingList = () => setOpenHeadingList(false);

  const handleRedoButton = () => HistoryEditor.redo(editor);

  const handleUndoButton = () => HistoryEditor.undo(editor);

  return {
    openDrawer,
    activeLinkIndex,
    handleOpenDrawer,
    handleCloseOpenDrawer,
    activeLinkChange,
    openHeadingList,
    handleOpenHeadingList,
    handleCloseHeadingList,
    handleListItemClick,
    handleRedoButton,
    handleUndoButton,
  };
};

export default useEditorDrawer;
