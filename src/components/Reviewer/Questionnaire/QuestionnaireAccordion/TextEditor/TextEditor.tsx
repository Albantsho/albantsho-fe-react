import { useState } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import { CustomElement } from "interfaces/slate";
import Element from "./Element/Element";
import Leaf from "./Leaf/Leaf";
import {
  MdFormatAlignCenter,
  MdFormatListBulleted,
  MdOutlineFormatListNumbered,
} from "react-icons/md";
import MarkButton from "./MarkButton/MarkButton";
import BlockButton from "./BlockButton/BlockButton";
import { BsCode, BsLink45Deg, BsTypeBold } from "react-icons/bs";
import { FiItalic, FiMoreHorizontal } from "react-icons/fi";
import HeadingButtonList from "./HeadingButtonList/HeadingButtonList";

const initialValue: CustomElement[] = [
  {
    type: "typography",
    variant: "h1",
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
      <div className="flex gap-3 h-8">
        <MarkButton format="bold" icon={BsTypeBold} />
        <MarkButton format="italic" icon={FiItalic} />
        <MarkButton format="underline" icon={FiMoreHorizontal} />
        <MarkButton format="code" icon={BsCode} />
        <BlockButton format="numberList" icon={MdOutlineFormatListNumbered} />
        <BlockButton format="bulletList" icon={MdFormatListBulleted} />
        <BlockButton format="link" icon={BsLink45Deg} href="www" />
        <BlockButton
          format="typography"
          icon={MdFormatAlignCenter}
          variant="h2"
        />
        <BlockButton
          format="typography"
          icon={MdFormatAlignCenter}
          variant="h3"
        />
        <HeadingButtonList />
      </div>
      <Editable
        placeholder="Add comment..."
        renderPlaceholder={({ children, attributes }) => (
          <div {...attributes}>
            <p className="text-left pt-4">{children}</p>
          </div>
        )}
        spellCheck
        autoFocus
        renderElement={(props) => <Element {...props} />}
        renderLeaf={(props) => <Leaf {...props} />}
      />
    </Slate>
  );
};

export default TextEditor;
