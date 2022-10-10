import { ILink } from "interfaces/slate";
import { Editor, Transforms, Element as SlateElement, Range } from "slate";
import { useSlate } from "slate-react";

const useLinkButton = () => {
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
  return { wrapLink, isLinkActive, unwrapLink };
};

export default useLinkButton;
