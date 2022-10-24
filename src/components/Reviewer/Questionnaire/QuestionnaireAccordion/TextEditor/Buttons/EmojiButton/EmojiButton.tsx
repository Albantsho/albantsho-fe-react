import {
  Button,
  IconButton,
  SvgIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EmojiPicker, { type EmojiClickData } from "emoji-picker-react";
import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { Transforms } from "slate";
import { useSlate } from "slate-react";

const EmojiButton = () => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const editor = useSlate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  const handleOpenEmojiPicker = () =>
    setOpenEmojiPicker((prevState) => !prevState);

  const handleCloseEmojiPicker = () => setOpenEmojiPicker(false);

  const selectEmoji = (emojiData: EmojiClickData) => {
    Transforms.insertText(editor, emojiData.emoji);
    handleCloseEmojiPicker();
  };

  return (
    <div className="relative w-full lg:w-auto">
      <IconButton
        className="w-10 h-10 hidden lg:flex"
        onClick={handleOpenEmojiPicker}
      >
        <SvgIcon fontSize="small" component={BsEmojiSmile} inheritViewBox />
      </IconButton>
      <Button
        className={`lg:hidden w-full h-10 min-w-[40px]`}
        onClick={handleOpenEmojiPicker}
      >
        <SvgIcon component={BsEmojiSmile} inheritViewBox />
      </Button>
      {openEmojiPicker && (
        <div className="w-20 z-10 absolute top-8 right-[116px] lg:right-24">
          <EmojiPicker width={matches ? 350 : 260} onEmojiClick={selectEmoji} />
        </div>
      )}
    </div>
  );
};

export default EmojiButton;