import { IconButton, SvgIcon } from "@mui/material";
import { BiUnlink } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import useEmailButton from "./UseEmailButton";

const EmailButton = () => {
  const { isLinkActive, unwrapLink, wrapLink } = useEmailButton();

  return (
    <IconButton
      color={isLinkActive() ? "primary" : "default"}
      className="w-10 h-10"
      onClick={() => {
        if (isLinkActive()) {
          unwrapLink();
          return;
        }
        const email = window.prompt("Enter your email :");
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
        if (email !== null) {
          regex.test(email) ? wrapLink(email) : alert("Email invalid");
        }
      }}
    >
      <SvgIcon
        component={isLinkActive() ? BiUnlink : MdAlternateEmail}
        inheritViewBox
      />
    </IconButton>
  );
};

export default EmailButton;
