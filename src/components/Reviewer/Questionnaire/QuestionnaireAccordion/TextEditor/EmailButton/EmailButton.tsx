import { IconButton, SvgIcon } from "@mui/material";
import { BiUnlink } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import AddEmailModal from "./AddEmailModal/AddEmailModal";
import useEmailButton from "./UseEmailButton";

const EmailButton = () => {
  const {
    isLinkActive,
    changeEmailValue,
    emailValue,
    handleCloseAddEmailModal,
    handleOpenAddEmailModal,
    openAddEmail,
    unWrapEmailFunction,
    wrapEmailFunction,
  } = useEmailButton();

  return (
    <>
      <IconButton
        color={isLinkActive() ? "primary" : "default"}
        className="w-10 h-10"
        onClick={handleOpenAddEmailModal}
      >
        <SvgIcon
          component={isLinkActive() ? BiUnlink : MdAlternateEmail}
          inheritViewBox
        />
      </IconButton>
      <AddEmailModal
        changeEmailValue={changeEmailValue}
        emailValue={emailValue}
        handleCloseAddEmailModal={handleCloseAddEmailModal}
        openAddEmail={openAddEmail}
        unWrapEmailFunction={unWrapEmailFunction}
        wrapEmailFunction={wrapEmailFunction}
      />
    </>
  );
};

export default EmailButton;
