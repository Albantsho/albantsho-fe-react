import { IconButton, Link, SvgIcon, Typography } from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Transforms } from "slate";
import {
  ReactEditor,
  useFocused,
  useSelected,
  useSlate,
  type RenderElementProps,
} from "slate-react";

const Element = ({ attributes, children, element }: RenderElementProps) => {
  switch (element.type) {
    case "typography":
      return (
        <Typography
          {...attributes}
          variant={element.variant}
          className="leading-normal"
        >
          {children}
        </Typography>
      );
    case "link":
      return (
        <Link underline="always" {...attributes} href={element.url}>
          <span contentEditable={false} style={{ fontSize: 0 }}>
            ${String.fromCodePoint(160) /* Non-breaking space */}
          </span>
          {children}
          <span contentEditable={false} style={{ fontSize: 0 }}>
            ${String.fromCodePoint(160) /* Non-breaking space */}
          </span>
        </Link>
      );
    case "image":
      return (
        <ImageComp attributes={attributes} element={element}>
          {children}
        </ImageComp>
      );
    case "listItem":
      return <li {...attributes}>{children}</li>;
    case "bulletList":
      return (
        <ul {...attributes} className="list-disc list-inside">
          {children}
        </ul>
      );
    case "numberList":
      return (
        <ol {...attributes} className="list-decimal list-inside">
          {children}
        </ol>
      );

    default:
      return <Typography {...attributes}>{children}</Typography>;
  }
};

export default Element;

const ImageComp = ({ attributes, children, element }: RenderElementProps) => {
  const editor = useSlate();
  const path = ReactEditor.findPath(editor as any, element);
  const selected = useSelected();
  const focused = useFocused();
  if (element.type === "image") {
    return (
      <div {...attributes}>
        <div style={{ opacity: 0 }}>{children}</div>
        <div
          contentEditable={true}
          className={`relative ${
            selected && focused ? "shadow-primary" : "none"
          }`}
        >
          <img alt="" src={element.url} />
          <IconButton
            onClick={() => Transforms.removeNodes(editor, { at: path })}
            className={`${selected ? "flex" : "hidden"} top-1 left-1 absolute`}
          >
            <SvgIcon component={RiDeleteBin6Line} />
          </IconButton>
        </div>
      </div>
    );
  } else {
    return <Typography {...attributes}>{children}</Typography>;
  }
};
