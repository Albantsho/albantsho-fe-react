import { Button, IconButton, SvgIcon } from "@mui/material";
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
        className="w-10 h-10 hidden lg:flex"
        onClick={handleOpenAddEmailModal}
      >
        <SvgIcon
          component={isLinkActive() ? BiUnlink : MdAlternateEmail}
          inheritViewBox
        />
      </IconButton>
      <Button
        className={`${
          isLinkActive()
            ? "bg-primary-700 text-white hover:text-primary-700"
            : "text-primary-700"
        } lg:hidden w-10 h-10 min-w-[40px]`}
        onClick={handleOpenAddEmailModal}
      >
        <SvgIcon
          component={isLinkActive() ? BiUnlink : MdAlternateEmail}
          inheritViewBox
        />
      </Button>
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
