import { Divider } from "@mui/material";
import { AiFillExclamationCircle, AiOutlineUnderline } from "react-icons/ai";
import { BsCode, BsTypeBold } from "react-icons/bs";
import { FiItalic } from "react-icons/fi";
import {
  MdFormatListBulleted,
  MdOutlineFormatListNumbered,
} from "react-icons/md";
import BlockButton from "../../Buttons/BlockButton/BlockButton";
import ColorButton from "../../Buttons/ColorButton/ColorButton";
import EmailButton from "../../Buttons/EmailButton/EmailButton";
import EmojiButton from "../../Buttons/EmojiButton/EmojiButton";
import HeadingButtonList from "../../Buttons/HeadingButtonList/HeadingButtonList";
import ImageButton from "../../Buttons/ImageButtonList/ImageButtonList";
import LinkButton from "../../Buttons/LinkButton/LinkButton";
import MarkButton from "../../Buttons/MarkButton/MarkButton";
import MoreFeaturesButton from "../../Buttons/MoreFeaturesButton/MoreFeaturesButton";
import TableButton from "../../Buttons/TableButton/TableButton";

const DesktopToolbar = () => {
  return (
    <div className="lg:flex gap-[3px] mb-8 hidden sticky top-0 z-50 flex-wrap">
      <HeadingButtonList />
      <Divider orientation="vertical" />
      <MarkButton format="bold" icon={BsTypeBold} />
      <MarkButton format="italic" icon={FiItalic} />
      <MarkButton format="underline" icon={AiOutlineUnderline} />
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
      <MoreFeaturesButton />
    </div>
  );
};

export default DesktopToolbar;
