import {
  Button,
  IconButton,
  ListItemButton,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import { BiUnlink } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
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
          {isLinkActive() ? (
            <IconButton
              color="primary"
              className="w-10 h-10 hidden large lg:flex"
              onClick={unWrapLinkFunction}
            >
              <SvgIcon component={BiUnlink} inheritViewBox />
            </IconButton>
          ) : (
            <IconButton
              color="default"
              className="w-10 h-10 hidden large lg:flex"
              onClick={handleOpenAddLinkModal}
            >
              <SvgIcon component={BsLink45Deg} inheritViewBox />
            </IconButton>
          )}
          {isLinkActive() ? (
            <Button
              className="bg-primary-700 text-white hover:text-primary-700
              lg:hidden w-full h-10 min-w-[40px]"
              onClick={unWrapLinkFunction}
            >
              <SvgIcon component={BiUnlink} inheritViewBox />
            </Button>
          ) : (
            <Button
              className="text-primary-700 lg:hidden w-full h-10 min-w-[40px]"
              onClick={handleOpenAddLinkModal}
            >
              <SvgIcon component={BsLink45Deg} inheritViewBox />
            </Button>
          )}
        </>
      ) : (
        <>
          {isLinkActive() ? (
            <ListItemButton
              onClick={unWrapLinkFunction}
              TouchRippleProps={{ className: "text-primary-main" }}
              className="bg-primary-700 text-white hover:text-primary-700
              hover:bg-primary-50/50 max-h-[40px]"
            >
              <SvgIcon component={BiUnlink} inheritViewBox />
              <ListItemText
                primaryTypographyProps={{
                  variant: "h6",
                  className: "font-medium futura leading-normal",
                }}
                className="pl-4"
              >
                unLink
              </ListItemText>
            </ListItemButton>
          ) : (
            <ListItemButton
              onClick={handleOpenAddLinkModal}
              TouchRippleProps={{ className: "text-primary-main" }}
              className="bg-transparent text-gray-500 hover:bg-primary-50/50 max-h-[40px]"
            >
              <SvgIcon component={BsLink45Deg} inheritViewBox />
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
        </>
      )}
      <AddLinkModal
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
