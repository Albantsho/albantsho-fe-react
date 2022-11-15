import { IImage } from "interfaces/slate";
import isUrl from "is-url";
import { ChangeEvent, useState } from "react";
import { Transforms, Editor } from "slate";
import { useSlate } from "slate-react";
import imageExtensions from "image-extensions";

const useImageButton = () => {
  const editor = useSlate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openImageList, setOpenImageList] = useState(false);
  const openListImageButton = Boolean(anchorEl);
  const [openAddImage, setOpenAddImage] = useState(false);
  const [imageValue, setImageValue] = useState("");
  const [table] = Editor.nodes(editor, {
    match: (n) => Editor.isBlock(editor, n) && n.type === "table",
  });

  const isImageUrl = (url: string) => {
    if (!url) return false;
    if (!isUrl(url)) return false;
    const ext = new URL(url).pathname.split(".").pop();
    if (ext) return imageExtensions.includes(ext);
  };

  const insertImage = (url: string | ArrayBuffer | null) => {
    const text = { text: "" };
    const image: IImage[] = [{ type: "image", url, children: [text] }];
    Transforms.insertNodes(editor, image);
    Transforms.insertNodes(editor, [
      { type: "typography", children: [{ text: "" }] },
    ]);
  };

  const handleOpenListImageButton = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handleCloseListImageButton = () => setAnchorEl(null);

  const handleOpenImageList = () => setOpenImageList((prevState) => !prevState);

  const handleCloseImageList = () => setOpenImageList(false);

  const handleOpenAddImageModal = () => setOpenAddImage(true);

  const handleCloseAddImageModal = () => setOpenAddImage(false);

  const changeImageValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setImageValue(e.target.value);
  const handleGetUrl = () => {
    if (imageValue && !isImageUrl(imageValue)) {
      alert("URL is not an image");
      return;
    }
    if (table) return;
    imageValue && insertImage(imageValue);
    setImageValue("");
    handleCloseListImageButton();
    handleCloseImageList();
    handleCloseAddImageModal();
  };

  const handleGetPicture = (e: ChangeEvent<HTMLInputElement>) => {
    if (table) return;
    if (e.target.files) {
      const url = URL.createObjectURL(e.target.files[0]);
      const reader = new FileReader();

      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        console.log(reader.result);

        insertImage(reader.result);
        // setImageValue(reader.result);
        console.log(imageValue);
      };
      // url && insertImage(url);
      setAnchorEl(null);
      handleCloseImageList();
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
    openAddImage,
    imageValue,
    handleOpenAddImageModal,
    handleCloseAddImageModal,
    changeImageValue,
    handleOpenImageList,
    handleCloseImageList,
    openImageList,
  };
};

export default useImageButton;
