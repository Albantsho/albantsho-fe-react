import { Button, Menu, SvgIcon } from "@mui/material";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiRedo, BiUndo } from "react-icons/bi";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { HistoryEditor } from "slate-history";
import { useSlate } from "slate-react";

const MoreFeaturesButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMoreList = Boolean(anchorEl);
  const editor = useSlate();

  const handleClickOpenMoreList = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => setAnchorEl(event.currentTarget);

  const handleCloseMoreList = () => setAnchorEl(null);

  const handleRedoButton = () => HistoryEditor.redo(editor);

  const handleUndoButton = () => HistoryEditor.undo(editor);

  return (
    <>
      <Button
        onClick={handleClickOpenMoreList}
        className="w-16 h-10 text-gray-500 min-w-[60px]"
        startIcon={
          <SvgIcon fontSize="medium" inheritViewBox component={AiOutlinePlus} />
        }
        endIcon={
          openMoreList ? (
            <SvgIcon
              fontSize="medium"
              inheritViewBox
              component={MdExpandLess}
            />
          ) : (
            <SvgIcon
              fontSize="medium"
              inheritViewBox
              component={MdOutlineExpandMore}
            />
          )
        }
      />
      <Menu
        anchorEl={anchorEl}
        open={openMoreList}
        onClose={handleCloseMoreList}
      >
        <li className="h-10 w-full gap-5 px-2">
          <Button
            onClick={handleUndoButton}
            className="w-10 h-10 min-w-[40px] mr-1 text-gray-500"
          >
            <SvgIcon component={BiUndo} inheritViewBox />
          </Button>
          <Button
            onClick={handleRedoButton}
            className="w-10 h-10 min-w-[40px] ml-1 text-gray-500"
          >
            <SvgIcon component={BiRedo} inheritViewBox />
          </Button>
        </li>
      </Menu>
    </>
  );
};

export default MoreFeaturesButton;
