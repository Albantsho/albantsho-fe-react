import { IconButton, SvgIcon } from "@mui/material";
import EmojiPicker, { type EmojiClickData } from "emoji-picker-react";
import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { Transforms } from "slate";
import { useSlate } from "slate-react";

const EmojiButton = () => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const editor = useSlate();

  const handleOpenEmojiPicker = () => {
    setOpenEmojiPicker((prevState) => !prevState);
  };

  const handleClose = () => setOpenEmojiPicker(false);

  const selectEmoji = (emojiData: EmojiClickData) => {
    Transforms.insertText(editor, emojiData.emoji);
    handleClose();
  };

  return (
    <div className="relative">
      <IconButton className="w-10 h-10" onClick={handleOpenEmojiPicker}>
        <SvgIcon fontSize="small" component={BsEmojiSmile} inheritViewBox />
      </IconButton>
      {openEmojiPicker && (
        <div className="w-20 z-10 absolute top-8 right-24">
          <EmojiPicker onEmojiClick={selectEmoji} />
        </div>
      )}
    </div>
  );
};

export default EmojiButton;
