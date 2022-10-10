import { type BaseEditor } from "slate";
import type { ReactEditor } from "slate-react";

type IEditor = BaseEditor & ReactEditor;

const withNewFeatures = (editor: IEditor) => {
  const { isInline, isVoid } = editor;

  editor.isInline = (element) =>
    ["link"].includes(element.type) || isInline(element);

  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };

  return editor;
};

export default withNewFeatures;
