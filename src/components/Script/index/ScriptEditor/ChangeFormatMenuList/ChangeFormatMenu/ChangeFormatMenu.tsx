import { MenuItem, SvgIcon } from "@mui/material";
import { CustomElement, IEditor } from "interfaces/slate";
import type { IconType } from "react-icons";
import useBlockButton from "../../TextEditor/hooks/useBlockbutton";

interface IProps {
  menuItem: {
    id: number;
    text: string;
    icon: IconType;
    format: CustomElement["type"];
  };
  editor: IEditor;
  handleCloseContextMenu: () => void;
}

const ChangeFormatMenu = ({
  menuItem,
  editor,
  handleCloseContextMenu,
}: IProps) => {
  const { toggleBlock } = useBlockButton();
  const handleAddText = () => {
    toggleBlock(editor, menuItem.format);
    handleCloseContextMenu();
  };

  return (
    <MenuItem
      key={menuItem.id}
      className="text-white hover:bg-primary-700 justify-between rounded-md mb-1 mx-h-[37px]"
      onClick={handleAddText}
    >
      {menuItem.text}
      <SvgIcon fontSize="small" component={menuItem.icon} inheritViewBox />
    </MenuItem>
  );
};

export default ChangeFormatMenu;
