import { CustomElement } from "interfaces/slate";
import { useRef, useState } from "react";
import { useSlate } from "slate-react";
import useBlockButton from "../../hooks/useBlockButton";

interface IListButtons {
  format: CustomElement["type"];
  option: string;
}

const listButtons: IListButtons[] = [
  { format: "paragraph", option: "Normal Text" },
  { format: "headOne", option: "Heading 1" },
  { format: "headTwo", option: "Heading 2" },
  { format: "headThree", option: "Heading 3" },
  { format: "headFour", option: "Heading 4" },
  { format: "headFive", option: "Heading 5" },
  { format: "headSix", option: "Heading 6" },
];

const useHeadingButtonList = () => {
  const [openListHeadingButton, setOpenListHeadingButton] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isBlockActive, toggleBlock } = useBlockButton();
  const editor = useSlate();

  const handleMenuItemClick =
    (index: number, format: CustomElement["type"]) => () => {
      setSelectedIndex(index);
      setOpenListHeadingButton(false);
      toggleBlock(editor, format);
    };

  const handleToggleListHeadingButton = () =>
    setOpenListHeadingButton((prevOpen) => !prevOpen);

  const handleCloseListHeadingButton = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    )
      return;

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
    setSelectedIndex,
  };
};

export default useHeadingButtonList;
