import { Link, Typography } from "@mui/material";
import { type RenderElementProps } from "slate-react";

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
      return <input {...attributes} type="file" />;
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
