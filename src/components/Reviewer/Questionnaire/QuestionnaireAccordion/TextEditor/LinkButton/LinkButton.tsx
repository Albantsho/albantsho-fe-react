import { IconButton, SvgIcon } from "@mui/material";
import type { ILink } from "interfaces/slate";
import type { IconType } from "react-icons";
import { Editor, Element as SlateElement, Range, Transforms } from "slate";
import { useSlate } from "slate-react";
import { BsLink45Deg } from "react-icons/bs";
import { BiUnlink } from "react-icons/bi";

const LinkButton = () => {
  const editor = useSlate();

  const isLinkActive = () => {
    const [link] = Editor.nodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "link",
    });

    return !!link;
  };

  const unwrapLink = () => {
    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "link",
    });
  };

  const wrapLink = (url: string) => {
    if (!editor.selection) return;
    if (isLinkActive()) {
      unwrapLink();
      return;
    }

    const { selection } = editor;
    const isCollapsed = selection && Range.isCollapsed(selection);
    const link: ILink = {
      type: "link",
      url,
      children: isCollapsed ? [{ text: url }] : [],
    };

    if (isCollapsed) {
      Transforms.insertNodes(editor, link);
    } else {
      Transforms.wrapNodes(editor, link, { split: true });
      Transforms.collapse(editor, { edge: "end" });
    }
  };

  return (
    <IconButton
      color={isLinkActive() ? "primary" : "default"}
      className="w-10 h-10"
      onClick={() => {
        if (isLinkActive()) {
          unwrapLink();
          return;
        }
        const url = window.prompt("Enter the URL of the link:");
        if (!url) return;
        wrapLink(url);
      }}
    >
      <SvgIcon
        component={isLinkActive() ? BiUnlink : BsLink45Deg}
        inheritViewBox
      />
    </IconButton>
  );
};

export default LinkButton;
