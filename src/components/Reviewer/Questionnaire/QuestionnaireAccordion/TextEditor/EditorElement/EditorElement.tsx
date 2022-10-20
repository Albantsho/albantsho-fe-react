import { Link, Typography } from "@mui/material";
import { type RenderElementProps } from "slate-react";
import ImageComponent from "./ImageComponent/ImageComponent";
import TableComponent from "./TableComponent/TableComponent";

const EditorElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
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
    case "email":
      return (
        <Link
          underline="always"
          {...attributes}
          href={`mailto:${element.email}`}
        >
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
        <ImageComponent attributes={attributes} element={element}>
          {children}
        </ImageComponent>
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
    case "blockquote":
      return (
        <blockquote
          {...attributes}
          className=" border-l-4 py-[6px] pl-2 rounded-sm"
        >
          {children}
        </blockquote>
      );
    case "table":
      return (
        <TableComponent attributes={attributes} element={element}>
          {children}
        </TableComponent>
      );
    case "tableRow":
      return <tr {...attributes}>{children}</tr>;
    case "tableCell":
      return (
        <td
          className="border-2  rounded-md text-start align-top py-2 px-4 min-w-[200px] max-w-xs"
          {...attributes}
        >
          {children}
        </td>
      );

    default:
      return <Typography {...attributes}>{children}</Typography>;
  }
};

export default EditorElement;
