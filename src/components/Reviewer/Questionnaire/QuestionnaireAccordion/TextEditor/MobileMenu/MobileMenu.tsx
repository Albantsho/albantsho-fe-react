import { Divider } from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import { AiOutlineUnderline, AiFillExclamationCircle } from "react-icons/ai";
import { BsTypeBold, BsCode } from "react-icons/bs";
import { FiItalic } from "react-icons/fi";
import {
  MdOutlineFormatListNumbered,
  MdFormatListBulleted,
} from "react-icons/md";
import { useResizeDetector } from "react-resize-detector";
import BlockButton from "../BlockButton/BlockButton";
import ColorButton from "../ColorButton/ColorButton";
import EmailButton from "../EmailButton/EmailButton";
import EmojiButton from "../EmojiButton/EmojiButton";
import HeadingButtonList from "../HeadingButtonList/HeadingButtonList";
import ImageButton from "../ImageButtonList/ImageButtonList";
import LinkButton from "../LinkButton/LinkButton";
import MarkButton from "../MarkButton/MarkButton";
import TableButton from "../TableButton/TableButton";

const MobileMenu = () => {
  const { ref, width, height } = useResizeDetector();

  return (
    <div
      ref={ref}
      className="absolute bottom-0 right-0 left-0 shadow-primary bg-primary-50 flex gap-2 px-2 py-2 lg:hidden h-14"
    >
      <MarkButton format="bold" icon={BsTypeBold} />
      <MarkButton format="italic" icon={FiItalic} />
      <ColorButton />
      {width! > 190 && (
        <MarkButton format="underline" icon={AiOutlineUnderline} />
      )}
      {width! > 230 && <MarkButton format="code" icon={BsCode} />}
      {width! > 300 && <EmojiButton />}

      {width! > 345 && (
        <>
          <Divider className="flex h-full" orientation="vertical" />
          <LinkButton />
        </>
      )}
      {width! > 415 && <ImageButton />}
      {width! > 465 && <TableButton />}
      {width! > 515 && <EmailButton />}
      {width! > 560 && (
        <BlockButton format="blockquote" icon={AiFillExclamationCircle} />
      )}
      {width! > 665 && (
        <>
          <Divider className="flex h-full" orientation="vertical" />
          <BlockButton format="numberList" icon={MdOutlineFormatListNumbered} />
          <BlockButton format="bulletList" icon={MdFormatListBulleted} />
        </>
      )}
      {width! > 805 && (
        <>
          <Divider className="flex h-full" orientation="vertical" />
          <HeadingButtonList />
        </>
      )}
    </div>
  );
};

export default MobileMenu;
