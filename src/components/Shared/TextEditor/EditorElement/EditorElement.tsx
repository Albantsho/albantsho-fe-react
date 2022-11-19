import { Link } from "@mui/material";
import { type RenderElementProps } from "slate-react";
import ImageComponent from "./ImageComponent/ImageComponent";
import TableComponent from "./TableComponent/TableComponent";

const EditorElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  switch (element.type) {
    case "headOne":
      return (
        <h1 style={element.style} className="text-4xl" {...attributes}>
          {children}
        </h1>
      );
    case "headTwo":
      return (
        <h2 style={element.style} className="text-3xl" {...attributes}>
          {children}
        </h2>
      );
    case "headThree":
      return (
        <h3 style={element.style} className="text-[26px]" {...attributes}>
          {children}
        </h3>
      );
    case "headFour":
      return (
        <h4 style={element.style} className="text-2xl" {...attributes}>
          {children}
        </h4>
      );
    case "headFive":
      return (
        <h5 style={element.style} className="text-[22px]" {...attributes}>
          {children}
        </h5>
      );
    case "headSix":
      return (
        <h6 style={element.style} className="text-xl" {...attributes}>
          {children}
        </h6>
      );
    case "paragraph":
      return (
        <p style={element.style} className="text-base" {...attributes}>
          {children}
        </p>
      );
    case "link": {
      return (
        <a style={element.style} {...attributes} href={element.url}>
          <span contentEditable={false} style={{ fontSize: 0 }}>
            ${String.fromCodePoint(160) /* Non-breaking space */}
          </span>
          {children}
          <span contentEditable={false} style={{ fontSize: 0 }}>
            ${String.fromCodePoint(160) /* Non-breaking space */}
          </span>
        </a>
      );
    }
    case "email":
      return (
        <a
          style={element.style}
          {...attributes}
          href={`mailto:${element.email}`}
        >
          {children}
        </a>
      );
    case "image":
      return (
        <ImageComponent attributes={attributes} element={element}>
          {children}
        </ImageComponent>
      );
    case "listItem":
      return (
        <li style={element.style} {...attributes}>
          {children}
        </li>
      );
    case "bulletList":
      return (
        <ul
          {...attributes}
          className="list-disc list-inside"
          style={element.style}
        >
          {children}
        </ul>
      );
    case "numberList":
      return (
        <ol
          {...attributes}
          className="list-decimal list-inside"
          style={element.style}
        >
          {children}
        </ol>
      );
    case "blockquote":
      return (
        <blockquote
          {...attributes}
          style={element.style}
          className="border-l-4 py-[6px] px-[2px]"
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
      return (
        <tr style={element.style} {...attributes}>
          {children}
        </tr>
      );
    case "tableCell":
      return (
        <td
          style={element.style}
          className="border-2 rounded-md text-start align-top py-2 px-4 min-w-[200px] max-w-xs"
          {...attributes}
        >
          {children}
        </td>
      );

    default:
      return (
        <p style={{ fontSize: "16px" }} {...attributes}>
          {children}
        </p>
      );
  }
};

export default EditorElement;
