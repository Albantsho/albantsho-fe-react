import { IconButton, SvgIcon, Popover, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import { useState } from "react";
import AddCollaboratorIcon from "./assets/add-collaborator.svg";

const AddCollaborator = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton
        onClick={handleClick}
        color="success"
        className="ml-auto bg-success-50 w-12 h-12 p-2 self-center mt-1"
      >
        <SvgIcon inheritViewBox component={AddCollaboratorIcon} className="" />
      </IconButton>
      <Popover
        PaperProps={{
          className: "p-7 w-full max-w-sm relative overflow-visible",
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className="top-7"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          className="bg-white w-10 h-10 absolute -top-4 right-0"
        ></div>
        <Typography className="futura font-semibold text-primary-700">
          Add Collaborator
        </Typography>
        <input
          placeholder="Email Address"
          type="text"
          className="outline-none py-3 px-4 bg-tinted-50/25 w-full mt-3 rounded-md placeholder:text-tinted-200"
        />
        <Btn className="mt-4 font-semibold py-2 px-8">Invite</Btn>
      </Popover>
    </>
  );
};

export default AddCollaborator;
