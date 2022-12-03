import { useMediaQuery } from "@mui/material";
import { BsCameraVideoFill, BsFillChatLeftDotsFill } from "react-icons/bs";
import { FaPlay, FaUser } from "react-icons/fa";
import { SiAsana } from "react-icons/si";
import { type RenderElementProps } from "slate-react";
import LeftParenthesesIcon from "../../assets/left-parentheses.svg";
import PhotoIcon from "../../assets/photo.svg";
import RightParenthesesIcon from "../../assets/right-parentheses.svg";
import TransitionIcon from "../../assets/transition.svg";

const EditorElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  const matches = useMediaQuery("(min-width:500px)");

  switch (element.type) {
    case "heading":
      return (
        <h6
          {...attributes}
          itemID={element.id}
          style={{
            fontWeight: 700,
            padding: "0 40px",
            fontSize: "20px",
            lineHeight: "28px",
            marginBottom: "16px",
            color: "black",
            position: "relative",
            width: "100%",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: "0",
              top: "3px",
              bottom: "3px",
              width: "24px",
              height: "20",
            }}
          >
            <PhotoIcon />
          </span>
          {children}
        </h6>
      );
    case "action":
      return (
        <p
          {...attributes}
          itemID={element.id}
          style={{
            width: "100%",
            padding: "0 40px",
            position: "relative",
            marginBottom: "16px",
          }}
        >
          <FaPlay
            style={{
              position: "absolute",
              left: "0",
              top: "4px",
              bottom: "0",
              width: "24px",
              height: "20",
              color: "#DCD8E4",
            }}
          />
          {children}
        </p>
      );
    case "character":
      return (
        <p
          {...attributes}
          itemID={element.id}
          style={{
            padding: "0px 40px",
            marginBottom: "16px",
            textAlign: "start",
            position: "relative",
            width: "60%",
            textTransform: "uppercase",
            color: "black",
            marginLeft: "auto",
          }}
        >
          <FaUser
            style={{
              position: "absolute",
              left: "0",
              top: "4px",
              bottom: "0",
              width: "24px",
              height: "20",
              color: "#DCD8E4",
            }}
          />
          {children}
        </p>
      );
    case "dialogue":
      return (
        <p
          {...attributes}
          itemID={element.id}
          style={{
            padding: "0px 40px",
            marginBottom: "16px",
            textAlign: "start",
            position: "relative",
            width: "60%",
            color: "black",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <BsFillChatLeftDotsFill
            style={{
              color: "#DCD8E4",
              position: "absolute",
              left: "0",
              top: "4px",
              bottom: "0",
              width: "24px",
              height: "20",
            }}
          />
          {children}
        </p>
      );
    case "parentethical":
      return (
        <p
          {...attributes}
          itemID={element.id}
          style={{
            color: "black",
            padding: "0 16px",
            marginBottom: "16px",
            width: "fit-content",
            maxWidth: "40%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "6px",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: "0",
              top: "2px",
              width: "6px",
              height: "16px",
            }}
          >
            <LeftParenthesesIcon />
          </span>
          {children}
          <span
            style={{
              position: "absolute",
              right: "0",
              bottom: "7px",
              width: "7.5px",
              height: "16px",
            }}
          >
            <RightParenthesesIcon />
          </span>
        </p>
      );
    case "transition":
      return (
        <p
          {...attributes}
          itemID={element.id}
          style={{
            marginBottom: "16px",
            padding: "0 40px",
            color: "black",
            position: "relative",
            textAlign: "end",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "0",
              width: "24px",
              height: "20",
            }}
          >
            <TransitionIcon />
          </span>
          {children}
        </p>
      );
    case "shot":
      return (
        <p
          {...attributes}
          itemID={element.id}
          style={{
            padding: "0 40px",
            marginBottom: "16px",
            color: "black",
            position: "relative",
            lineHeight: "16px",
            textTransform: "uppercase",
          }}
        >
          <BsCameraVideoFill
            style={{
              color: "#DCD8E4",
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "0",
              width: "24px",
              height: "20px",
            }}
          />
          {children}
        </p>
      );
    case "general":
      return (
        <p
          {...attributes}
          itemID={element.id}
          style={{
            padding: "0 40px",
            marginBottom: "16px",
            color: "black",
            position: "relative",
          }}
        >
          <SiAsana
            style={{
              color: "#DCD8E4",
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "0",
              width: "24px",
              height: "20px",
            }}
          />
          {children}
        </p>
      );
    case "page": {
      return (
        <div
          {...attributes}
          style={{
            position: "relative",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "40px",
            marginBottom: "30px",
            height: "842px",
            padding: matches ? "40px 56px" : "16px 24px",
            background: "#fff",
          }}
        >
          {children}
        </div>
      );
    }

    default:
      return (
        <p style={{ marginBottom: "3px", width: "100%" }} {...attributes}>
          {children}
        </p>
      );
  }
};

export default EditorElement;
