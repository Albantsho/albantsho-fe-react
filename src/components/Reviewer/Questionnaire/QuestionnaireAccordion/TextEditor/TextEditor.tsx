import { Divider } from "@mui/material";
import { CustomElement } from "interfaces/slate";
import { useMemo } from "react";
import { AiFillExclamationCircle, AiOutlineUnderline } from "react-icons/ai";
import { BsCode, BsTypeBold } from "react-icons/bs";
import { FiItalic, FiMoreHorizontal } from "react-icons/fi";
import {
  MdFormatListBulleted,
  MdOutlineFormatListNumbered,
} from "react-icons/md";
import { useResizeDetector } from "react-resize-detector";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import BlockButton from "./BlockButton/BlockButton";
import ColorButton from "./ColorButton/ColorButton";
import EditorElement from "./EditorElement/EditorElement";
import EditorLeaf from "./EditorLeaf/EditorLeaf";
import EmailButton from "./EmailButton/EmailButton";
import EmojiButton from "./EmojiButton/EmojiButton";
import HeadingButtonList from "./HeadingButtonList/HeadingButtonList";
import ImageButton from "./ImageButtonList/ImageButtonList";
import LinkButton from "./LinkButton/LinkButton";
import MarkButton from "./MarkButton/MarkButton";
import withNewFeatures from "./plugins/withNewFeatures";
import TableButton from "./TableButton/TableButton";
import useTextEditor from "./useTextEditor";

const initialValue: CustomElement[] = [
  { type: "typography", variant: "body1", children: [{ text: "" }] },
];

const TextEditor = () => {
  const editor = useMemo(() => withNewFeatures(withReact(createEditor())), []);
  const { ref, width, height } = useResizeDetector();
  const { handleKeyDown } = useTextEditor({ editor });

  return (
    <div className="relative border rounded-xl py-4 px-8 lg:px-4 min-h-[350px] flex flex-col justify-start text-start">
      <Slate editor={editor} value={initialValue}>
        <div className="lg:flex gap-2 h-8 mb-8 hidden">
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
        <Editable
          placeholder="Add comment..."
          spellCheck
          autoFocus
          onKeyDown={handleKeyDown}
          renderElement={(props) => <EditorElement {...props} />}
          renderLeaf={(props) => <EditorLeaf {...props} />}
        />

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
              <BlockButton
                format="numberList"
                icon={MdOutlineFormatListNumbered}
              />
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
      </Slate>
    </div>
  );
};

export default TextEditor;
