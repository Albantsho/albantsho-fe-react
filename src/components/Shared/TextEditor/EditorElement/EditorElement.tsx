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
        <h1 style={{ ...element.style, fontSize: "36px" }} {...attributes}>
          {children}
        </h1>
      );
    case "headTwo":
      return (
        <h2 style={{ ...element.style, fontSize: "30px" }} {...attributes}>
          {children}
        </h2>
      );
    case "headThree":
      return (
        <h3 style={{ ...element.style, fontSize: "26px" }} {...attributes}>
          {children}
        </h3>
      );
    case "headFour":
      return (
        <h4 style={{ ...element.style, fontSize: "24px" }} {...attributes}>
          {children}
        </h4>
      );
    case "headFive":
      return (
        <h5 style={{ ...element.style, fontSize: "22px" }} {...attributes}>
          {children}
        </h5>
      );
    case "headSix":
      return (
        <h6 style={{ ...element.style, fontSize: "20px" }} {...attributes}>
          {children}
        </h6>
      );
    case "paragraph":
      return (
        <p style={{ ...element.style, fontSize: "16px" }} {...attributes}>
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
          style={{
            ...element.style,
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          {children}
        </ul>
      );
    case "numberList":
      return (
        <ol
          {...attributes}
          className="list-decimal list-inside"
          style={{
            ...element.style,
            listStyleType: "decimal",
            listStylePosition: "inside",
          }}
        >
          {children}
        </ol>
      );
    case "blockquote":
      return (
        <blockquote
          {...attributes}
          style={{
            ...element.style,
            borderLeftWidth: "4px",
            padding: "6px 2px",
          }}
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
          style={{
            ...element.style,
            borderWidth: "2px",
            borderRadius: "6px",
            textAlign: "start",
            verticalAlign: "top",
            padding: "8px 16px",
            minWidth: "200px",
            maxWidth: "320px",
          }}
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
