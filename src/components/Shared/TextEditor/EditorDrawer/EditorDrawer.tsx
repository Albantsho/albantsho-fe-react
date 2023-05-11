import { Button, Drawer, SvgIcon } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import { BiRedo, BiUndo } from "react-icons/bi";
import TabsList from "./TabsList/TabsList";
import useEditorDrawer from "./useEditorDrawer";

const EditorDrawer = () => {
  const {
    handleCloseOpenDrawer,
    handleOpenDrawer,
    openDrawer,
    handleRedoButton,
    handleUndoButton,
  } = useEditorDrawer();

  return (
    <div
      style={{ position: "-webkit-sticky" }}
      className="w-full flex justify-end gap-2 mb-4 lg:hidden sticky -top-1"
    >
      <Button
        onClick={handleUndoButton}
        className={`lg:hidden w-10 h-10 min-w-[40px]`}
      >
        <SvgIcon component={BiUndo} inheritViewBox />
      </Button>
      <Button
        onClick={handleRedoButton}
        className={`lg:hidden w-10 h-10 min-w-[40px]`}
      >
        <SvgIcon component={BiRedo} inheritViewBox />
      </Button>
      <Button
        onClick={handleOpenDrawer}
        className={`lg:hidden w-10 h-10 min-w-[40px]`}
      >
        <SvgIcon component={AiOutlinePlus} inheritViewBox />
      </Button>
      <Drawer open={openDrawer} className="z-[9999999]" onClose={handleCloseOpenDrawer} anchor="bottom">
        <TabsList />
      </Drawer>
    </div>
  );
};

export default EditorDrawer;
