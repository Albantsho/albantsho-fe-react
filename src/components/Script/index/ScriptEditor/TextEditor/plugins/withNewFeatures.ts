import { CustomElement, IEditor } from "interfaces/slate";
import { Element, Text, Transforms } from "slate";
import { ReactEditor } from "slate-react";

const emptyPage: CustomElement = {
  type: "page",
  children: [{ type: "heading", children: [{ text: "" }] }],
};

const withNewFeatures = (editor: IEditor) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = (entry) => {
    const [node] = entry;

    if (Text.isText(node)) return normalizeNode(entry);

    if (Element.isElement(node) && node.type === "page") {
      let PageNode;
      try {
        PageNode = ReactEditor.toDOMNode(editor, node);
      } catch (e) {
        return;
      }

      const style = window.getComputedStyle(PageNode);
      const computedHeight = PageNode.offsetHeight;
      const padding =
        parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

      const pageHeight = computedHeight - padding;

      let CurrentPageHeight = 0;

      const children = Array.from(PageNode.children);

      children.forEach((child) => {
        const childStyles = window.getComputedStyle(child);
        const computedChildHeight = child.clientHeight;
        const childMargin =
          parseFloat(childStyles.marginTop) +
          parseFloat(childStyles.marginBottom);
        const childPadding =
          parseFloat(childStyles.paddingBottom) +
          parseFloat(childStyles.paddingTop);
        const childBorder =
          parseFloat(childStyles.borderLeftWidth) +
          parseFloat(childStyles.borderRightWidth) +
          parseFloat(childStyles.borderTopWidth) +
          parseFloat(childStyles.borderBottomWidth);

        const childHeight =
          computedChildHeight + childMargin + childPadding + childBorder;

        CurrentPageHeight = CurrentPageHeight + childHeight;

        if (CurrentPageHeight > pageHeight) {
          Transforms.liftNodes(editor);
          Transforms.splitNodes(editor);
          Transforms.wrapNodes(editor, emptyPage);
        }
      });
    }

    return normalizeNode(entry);
  };

  return editor;
};

export default withNewFeatures;
