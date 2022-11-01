import { SvgIcon, Typography } from "@mui/material";
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
  switch (element.type) {
    case "heading":
      return (
        <Typography
          variant="h6"
          className="font-bold px-10 mb-4 text-black relative  w-fit mx-auto"
        >
          <SvgIcon
            className="absolute left-0 top-[6px] bottom-0"
            inheritViewBox
            component={PhotoIcon}
          />
          {children}
        </Typography>
      );
    case "action":
      return (
        <Typography className="pl-10 relative mb-4">
          <SvgIcon
            className="text-gray-300 absolute left-0 top-1 bottom-0"
            inheritViewBox
            fontSize="small"
            component={FaPlay}
          />
          {children}
        </Typography>
      );
    case "character":
      return (
        <Typography
          className={`font-bold px-10 mb-4 text-center relative w-fit mx-auto text-black`}
        >
          <SvgIcon
            className="text-gray-300 absolute left-0 top-0 bottom-0"
            inheritViewBox
            component={FaUser}
          />
          {children}
        </Typography>
      );
    case "dialogue":
      return (
        <Typography className="pl-10 py-4 relative">
          <SvgIcon
            fontSize="small"
            className="text-gray-300 absolute left-0 top-5 bottom-0"
            inheritViewBox
            component={BsFillChatLeftDotsFill}
          />
          <p className="max-w-md mx-auto w-full">{children}</p>
        </Typography>
      );
    case "parentethical":
      return (
        <Typography
          className={`font-bold text-black px-4 mb-4 w-fit mx-auto rounded-md relative`}
        >
          <SvgIcon
            className="absolute left-0 top-[2px] bottom-0 min-w-[0px] flex"
            fontSize="small"
            inheritViewBox
            component={LeftParenthesesIcon}
          />
          {children}
          <SvgIcon
            className="absolute right-0 top-[2px] bottom-0 min-w-[0px] flex"
            fontSize="small"
            inheritViewBox
            component={RightParenthesesIcon}
          />
        </Typography>
      );
    case "transition":
      return (
        <Typography className={`font-bold mb-4 pl-10 text-black relative`}>
          <SvgIcon
            className="text-gray-300 absolute left-0 top-0 bottom-0"
            inheritViewBox
            component={TransitionIcon}
          />
          {children}
        </Typography>
      );
    case "shot":
      return (
        <Typography className={`font-bold pl-10 mb-4 text-black relative`}>
          <SvgIcon
            className="text-gray-300 absolute left-0 top-0 bottom-0"
            inheritViewBox
            component={BsCameraVideoFill}
          />
          {children}
        </Typography>
      );
    case "general":
      return (
        <Typography className={`font-bold pl-10 mb-4 text-black relative`}>
          <SvgIcon
            className="text-gray-300 absolute left-0 top-0 bottom-0"
            inheritViewBox
            component={SiAsana}
          />
          {children}
        </Typography>
      );

    default:
      return (
        <Typography className="mb-3" {...attributes}>
          {children}
        </Typography>
      );
  }
};

export default EditorElement;
