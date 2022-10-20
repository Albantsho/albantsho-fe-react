import { Divider } from "@mui/material";
import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { BsTypeBold, BsCode } from "react-icons/bs";
import { FiItalic, FiMoreHorizontal } from "react-icons/fi";
import {
  MdOutlineFormatListNumbered,
  MdFormatListBulleted,
} from "react-icons/md";
import BlockButton from "../../Buttons/BlockButton/BlockButton";
import ColorButton from "../../Buttons/ColorButton/ColorButton";
import EmailButton from "../../Buttons/EmailButton/EmailButton";
import EmojiButton from "../../Buttons/EmojiButton/EmojiButton";
import HeadingButtonList from "../../Buttons/HeadingButtonList/HeadingButtonList";
import ImageButton from "../../Buttons/ImageButtonList/ImageButtonList";
import LinkButton from "../../Buttons/LinkButton/LinkButton";
import MarkButton from "../../Buttons/MarkButton/MarkButton";
import TableButton from "../../Buttons/TableButton/TableButton";

const DesktopToolbar = () => {
  return (
    <div className="lg:flex gap-2 h-8 mb-8 hidden sticky top-0">
      <HeadingButtonList />
      <Divider orientation="vertical" />
      <MarkButton format="bold" icon={BsTypeBold} />
      <MarkButton format="italic" icon={FiItalic} />
      <MarkButton format="underline" icon={FiMoreHorizontal} />
      <Divider orientation="vertical" />
      <ColorButton />
      <Divider orientation="vertical" />
      <BlockButton format="numberList" icon={MdOutlineFormatListNumbered} />
      <BlockButton format="bulletList" icon={MdFormatListBulleted} />
      <Divider orientation="vertical" />
      <LinkButton />
      <ImageButton />
      <EmailButton />
      <EmojiButton />
      <TableButton />
      <MarkButton format="code" icon={BsCode} />
      <BlockButton format="blockquote" icon={AiFillExclamationCircle} />
    </div>
  );
};

export default DesktopToolbar;
