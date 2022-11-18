import { IEmail } from "interfaces/slate";
import { ChangeEvent, useState } from "react";
import { Editor, Transforms, Element as SlateElement, Range } from "slate";
import { useSlate } from "slate-react";

const useEmailButton = () => {
  const editor = useSlate();
  const [openAddEmail, setOpenAddEmail] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const isEmailActive = () => {
    const [email] = Editor.nodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "email",
    });

    return !!email;
  };

  const unwrapEmail = () => {
    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "email",
    });
  };

  const wrapEmailLink = (emailUrl: string) => {
    if (!editor.selection) return;
    if (isEmailActive()) {
      unwrapEmail();
      return;
    }
    const { selection } = editor;
    const isCollapsed = selection && Range.isCollapsed(selection);
    const email: IEmail = {
      type: "email",
      email: emailUrl,
      children: isCollapsed ? [{ text: emailUrl }] : [],
    };

    if (isCollapsed) {
      Transforms.insertNodes(editor, email);
    } else {
      Transforms.wrapNodes(editor, email, { split: true });
      Transforms.collapse(editor, { edge: "end" });
    }
  };

  const handleOpenAddEmailModal = () => setOpenAddEmail(true);

  const handleCloseAddEmailModal = () => setOpenAddEmail(false);

  const changeEmailValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setEmailValue(e.target.value);

  const wrapEmailFunction = () => {
    wrapEmailLink(emailValue);
    setEmailValue("");
    handleCloseAddEmailModal();
  };

  const unWrapEmailFunction = () => {
    wrapEmailLink(emailValue);
    setEmailValue("");
  };

  return {
    isEmailActive,
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
