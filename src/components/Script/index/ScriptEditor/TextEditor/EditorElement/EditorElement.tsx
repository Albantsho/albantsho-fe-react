import { useMediaQuery } from "@mui/material";
import { BsCameraVideoFill, BsFillChatLeftDotsFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { SiAsana } from "react-icons/si";
import { type RenderElementProps } from "slate-react";
import LeftParenthesesIcon from "../../assets/left-parentheses.svg";
import PhotoIcon from "../../assets/photo.svg";
import RightParenthesesIcon from "../../assets/right-parentheses.svg";
import TransitionIcon from "../../assets/transition.svg";
import CharacterComponent from "./CharacterComponent/CharacterComponent";

interface IProps extends RenderElementProps {
  editorSetting: { icons: string };
}

const EditorElement = ({
  attributes,
  children,
  element,
  editorSetting,
}: IProps) => {
  const matches = useMediaQuery("(min-width:500px)");

  switch (element.type) {
    case "heading":
      return (
        <p
          {...attributes}
          itemID={element.id}
          style={{
            padding: "0 40px",
            fontSize: "18px",
            marginBottom: "20px",
            color: "black",
            position: "relative",
            width: "100%",
            textTransform: "uppercase",
            fontFamily: "Courier",
          }}
        >
          {editorSetting.icons === "show" ? (
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
          ) : (
            <span></span>
          )}

          {children}
        </p>
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
            marginBottom: "20px",
            fontFamily: "Courier",
            fontSize: "18px",
          }}
        >
          {editorSetting.icons === "show" ? (
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
          ) : (
            <span></span>
          )}

          {children}
        </p>
      );
    case "character":
      return (
        <CharacterComponent
          editorSetting={editorSetting}
          attributes={attributes}
          element={element}
        >
          {children}
        </CharacterComponent>
      );
    case "dialogue":
      return (
        <p
          {...attributes}
          itemID={element.id}
          style={{
            padding: "0px 40px",
            marginBottom: "16px",
            marginTop: "6px",
            textAlign: "start",
            position: "relative",
            width: "70%",
            color: "black",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "Courier",
            fontSize: "18px",
          }}
        >
          {editorSetting.icons === "show" ? (
            <BsFillChatLeftDotsFill
              style={{
                color: "#DCD8E4",
                position: "absolute",
                left: "0",
                top: "4px",
                width: "24px",
                height: "20",
              }}
            />
          ) : (
            <span></span>
          )}

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
            maxWidth: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "6px",
            position: "relative",
            fontFamily: "Courier",
            fontSize: "18px",
          }}
        >
          {editorSetting.icons === "show" ? (
            <span
              style={{
                position: "absolute",
                left: "0",
                top: "3px",
                bottom: "0px",
                width: "5px",
                height: "16px",
                fontWeight: 100,
              }}
            >
              <LeftParenthesesIcon />
            </span>
          ) : (
            <span></span>
          )}

          {children}
          {editorSetting.icons === "show" ? (
            <span
              style={{
                position: "absolute",
                right: "0",
                bottom: "9px",
                width: "6px",
                height: "16px",
                fontWeight: 100,
              }}
            >
              <RightParenthesesIcon />
            </span>
          ) : (
            <span></span>
          )}
        </p>
      );
    case "transition":
      return (
        <p
          {...attributes}
          itemID={element.id}
          style={{
            marginBottom: "32px",
            padding: "0 40px",
            color: "black",
            position: "relative",
            textAlign: "end",
            textTransform: "uppercase",
            fontFamily: "Courier",
            fontSize: "18px",
          }}
        >
          {editorSetting.icons === "show" ? (
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
          ) : (
            <span></span>
          )}
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
            marginBottom: "18px",
            color: "black",
            position: "relative",
            textTransform: "uppercase",
            fontFamily: "Courier",
            fontSize: "18px",
          }}
        >
          {editorSetting.icons === "show" ? (
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
          ) : (
            <span></span>
          )}

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
            marginBottom: "18px",
            color: "black",
            position: "relative",
            fontFamily: "Courier",
            fontSize: "18px",
          }}
        >
          {editorSetting.icons === "show" ? (
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
          ) : (
            <span></span>
          )}
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
            padding: matches ? "30px 56px" : "16px 24px",
            background: "#fff",
          }}
        >
          {children}
        </div>
      );
    }

    default:
      return (
        <p
          style={{
            marginBottom: "3px",
            width: "100%",
            fontFamily: "Courier",
            fontSize: "18px",
          }}
          {...attributes}
        >
          {children}
        </p>
      );
  }
};

export default EditorElement;
