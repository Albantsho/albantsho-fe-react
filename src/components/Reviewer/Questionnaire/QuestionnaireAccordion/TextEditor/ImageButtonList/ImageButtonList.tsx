import { Button, Menu, MenuItem, SvgIcon } from "@mui/material";
import { BiChevronDown } from "react-icons/bi";
import { BsImageFill } from "react-icons/bs";
import useImageButton from "./useImageButtonList";

const ImageButton = () => {
  const {
    handleGetPicture,
    handleGetUrl,
    handleOpenListImageButton,
    openListImageButton,
    anchorEl,
    handleCloseListImageButton,
  } = useImageButton();

  return (
    <>
      <Button
        onClick={handleOpenListImageButton}
        startIcon={<SvgIcon component={BsImageFill} inheritViewBox />}
        endIcon={<SvgIcon component={BiChevronDown} inheritViewBox />}
        className="w-10 h-10"
      />
      <Menu
        anchorEl={anchorEl}
        open={openListImageButton}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handleCloseListImageButton}
      >
        <MenuItem onClick={handleGetUrl}>upload Image with URL</MenuItem>
        <MenuItem>
          <label htmlFor="upload-image">upload Image in system</label>
          <input
            onChange={handleGetPicture}
            type="file"
            id="upload-image"
            className="opacity-0 hidden"
            accept="image/*"
          />
        </MenuItem>
      </Menu>
    </>
  );
};

export default ImageButton;
