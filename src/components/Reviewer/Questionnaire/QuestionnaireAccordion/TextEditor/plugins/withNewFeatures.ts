import {
  Editor,
  Element as SlateElement,
  Point,
  Range,
  Transforms,
  type BaseEditor,
} from "slate";
import type { ReactEditor } from "slate-react";

type IEditor = BaseEditor & ReactEditor;

const withNewFeatures = (editor: IEditor) => {
  const { isInline, isVoid, deleteBackward, insertBreak } = editor;

  editor.isInline = (element) =>
    ["link"].includes(element.type) || isInline(element);

  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };

  editor.deleteBackward = (unit) => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [cell] = Editor.nodes(editor, {
        match: (n) =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n.type === "tableCell",
      });

      if (cell) {
        const [, cellPath] = cell;
        const start = Editor.start(editor, cellPath);

        if (Point.equals(selection.anchor, start)) {
          return;
        }
      }
    }

    deleteBackward(unit);
  };

  editor.insertBreak = () => {
    const { selection } = editor;

    if (selection) {
      const [table] = Editor.nodes(editor, {
        match: (n) =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n.type === "table",
      });

      const [image] = Editor.nodes(editor, {
        match: (n) =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n.type === "image",
      });

      if (table || image) {
        return;
      }
    }

    insertBreak();
  };

  return editor;
};

export default withNewFeatures;
