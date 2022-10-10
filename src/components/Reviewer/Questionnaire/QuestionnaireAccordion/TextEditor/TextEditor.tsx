import { Divider } from "@mui/material";
import { CustomElement } from "interfaces/slate";
import { useMemo } from "react";
import { BsCode, BsTypeBold } from "react-icons/bs";
import { FiItalic, FiMoreHorizontal } from "react-icons/fi";
import {
  MdFormatListBulleted,
  MdOutlineFormatListNumbered,
} from "react-icons/md";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import BlockButton from "./BlockButton/BlockButton";
import ColorButton from "./ColorButton/ColorButton";
import EditorElement from "./EditorElement/EditorElement";
import HeadingButtonList from "./HeadingButtonList/HeadingButtonList";
import ImageButton from "./ImageButtonList/ImageButtonList";
import EditorLeaf from "./EditorLeaf/EditorLeaf";
import LinkButton from "./LinkButton/LinkButton";
import MarkButton from "./MarkButton/MarkButton";
import withNewFeatures from "./plugins/withNewFeatures";

const initialValue: CustomElement[] = [
  {
    type: "typography",
    variant: "h6",
    children: [{ text: "Hello" }],
  },
  {
    type: "image",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Love_heart_uidaodjsdsew.gif",
    children: [{ text: "" }],
  },
  {
    type: "numberList",
    children: [
      {
        type: "listItem",
        children: [
          {
            text: "Hi lossw",
          },
        ],
      },
    ],
  },
];

const TextEditor = () => {
  const editor = useMemo(() => withNewFeatures(withReact(createEditor())), []);

  return (
    <Slate editor={editor} value={initialValue}>
      <div className="flex gap-3 h-8 mb-8">
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
        <MarkButton format="code" icon={BsCode} />
      </div>
      <Editable
        placeholder="Add comment..."
        spellCheck
        autoFocus
        renderElement={(props) => <EditorElement {...props} />}
        renderLeaf={(props) => <EditorLeaf {...props} />}
      />
    </Slate>
  );
};

export default TextEditor;
