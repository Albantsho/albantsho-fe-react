import { type BaseEditor } from "slate";
import type { ReactEditor } from "slate-react";

type IEditor = BaseEditor & ReactEditor;

const withLink = (editor: IEditor) => {
  const { isInline } = editor;

  editor.isInline = (element) =>
    ["link"].includes(element.type) || isInline(element);

  return editor;
};

export default withLink;
