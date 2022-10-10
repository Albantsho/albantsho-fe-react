import { IImage } from "interfaces/slate";
import isUrl from "is-url";
import { ChangeEvent, useState } from "react";
import { Transforms } from "slate";
import { useSlate } from "slate-react";
import imageExtensions from "image-extensions";

const useImageButton = () => {
  const editor = useSlate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openListImageButton = Boolean(anchorEl);

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

  const handleOpenListImageButton = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseListImageButton = () => {
    setAnchorEl(null);
  };

  const handleGetUrl = () => {
    const url = window.prompt("Enter the URL of the image:");
    if (url && !isImageUrl(url)) {
      alert("URL is not an image");
      return;
    }
    url && insertImage(url);
    handleCloseListImageButton();
  };

  const handleGetPicture = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const url = URL.createObjectURL(e.target.files[0]);
      url && insertImage(url);
      setAnchorEl(null);
      handleCloseListImageButton();
    } else {
      alert("Image not found");
    }
  };

  return {
    openListImageButton,
    handleOpenListImageButton,
    handleGetUrl,
    handleGetPicture,
    handleCloseListImageButton,
    anchorEl,
  };
};

export default useImageButton;
