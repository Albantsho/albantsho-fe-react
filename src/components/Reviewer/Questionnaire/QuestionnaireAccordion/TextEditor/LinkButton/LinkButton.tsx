import {
  Button,
  IconButton,
  ListItemButton,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import { BiUnlink } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import { MdOutlineWindow } from "react-icons/md";
import AddLinkModal from "./AddLinkModal/AddLinkModal";
import useLinkButton from "./useLinkButton";

interface IProps {
  inDrawer?: "inDrawer";
}

const LinkButton = ({ inDrawer }: IProps) => {
  const {
    isLinkActive,
    handleCloseAddLinkModal,
    handleOpenAddLinkModal,
    openAddLink,
    linkValue,
    unWrapLinkFunction,
    wrapLinkFunction,
    changeLinkValue,
  } = useLinkButton();

  return (
    <>
      {!inDrawer ? (
        <>
          <IconButton
            color={isLinkActive() ? "primary" : "default"}
            className="w-10 h-10 hidden large"
            onClick={handleOpenAddLinkModal}
          >
            <SvgIcon
              component={isLinkActive() ? BiUnlink : BsLink45Deg}
              inheritViewBox
            />
          </IconButton>
          <Button
            className={`${
              isLinkActive()
                ? "bg-primary-700 text-white hover:text-primary-700"
                : "text-primary-700"
            } lg:hidden w-10 h-10 min-w-[40px]`}
            onClick={handleOpenAddLinkModal}
          >
            <SvgIcon
              component={isLinkActive() ? BiUnlink : BsLink45Deg}
              inheritViewBox
            />
          </Button>
        </>
      ) : (
        <ListItemButton
          onClick={handleOpenAddLinkModal}
          TouchRippleProps={{ className: "text-primary-main" }}
          className={`${
            isLinkActive()
              ? "bg-primary-700 text-white hover:text-primary-700"
              : "bg-transparent text-gray-500"
          }  hover:bg-primary-50/50 max-h-[40px]`}
        >
          <SvgIcon
            component={isLinkActive() ? BiUnlink : BsLink45Deg}
            inheritViewBox
          />
          <ListItemText
            primaryTypographyProps={{
              variant: "h6",
              className: "font-medium futura leading-normal",
            }}
            className="pl-4"
          >
            Link
          </ListItemText>
        </ListItemButton>
      )}

      <AddLinkModal
        unWrapLinkFunction={unWrapLinkFunction}
        wrapLinkFunction={wrapLinkFunction}
        openAddLink={openAddLink}
        handleCloseAddLinkModal={handleCloseAddLinkModal}
        changeLinkValue={changeLinkValue}
        linkValue={linkValue}
      />
    </>
  );
};

export default LinkButton;
