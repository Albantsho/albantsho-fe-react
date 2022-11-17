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
        <h1 style={{ fontSize: "36px" }} {...attributes}>
          {children}
        </h1>
      );
    case "headTwo":
      return (
        <h2 style={{ fontSize: "30px" }} {...attributes}>
          {children}
        </h2>
      );
    case "headThree":
      return (
        <h3 style={{ fontSize: "26px" }} {...attributes}>
          {children}
        </h3>
      );
    case "headFour":
      return (
        <h4 style={{ fontSize: "24px" }} {...attributes}>
          {children}
        </h4>
      );
    case "headFive":
      return (
        <h5 style={{ fontSize: "22px" }} {...attributes}>
          {children}
        </h5>
      );
    case "headSix":
      return (
        <h6 style={{ fontSize: "20px" }} {...attributes}>
          {children}
        </h6>
      );
    case "paragraph":
      return (
        <p style={{ fontSize: "16px" }} {...attributes}>
          {children}
        </p>
      );
    case "link":
      return (
        <a
          style={{ textDecorationLine: "underline", color: "#7953B5" }}
          {...attributes}
          href={element.url}
        >
          <span contentEditable={false} style={{ fontSize: 0 }}>
            ${String.fromCodePoint(160) /* Non-breaking space */}
          </span>
          {children}
          <span contentEditable={false} style={{ fontSize: 0 }}>
            ${String.fromCodePoint(160) /* Non-breaking space */}
          </span>
        </a>
      );
    case "email":
      return (
        <a
          style={{ textDecorationLine: "underline", color: "#7953B5" }}
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
        </a>
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
        <ul
          {...attributes}
          style={{ listStyleType: "disc", listStylePosition: "inside" }}
        >
          {children}
        </ul>
      );
    case "numberList":
      return (
        <ol
          {...attributes}
          style={{ listStyleType: "decimal", listStylePosition: "inside" }}
        >
          {children}
        </ol>
      );
    case "blockquote":
      return (
        <blockquote
          {...attributes}
          style={{
            borderLeftWidth: "4px",
            padding: "6px 2px",
            borderRadius: "2px",
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
      return <tr {...attributes}>{children}</tr>;
    case "tableCell":
      return (
        <td
          style={{
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
