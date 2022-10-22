import { IEmail } from "interfaces/slate";
import { ChangeEvent, useState } from "react";
import { Editor, Transforms, Element as SlateElement, Range } from "slate";
import { useSlate } from "slate-react";

const useEmailButton = () => {
  const editor = useSlate();
  const [openAddEmail, setOpenAddEmail] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const isLinkActive = () => {
    const [email] = Editor.nodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "email",
    });

    return !!email;
  };

  const unwrapLink = () => {
    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "email",
    });
  };

  const wrapLink = (emailUrl: string) => {
    if (!editor.selection) return;
    if (isLinkActive()) {
      unwrapLink();
      return;
    }
    const { selection } = editor;
    const isCollapsed = selection && Range.isCollapsed(selection);
    const link: IEmail = {
      type: "email",
      email: emailUrl,
      children: isCollapsed ? [{ text: emailUrl }] : [],
    };
    if (isCollapsed) {
      Transforms.insertNodes(editor, link);
    } else {
      Transforms.wrapNodes(editor, link, { split: true });
      Transforms.collapse(editor, { edge: "end" });
    }
  };
  const handleOpenAddEmailModal = () => setOpenAddEmail(true);

  const handleCloseAddEmailModal = () => setOpenAddEmail(false);

  const changeEmailValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setEmailValue(e.target.value);
  const wrapEmailFunction = () => {
    wrapLink(emailValue);
    setEmailValue("");
    handleCloseAddEmailModal();
  };

  const unWrapEmailFunction = () => {
    wrapLink(emailValue);
    setEmailValue("");
    handleCloseAddEmailModal();
  };

  return {
    isLinkActive,
    openAddEmail,
    handleCloseAddEmailModal,
    handleOpenAddEmailModal,
    emailValue,
    changeEmailValue,
    wrapEmailFunction,
    unWrapEmailFunction,
  };
};

export default useEmailButton;
