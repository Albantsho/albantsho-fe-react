import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  SvgIcon,
} from "@mui/material";
import { BiChevronDown } from "react-icons/bi";
import useHeadingButtonList from "./useHeadingButtonList";

const HeadingButtonList = () => {
  const {
    handleCloseListHeadingButton,
    handleMenuItemClick,
    handleToggleListHeadingButton,
    isBlockActive,
    openListHeadingButton,
    selectedIndex,
    anchorRef,
    editor,
    listButtons,
  } = useHeadingButtonList();

  return (
    <>
      <Button
        sx={{
          "&.MuiButtonBase-root": {
            minWidth: { xs: "130px", lg: "140px" },
            paddingY: { xs: "4px", lg: "20px" },
            textAlign: "start",
            justifyContent: "space-between",
            fontSize: { xs: "13px", lg: "15px" },
            fontWeight: "600",
          },
        }}
        className="text-gray-500 h-8"
        ref={anchorRef}
        onClick={handleToggleListHeadingButton}
        endIcon={
          <SvgIcon fontSize="large" component={BiChevronDown} inheritViewBox />
        }
      >
        {listButtons[selectedIndex].option}
      </Button>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={openListHeadingButton}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleCloseListHeadingButton}>
                <MenuList disablePadding id="split-button-menu" autoFocusItem>
                  {listButtons.map(({ format, option, variant }, index) => {
                    return (
                      <MenuItem
                        key={index}
                        TouchRippleProps={{ className: "text-primary-main" }}
                        className="hover:bg-primary-50/25"
                        sx={{
                          "&.MuiButtonBase-root": {
                            fontSize:
                              option === "Heading 1"
                                ? "26px"
                                : option === "Heading 2"
                                ? "24px"
                                : option === "Heading 3"
                                ? "22px"
                                : option === "Heading 4"
                                ? "20px"
                                : option === "Heading 5"
                                ? "18px"
                                : option === "Heading 6"
                                ? "16px"
                                : "16px",
                            fontWeight: "bold",
                          },
                        }}
                        selected={isBlockActive(editor, format, variant)}
                        onClick={handleMenuItemClick(index, variant, format)}
                      >
                        {option}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default HeadingButtonList;
