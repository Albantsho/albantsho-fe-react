import { Menu, MenuItem, SvgIcon } from "@mui/material";
import React from "react";
import { BsCameraVideoFill, BsFillChatLeftDotsFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoMdCopy, IoMdPlay } from "react-icons/io";
import { RiParenthesesFill } from "react-icons/ri";
import { SiAsana } from "react-icons/si";
import PhotoIcon from "./assets/photo.svg";

interface IProps {
  handleClose: () => void;
  contextMenu: {
    mouseX: number;
    mouseY: number;
  } | null;
}

const listMenuItem = [
  { id: 1, text: "Scenes", icon: PhotoIcon },
  { id: 2, text: "Action", icon: IoMdPlay },
  { id: 3, text: "Character", icon: FaUser },
  { id: 4, text: "Dialogue", icon: BsFillChatLeftDotsFill },
  { id: 5, text: "Parentethical", icon: RiParenthesesFill },
  { id: 6, text: "Transition", icon: IoMdCopy },
  { id: 7, text: "Shot", icon: BsCameraVideoFill },
  { id: 8, text: "General", icon: SiAsana },
];

const ChangeFormatMenu = ({ contextMenu, handleClose }: IProps) => {
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
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={
        contextMenu !== null
          ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
          : undefined
      }
    >
      {listMenuItem.map((menuItem) => (
        <MenuItem
          key={menuItem.id}
          className="text-white hover:bg-primary-700 justify-between rounded-md mb-1"
          onClick={handleClose}
        >
          {menuItem.text} <SvgIcon component={menuItem.icon} inheritViewBox />
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ChangeFormatMenu;
