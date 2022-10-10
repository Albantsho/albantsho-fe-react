import { Button, IconButton, Menu, MenuItem, SvgIcon } from "@mui/material";
import isUrl from "is-url";
import { BsImageFill } from "react-icons/bs";
import { useSlate } from "slate-react";
import imageExtensions from "image-extensions";
import { Transforms } from "slate";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { IImage } from "interfaces/slate";

const ImageButton = () => {
  const editor = useSlate();

  const isImageUrl = (url: string) => {
    if (!url) return false;
    if (!isUrl(url)) return false;
    const ext = new URL(url).pathname.split(".").pop();
    if (ext) return imageExtensions.includes(ext);
  };

  const insertImage = (url: string) => {
    const text = { text: "" };
    const image: IImage = { type: "image", url, children: [text] };
    Transforms.insertNodes(editor, image);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        startIcon={<SvgIcon component={BsImageFill} inheritViewBox />}
        endIcon={<SvgIcon component={BiChevronDown} inheritViewBox />}
        className="w-10 h-10"
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            console.log("my Love");
            const url = window.prompt("Enter the URL of the image:");
            if (url && !isImageUrl(url)) {
              alert("URL is not an image");
              return;
            }
            url && insertImage(url);
            handleClose();
          }}
        >
          upload Image with URL
        </MenuItem>
        <MenuItem>
          <label htmlFor="upload-image">upload Image in system</label>
          <input
            onChange={(e) => {
              // console.log(
              //   "🚀 ~ file: ImageButton.tsx ~ line 77 ~ ImageButton ~ e",
              //   e
              // );
              const url = e.target.value;
              console.log(url);
              url && insertImage(url);
              setAnchorEl(null);
              handleClose();
            }}
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
