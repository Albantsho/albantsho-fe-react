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
    isEmailActive,
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
          {isEmailActive() ? (
            <IconButton
              color="primary"
              className="w-10 h-10 hidden lg:flex"
              onClick={unWrapEmailFunction}
            >
              <SvgIcon component={BiUnlink} inheritViewBox />
            </IconButton>
          ) : (
            <IconButton
              color="default"
              className="w-10 h-10 hidden lg:flex"
              onClick={handleOpenAddEmailModal}
            >
              <SvgIcon component={MdAlternateEmail} inheritViewBox />
            </IconButton>
          )}
          {isEmailActive() ? (
            <Button
              className="bg-primary-700 text-white hover:text-primary-700 lg:hidden w-full h-10 min-w-[40px]"
              onClick={unWrapEmailFunction}
            >
              <SvgIcon component={BiUnlink} inheritViewBox />
            </Button>
          ) : (
            <Button
              className="text-primary-700 lg:hidden w-full h-10 min-w-[40px]"
              onClick={handleOpenAddEmailModal}
            >
              <SvgIcon component={MdAlternateEmail} inheritViewBox />
            </Button>
          )}
        </>
      ) : (
        <>
          {isEmailActive() ? (
            <ListItemButton
              onClick={unWrapEmailFunction}
              TouchRippleProps={{ className: "text-primary-main" }}
              className="bg-primary-700 text-white hover:text-primary-700 hover:bg-primary-50/50 max-h-[40px]"
            >
              <SvgIcon component={BiUnlink} inheritViewBox />
              <ListItemText
                primaryTypographyProps={{
                  variant: "h6",
                  className: "font-medium futura leading-normal",
                }}
                className="pl-4"
              >
                unLink Email
              </ListItemText>
            </ListItemButton>
          ) : (
            <ListItemButton
              onClick={handleOpenAddEmailModal}
              TouchRippleProps={{ className: "text-primary-main" }}
              className="bg-transparent text-gray-500 hover:bg-primary-50/50 max-h-[40px]"
            >
              <SvgIcon component={MdAlternateEmail} inheritViewBox />
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
        </>
      )}
      <AddEmailModal
        changeEmailValue={changeEmailValue}
        emailValue={emailValue}
        handleCloseAddEmailModal={handleCloseAddEmailModal}
        openAddEmail={openAddEmail}
        wrapEmailFunction={wrapEmailFunction}
      />
    </>
  );
};

export default EmailButton;
