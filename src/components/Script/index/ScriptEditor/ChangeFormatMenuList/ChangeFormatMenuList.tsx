import { Menu } from "@mui/material";
import { CustomElement } from "interfaces/slate";
import type { IconType } from "react-icons";
import { BsCameraVideoFill, BsFillChatLeftDotsFill } from "react-icons/bs";
import { FaPlay, FaUser } from "react-icons/fa";
import { RiParenthesesFill } from "react-icons/ri";
import { SiAsana } from "react-icons/si";
import { useSlate } from "slate-react";
import PhotoIcon from "../assets/photo.svg";
import TransitionIcon from "../assets/transition.svg";
import ChangeFormatMenu from "./ChangeFormatMenu/ChangeFormatMenu";

interface IProps {
  handleCloseContextMenu: () => void;
  contextMenu: {
    mouseX: number;
    mouseY: number;
  } | null;
}

interface IListMenuItem {
  id: number;
  format: CustomElement["type"];
  text: string;
  icon: IconType;
}

const listMenuItem: Array<IListMenuItem> = [
  { id: 1, format: "heading", text: "Scenes", icon: PhotoIcon },
  { id: 2, format: "action", text: "Action", icon: FaPlay },
  { id: 3, format: "character", text: "Character", icon: FaUser },
  { id: 4, format: "dialogue", text: "Dialogue", icon: BsFillChatLeftDotsFill },
  {
    id: 5,
    format: "parentethical",
    text: "Parentethical",
    icon: RiParenthesesFill,
  },
  { id: 6, format: "transition", text: "Transition", icon: TransitionIcon },
  { id: 7, format: "shot", text: "Shot", icon: BsCameraVideoFill },
  { id: 8, format: "general", text: "General", icon: SiAsana },
];

const ChangeFormatMenuList = ({
  contextMenu,
  handleCloseContextMenu,
}: IProps) => {
  const editor = useSlate();

  return (
    <Menu
      sx={{
        "& .MuiList-root": {
          backgroundColor: "#181025",
          width: "198px",
          padding: "28px 12px",
        },
      }}
      open={contextMenu !== null}
      onClose={handleCloseContextMenu}
      anchorReference="anchorPosition"
      anchorPosition={
        contextMenu !== null
          ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
          : undefined
      }
    >
      {listMenuItem.map((menuItem) => (
        <ChangeFormatMenu
          key={menuItem.id}
          menuItem={menuItem}
          editor={editor}
          handleCloseContextMenu={handleCloseContextMenu}
        />
      ))}
    </Menu>
  );
};

export default ChangeFormatMenuList;
