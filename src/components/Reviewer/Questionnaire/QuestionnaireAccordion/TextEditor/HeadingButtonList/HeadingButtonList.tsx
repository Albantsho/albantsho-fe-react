import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  SvgIcon,
  type TypographyProps,
} from "@mui/material";
import { CustomElement } from "interfaces/slate";
import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useSlate } from "slate-react";
import useBlockButton from "../hooks/useBlockButton";

interface IListButtons {
  format: CustomElement["type"];
  option: string;
  variant: TypographyProps["variant"];
}

const listButtons: IListButtons[] = [
  { format: "typography", option: "Normal Text", variant: "body1" },
  { format: "typography", option: "H1", variant: "h1" },
  { format: "typography", option: "H2", variant: "h2" },
  { format: "typography", option: "H3", variant: "h3" },
  { format: "typography", option: "H4", variant: "h4" },
  { format: "typography", option: "H5", variant: "h5" },
  { format: "typography", option: "H6", variant: "h6" },
];

const HeadingButtonList = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const { isBlockActive, toggleBlock } = useBlockButton();
  const editor = useSlate();

  const handleMenuItemClick =
    (
      index: number,
      variant: TypographyProps["variant"],
      format: CustomElement["type"]
    ) =>
    () => {
      setSelectedIndex(index);
      setOpen(false);
      toggleBlock(editor, format, variant);
    };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="text" ref={anchorRef} aria-label="split button">
        <Button>{listButtons[selectedIndex].option}</Button>
        <IconButton
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <SvgIcon color="primary" component={AiOutlineCaretDown} />
        </IconButton>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
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
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {listButtons.map(({ format, option, variant }, index) => {
                    return (
                      <MenuItem
                        key={index}
                        sx={{
                          "&.MuiButtonBase-root": {
                            fontSize:
                              option === "H1"
                                ? "36px"
                                : option === "H2"
                                ? "24px"
                                : option === "H3"
                                ? "20px"
                                : option === "H4"
                                ? "16px"
                                : option === "H5"
                                ? "12px"
                                : option === "H6"
                                ? "8px"
                                : "16px",
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
