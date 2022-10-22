import { ILink } from "interfaces/slate";
import { ChangeEvent, useState } from "react";
import { Editor, Transforms, Element as SlateElement, Range } from "slate";
import { useSlate } from "slate-react";

const useLinkButton = () => {
  const editor = useSlate();
  const [openAddLink, setOpenAddLink] = useState(false);
  const [linkValue, setLinkValue] = useState("");

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

  const handleOpenAddLinkModal = () => setOpenAddLink(true);

  const handleCloseAddLinkModal = () => setOpenAddLink(false);

  const changeLinkValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setLinkValue(e.target.value);

  const wrapLinkFunction = () => {
    wrapLink(linkValue);
    setLinkValue("");
    handleCloseAddLinkModal();
  };
  const unWrapLinkFunction = () => {
    wrapLink(linkValue);
    setLinkValue("");
    handleCloseAddLinkModal();
  };

  return {
    isLinkActive,
    openAddLink,
    handleCloseAddLinkModal,
    handleOpenAddLinkModal,
    linkValue,
    changeLinkValue,
    wrapLinkFunction,
    unWrapLinkFunction,
  };
};

export default useLinkButton;
