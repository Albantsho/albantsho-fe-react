import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SvgIcon,
} from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsImageFill, BsUpload } from "react-icons/bs";
import AddImageModal from "./AddImageModal/AddImageModal";
import useImageButton from "./useImageButtonList";

const ImageButton = () => {
  const {
    handleGetPicture,
    handleGetUrl,
    handleOpenListImageButton,
    openListImageButton,
    anchorEl,
    handleCloseListImageButton,
    changeImageValue,
    handleCloseAddImageModal,
    handleOpenAddImageModal,
    imageValue,
    openAddImage,
  } = useImageButton();

  return (
    <>
      <Button
        onClick={handleOpenListImageButton}
        startIcon={<SvgIcon component={BsImageFill} inheritViewBox />}
        endIcon={<SvgIcon component={BiChevronDown} inheritViewBox />}
        className="w-10 h-10 text-gray-500"
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
        <MenuItem
          TouchRippleProps={{ className: "text-primary-main" }}
          className="w-full hover:bg-primary-50/25"
          onClick={handleOpenAddImageModal}
        >
          <ListItemIcon>
            <SvgIcon fontSize="small" component={BsUpload} inheritViewBox />
          </ListItemIcon>
          <ListItemText>Upload from web </ListItemText>
        </MenuItem>
        <MenuItem
          TouchRippleProps={{ className: "text-primary-main" }}
          className="w-full hover:bg-primary-50/25"
        >
          <ListItemIcon>
            <SvgIcon
              fontSize="small"
              component={AiOutlineSearch}
              inheritViewBox
            />
          </ListItemIcon>
          <ListItemText>
            <label htmlFor="upload-image">Upload from system</label>
            <input
              onChange={handleGetPicture}
              type="file"
              id="upload-image"
              className="opacity-0 hidden"
              accept="image/*"
            />
          </ListItemText>
        </MenuItem>
      </Menu>
      <AddImageModal
        changeImageValue={changeImageValue}
        handleCloseAddImageModal={handleCloseAddImageModal}
        handleGetUrl={handleGetUrl}
        imageValue={imageValue}
        openAddImage={openAddImage}
      />
    </>
  );
};

export default ImageButton;
