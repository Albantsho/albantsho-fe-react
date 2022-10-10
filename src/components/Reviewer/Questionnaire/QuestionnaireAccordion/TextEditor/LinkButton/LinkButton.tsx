import { IconButton, SvgIcon } from "@mui/material";
import { BiUnlink } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import useLinkButton from "./useLinkButton";

const LinkButton = () => {
  const { isLinkActive, unwrapLink, wrapLink } = useLinkButton();

  return (
    <IconButton
      color={isLinkActive() ? "primary" : "default"}
      className="w-10 h-10"
      onClick={() => {
        if (isLinkActive()) {
          unwrapLink();
          return;
        }
        const url = window.prompt("Enter the URL of the link:");
        if (!url) return;
        wrapLink(url);
      }}
    >
      <SvgIcon
        component={isLinkActive() ? BiUnlink : BsLink45Deg}
        inheritViewBox
      />
    </IconButton>
  );
};

export default LinkButton;
