import { Divider } from "@mui/material";
import { CustomElement } from "interfaces/slate";
import { useState } from "react";
import { BsCode, BsLink45Deg, BsTypeBold } from "react-icons/bs";
import { FiItalic, FiMoreHorizontal } from "react-icons/fi";
import {
  MdFormatListBulleted,
  MdOutlineFormatListNumbered,
} from "react-icons/md";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import BlockButton from "./BlockButton/BlockButton";
import ColorButton from "./ColorButton/ColorButton";
import Element from "./Element/Element";
import HeadingButtonList from "./HeadingButtonList/HeadingButtonList";
import Leaf from "./Leaf/Leaf";
import MarkButton from "./MarkButton/MarkButton";

const initialValue: CustomElement[] = [
  {
    type: "typography",
    variant: "h6",
    children: [{ text: "Hello" }],
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
  const [editor] = useState(() => withReact(createEditor()));

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
        <BlockButton format="link" icon={BsLink45Deg} href="www" />
        <MarkButton format="code" icon={BsCode} />
      </div>
      <Editable
        placeholder="Add comment..."
        spellCheck
        autoFocus
        renderElement={(props) => <Element {...props} />}
        renderLeaf={(props) => <Leaf {...props} />}
      />
    </Slate>
  );
};

export default TextEditor;
