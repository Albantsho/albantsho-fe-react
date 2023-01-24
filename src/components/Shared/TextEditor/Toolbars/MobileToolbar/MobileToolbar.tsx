import { Divider } from "@mui/material";
import { AiFillExclamationCircle, AiOutlineUnderline } from "react-icons/ai";
import { BsCode, BsTypeBold } from "react-icons/bs";
import { FiItalic } from "react-icons/fi";
import {
  MdFormatListBulleted,
  MdOutlineFormatListNumbered,
} from "react-icons/md";
import { useResizeDetector } from "react-resize-detector";
import BlockButton from "../../Buttons/BlockButton/BlockButton";
import ColorButton from "../../Buttons/ColorButton/ColorButton";
import EmailButton from "../../Buttons/EmailButton/EmailButton";
import EmojiButton from "../../Buttons/EmojiButton/EmojiButton";
import HeadingButtonList from "../../Buttons/HeadingButtonList/HeadingButtonList";
import ImageButton from "../../Buttons/ImageButtonList/ImageButtonList";
import LinkButton from "../../Buttons/LinkButton/LinkButton";
import MarkButton from "../../Buttons/MarkButton/MarkButton";
import TableButton from "../../Buttons/TableButton/TableButton";

const MobileToolbar = () => {
  const { ref, width } = useResizeDetector();

  return (
    <div
      ref={ref}
      className="absolute bottom-0 rounded-br-xl rounded-bl-xl right-0 left-0 shadow-primary bg-primary-50 flex gap-2 px-2 py-2 lg:hidden h-14 z-50"
    >
      <MarkButton format="bold" icon={BsTypeBold} />
      <ColorButton />
      <MarkButton format="italic" icon={FiItalic} />
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
      {width! > 810 && (
        <>
          <Divider className="flex h-full" orientation="vertical" />
          <HeadingButtonList />
        </>
      )}
    </div>
  );
};

export default MobileToolbar;
