// import {
//    Button,
//    IconButton,
//    SvgIcon,
//    Toolbar,
// } from "@mui/material";

// import { BsTypeBold } from "react-icons/bs";
// import { FiItalic } from "react-icons/fi";
// import { FiMoreHorizontal } from "react-icons/fi";
// import { BsCode } from "react-icons/bs";
// import { MdOutlineFormatListNumbered } from "react-icons/md";
// import { MdFormatListBulleted } from "react-icons/md";
// import { BsLink45Deg } from "react-icons/bs";
// import { BsImageFill } from "react-icons/bs";
// import { MdOutlineAlternateEmail } from "react-icons/md";
// import { GrEmoji } from "react-icons/gr";
// import { AiFillExclamationCircle } from "react-icons/ai";


// import React, { KeyboardEvent, useCallback, useMemo } from "react";
// import isHotkey from "is-hotkey";
// import { Editable, withReact, useSlate, Slate, useSlateStatic } from "slate-react";
// import {
//    Editor,
//    Transforms,
//    createEditor,
//    Element as SlateElement,
// } from "slate";
// import { withHistory } from "slate-history";

// const HOTKEYS = {
//    "mod+b": "bold",
//    "mod+i": "italic",
//    "mod+u": "underline",
//    "mod+`": "code",
// };
// const LIST_TYPES = ["numbered-list", "bulleted-list"];
// const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

// interface IProps {
//    title: string;
//    description?: string;
// }

// const initialValue = [
//    {
//       type: "paragraph",
//       children: [{ text: "A line of text in a paragraph." }],
//       object: "blogs",
//       nodes: [
//          {
//             object: "text",
//             leaves: [{ text: "A line of text in a paragraph." }],
//          },
//       ],
//    },
// ];

// const RichText = () => {
//    // const renderElement = useCallback((props) => <Element {...props} />, []);
//    // const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
//    const editor = useMemo(() => withHistory(withReact(createEditor())), []);

//    return (
//       <Slate editor={editor} value={initialValue}>
//          <Toolbar>
//             {/* <MarkButton format="bold" icon={BsTypeBold} />
//             <MarkButton format="italic" icon={FiItalic} />
//             <MarkButton format="underline" icon={FiMoreHorizontal} />
//             <MarkButton format="code" icon={BsCode} /> */}
//             {/* <BlockButton format="heading-one" icon="looks_one" />
//             <BlockButton format="heading-two" icon="looks_two" />
//             <BlockButton format="block-quote" icon={AiFillExclamationCircle} />
//             <BlockButton format="numbered-list" icon={MdOutlineFormatListNumbered} />
//             <BlockButton format="bulleted-list" icon={MdFormatListBulleted} />
//             <AddLinkButton />
//             <InsertImageButton />
//             <BlockButton format="left" icon="format_align_left" />
//             <BlockButton format="center" icon="format_align_center" />
//             <BlockButton format="right" icon="format_align_right" />
//             <BlockButton format="justify" icon="format_align_justify" />
//             <IconButton><SvgIcon component={MdOutlineAlternateEmail} /></IconButton>
//             <IconButton><SvgIcon component={GrEmoji} /></IconButton> */}
//          </Toolbar>
//          <Editable
//             // renderElement={renderElement}
//             // renderLeaf={renderLeaf}
//             placeholder="Add comment..."
//             spellCheck
//             autoFocus
//          // onKeyDown={(event: KeyboardEvent<HTMLImageElement>) => {
//          //    for (const hotkey in HOTKEYS) {
//          //       if (isHotkey(hotkey, event)) {
//          //          event.preventDefault();
//          //          const mark = HOTKEYS[hotkey];
//          //          toggleMark(editor, mark);
//          //       }
//          //    }
//          // }}
//          />
//       </Slate>
//    )
// }

// export default RichText


// const toggleBlock = (editor, format) => {
//    const isActive = isBlockActive(
//       editor,
//       format,
//       TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
//    );
//    const isList = LIST_TYPES.includes(format);

//    Transforms.unwrapNodes(editor, {
//       match: (n) =>
//          !Editor.isEditor(n) &&
//          SlateElement.isElement(n) &&
//          LIST_TYPES.includes(n.type) &&
//          !TEXT_ALIGN_TYPES.includes(format),
//       split: true,
//    });
//    let newProperties: Partial<SlateElement>;
//    if (TEXT_ALIGN_TYPES.includes(format)) {
//       newProperties = {
//          align: isActive ? undefined : format,
//       };
//    } else {
//       newProperties = {
//          type: isActive ? "paragraph" : isList ? "list-item" : format,
//       };
//    }
//    Transforms.setNodes<SlateElement>(editor, newProperties);

