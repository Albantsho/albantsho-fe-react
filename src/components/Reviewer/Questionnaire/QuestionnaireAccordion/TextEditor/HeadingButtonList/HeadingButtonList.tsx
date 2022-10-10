import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  SvgIcon,
  type TypographyProps,
} from "@mui/material";
import { CustomElement } from "interfaces/slate";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import useHeadingButtonList from "./useHeadingButtonList";

interface IListButtons {
  format: CustomElement["type"];
  option: string;
  variant: TypographyProps["variant"];
}

const listButtons: IListButtons[] = [
  { format: "typography", option: "Normal Text", variant: "body1" },
  { format: "typography", option: "Heading 1", variant: "h1" },
  { format: "typography", option: "Heading 2", variant: "h2" },
  { format: "typography", option: "Heading 3", variant: "h3" },
  { format: "typography", option: "Heading 4", variant: "h4" },
  { format: "typography", option: "Heading 5", variant: "h5" },
  { format: "typography", option: "Heading 6", variant: "h6" },
];

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
  } = useHeadingButtonList();

  return (
    <React.Fragment>
      <Button
        sx={{
          "&.MuiButtonBase-root": {
            maxWidth: "140px",
            width: "100%",
            paddingY: "20px",
            textAlign: "start",
            justifyContent: "space-between",
            fontSize: "18px",
            fontWeight: "600",
          },
        }}
        ref={anchorRef}
        onClick={handleToggleListHeadingButton}
        endIcon={
          <SvgIcon
            fontSize="large"
            color="primary"
            component={BiChevronDown}
            inheritViewBox
          />
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
    </React.Fragment>
  );
};

export default HeadingButtonList;
