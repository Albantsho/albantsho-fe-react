import {
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SvgIcon,
} from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsImageFill, BsUpload } from "react-icons/bs";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import AddImageModal from "./AddImageModal/AddImageModal";
import useImageButton from "./useImageButtonList";

interface IProps {
  inDrawer?: "inDrawer";
}

const ImageButton = ({ inDrawer }: IProps) => {
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
    handleOpenImageList,
    openImageList,
  } = useImageButton();

  return (
    <>
      {!inDrawer ? (
        <>
          <Button
            onClick={handleOpenListImageButton}
            startIcon={<SvgIcon component={BsImageFill} inheritViewBox />}
            endIcon={<SvgIcon component={BiChevronDown} inheritViewBox />}
            className="w-10 h-10 lg:text-gray-500 text-primary-700"
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
        </>
      ) : (
        <>
          <ListItemButton
            onClick={handleOpenImageList}
            TouchRippleProps={{ className: "text-primary-main" }}
            className="bg-transparent text-gray-500 hover:bg-primary-50/50 max-h-[40px]"
          >
            <SvgIcon component={BsImageFill} inheritViewBox />
            <ListItemText
              primaryTypographyProps={{
                variant: "h6",
                className: "font-medium futura leading-normal",
              }}
              className="pl-4"
            >
              Image
            </ListItemText>
            {openImageList ? (
              <SvgIcon fontSize="medium" component={MdExpandLess} />
            ) : (
              <SvgIcon fontSize="medium" component={MdOutlineExpandMore} />
            )}
          </ListItemButton>
          <Collapse in={openImageList}>
            <List>
              <ListItemButton
                onClick={handleOpenAddImageModal}
                TouchRippleProps={{ className: "text-primary-main" }}
                className="bg-transparent text-gray-500 hover:bg-primary-50/50 max-h-[40px]"
              >
                <SvgIcon component={BsUpload} inheritViewBox />
                <ListItemText
                  primaryTypographyProps={{
                    variant: "h6",
                    className: "font-medium futura leading-normal",
                  }}
                  className="pl-4"
                >
                  Upload from web
                </ListItemText>
              </ListItemButton>
              <ListItemButton
                TouchRippleProps={{ className: "text-primary-main" }}
                className="bg-transparent text-gray-500 hover:bg-primary-50/50 max-h-[40px]"
              >
                <SvgIcon component={AiOutlineSearch} inheritViewBox />
                <ListItemText
                  primaryTypographyProps={{
                    variant: "h6",
                    className: "font-medium futura leading-normal",
                  }}
                  className="pl-4"
                >
                  <label htmlFor="upload-image">Upload from system</label>
                  <input
                    onChange={handleGetPicture}
                    type="file"
                    id="upload-image"
                    className="opacity-0 hidden"
                    accept="image/*"
                  />
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>
        </>
      )}
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