//    if (!isActive && isList) {
//       const block = { type: format, children: [] };
//       Transforms.wrapNodes(editor, block);
//    }
// };

// const toggleMark = (editor, format) => {
//    const isActive = isMarkActive(editor, format);

//    if (isActive) {
//       Editor.removeMark(editor, format);
//    } else {
//       Editor.addMark(editor, format, true);
//    }
// };

// const isBlockActive = (editor, format, blockType = "type") => {
//    const { selection } = editor;
//    if (!selection) return false;

//    const [match] = Array.from(
//       Editor.nodes(editor, {
//          at: Editor.unhangRange(editor, selection),
//          match: (n) =>
//             !Editor.isEditor(n) &&
//             SlateElement.isElement(n) &&
//             n[blockType] === format,
//       })
//    );

//    return !!match;
// };

// const isMarkActive = (editor, format) => {
//    const marks = Editor.marks(editor);
//    return marks ? marks[format] === true : false;
// };

// const isLinkActive = editor => {
//    const [link] = Editor.nodes(editor, {
//       match: n =>
//          !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'link',
//    })
//    return !!link
// }

// const isImageUrl = url => {
//    if (!url) return false
//    if (!isUrl(url)) return false
//    const ext = new URL(url).pathname.split('.').pop()
//    return imageExtensions.includes(ext)
// }


// const Element = ({ attributes, children, element }) => {
//    const style = { textAlign: element.align };
//    switch (element.type) {
//       case "block-quote":
//          return (
//             <blockquote style={style} {...attributes}>
//                {children}
//             </blockquote>
//          );
//       case "bulleted-list":
//          return (
//             <ul style={style} {...attributes}>
//                {children}
//             </ul>
//          );
//       case "heading-one":
//          return (
//             <h1 style={style} {...attributes}>
//                {children}
//             </h1>
//          );
//       case "heading-two":
//          return (
//             <h2 style={style} {...attributes}>
//                {children}
//             </h2>
//          );
//       case "heading-three":
//          return (
//             <h3 style={style} {...attributes}>
//                {children}
//             </h3>
//          );
//       case "heading-four":
//          return (
//             <h3 style={style} {...attributes}>
//                {children}
//             </h3>
//          );
//       case "heading-five":
//          return (
//             <h3 style={style} {...attributes}>
//                {children}
//             </h3>
//          );
//       case "heading-six":
//          return (
//             <h3 style={style} {...attributes}>
//                {children}
//             </h3>
//          );
//       case "list-item":
//          return (
//             <li style={style} {...attributes}>
//                {children}
//             </li>
//          );
//       case "numbered-list":
//          return (
//             <ol style={style} {...attributes}>
//                {children}
//             </ol>
//          );
//       default:
//          return (
//             <p style={style} {...attributes}>
//                {children}
//             </p>
//          );
//    }
// };

// const Leaf = ({ attributes, children, leaf }) => {
//    if (leaf.bold) {
//       children = <strong>{children}</strong>;
//    }

//    if (leaf.code) {
//       children = <code>{children}</code>;
//    }

//    if (leaf.italic) {
//       children = <em>{children}</em>;
//    }

//    if (leaf.underline) {
//       children = <u>{children}</u>;
//    }

//    return <span {...attributes}>{children}</span>;
// };

// const BlockButton = ({ format, icon }) => {
//    const editor = useSlate();
//    return (
//       <IconButton
//          onMouseDown={(event) => {
//             event.preventDefault();
//             toggleBlock(editor, format);
//          }}
//       >
//          <SvgIcon component={icon} inheritViewBox />
//       </IconButton>
//    );
// };

// const MarkButton = ({ format, icon }) => {
//    const editor = useSlate();
//    return (
//       <IconButton onMouseDown={event => {
//          event.preventDefault()
//          toggleBlock(editor, format)
//       }}>
//          <SvgIcon component={icon} />
//       </IconButton>
//    );
// };

// const AddLinkButton = () => {
//    const editor = useSlate()
//    return (
//       <IconButton>
//          <SvgIcon component={BsLink45Deg} />
//       </IconButton>
//    )
// }

// const InsertImageButton = () => {
//    const editor = useSlateStatic()
//    return (
//       <Button
//          onMouseDown={event => {
//             event.preventDefault()
//             const url = window.prompt('Enter the URL of the image:')
//             if (url && !isImageUrl(url)) {
//                alert('URL is not an image')
//                return
//             }
//             url && insertImage(editor, url)
//          }}
//       >
//          <SvgIcon component={BsImageFill} />
//       </Button>
//    )
// }


import React from 'react'

const RichText = () => {
  return (
    <div>RichText</div>
  )
}

export default RichText