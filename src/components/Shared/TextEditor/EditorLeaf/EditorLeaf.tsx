import { type RenderLeafProps } from "slate-react";

const EditorLeaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;
  if (leaf.underline) children = <u>{children}</u>;
  if (leaf.code) children = <code>{children}</code>;

  return (
    <span
      style={{ color: leaf?.color ? leaf?.color : undefined }}
      {...attributes}
    >
      {children}
    </span>
  );
};

export default EditorLeaf;