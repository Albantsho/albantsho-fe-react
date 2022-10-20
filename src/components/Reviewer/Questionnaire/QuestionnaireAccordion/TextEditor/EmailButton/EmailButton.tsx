import {
  Button,
  IconButton,
  ListItemButton,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import { BiUnlink } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import AddEmailModal from "./AddEmailModal/AddEmailModal";
import useEmailButton from "./UseEmailButton";

interface IProps {
  inDrawer?: "inDrawer";
}

const EmailButton = ({ inDrawer }: IProps) => {
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
      {!inDrawer ? (
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
        </>
      ) : (
        <ListItemButton
          onClick={handleOpenAddEmailModal}
          TouchRippleProps={{ className: "text-primary-main" }}
          className={`${
            isLinkActive()
              ? "bg-primary-700 text-white hover:text-primary-700"
              : "bg-transparent text-gray-500"
          }  hover:bg-primary-50/50 max-h-[40px]`}
        >
          <SvgIcon
            component={isLinkActive() ? BiUnlink : MdAlternateEmail}
            inheritViewBox
          />
          <ListItemText
            primaryTypographyProps={{
              variant: "h6",
              className: "font-medium futura leading-normal",
            }}
            className="pl-4"
          >
            Email
          </ListItemText>
        </ListItemButton>
      )}

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
