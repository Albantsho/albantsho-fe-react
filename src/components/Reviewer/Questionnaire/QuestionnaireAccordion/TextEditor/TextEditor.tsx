import { Divider } from "@mui/material";
import { CustomElement } from "interfaces/slate";
import { useMemo } from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { BsCode, BsTypeBold } from "react-icons/bs";
import { FiItalic, FiMoreHorizontal } from "react-icons/fi";
import {
  MdFormatListBulleted,
  MdOutlineFormatListNumbered,
} from "react-icons/md";
import { createEditor, Editor } from "slate";
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
  const { handleKeyDown } = useTextEditor({ editor });
  return (
    <Slate editor={editor} value={initialValue}>
      <div className="flex gap-2 h-8 mb-8">
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
    </Slate>
  );
};

export default TextEditor;
