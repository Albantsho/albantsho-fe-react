import { Button, IconButton, SvgIcon } from "@mui/material";
import { BiUnlink } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import AddLinkModal from "./AddLinkModal/AddLinkModal";
import useLinkButton from "./useLinkButton";

const LinkButton = () => {
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
