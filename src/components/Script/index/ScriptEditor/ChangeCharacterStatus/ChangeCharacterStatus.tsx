import { Menu, MenuItem } from "@mui/material";
import { Transforms } from "slate";
import { useSlate } from "slate-react";

interface IProps {
  openChangeCharacterStatusMenu: boolean;
  closeChangeCharacterStateMenu: () => void;
}

const ChangeCharacterStatus = ({
  openChangeCharacterStatusMenu,
  closeChangeCharacterStateMenu,
}: IProps) => {
  const editor = useSlate();

  const insertVoiceOf = () => {
    Transforms.insertText(editor, "V.O.)");
    closeChangeCharacterStateMenu();
  };
  const insertOffScreen = () => {
    Transforms.insertText(editor, "O.S.)");
    closeChangeCharacterStateMenu();
  };
  const insertOffCamera = () => {
    Transforms.insertText(editor, "O.C.)");
    closeChangeCharacterStateMenu();
  };
  const insertContD = () => {
    Transforms.insertText(editor, "Cont'd)");
    closeChangeCharacterStateMenu();
  };

  return (
    <>
      {openChangeCharacterStatusMenu && (
        <ul
          className="absolute top-0 right-0 bg-black w-[198px] px-4 py-3"
          // sx={{
          //   "& .MuiList-root": {
          //     backgroundColor: "#181025",
          //     width: "198px",
          //     padding: "16px 12px",
          //   },
          // }}
        >
          <MenuItem
            onClick={insertVoiceOf}
            className="text-white hover:bg-primary-700 justify-between rounded-md mb-1 mx-h-[35px]"
          >
            (V.O.)
          </MenuItem>
          <MenuItem
            onClick={insertOffScreen}
            className="text-white hover:bg-primary-700 justify-between rounded-md mb-1 mx-h-[35px]"
          >
            (O.S.)
          </MenuItem>
          <MenuItem
            onClick={insertOffCamera}
            className="text-white hover:bg-primary-700 justify-between rounded-md mb-1 mx-h-[35px]"
          >
            (O.C.)
          </MenuItem>
          <MenuItem
            onClick={insertContD}
            className="text-white hover:bg-primary-700 justify-between rounded-md mb-1 mx-h-[35px]"
          >
            (Cont'd)
          </MenuItem>
        </ul>
      )}
    </>
  );
};

export default ChangeCharacterStatus;
