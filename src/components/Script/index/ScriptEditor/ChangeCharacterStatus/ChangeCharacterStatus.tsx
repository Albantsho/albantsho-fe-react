import { Menu, MenuItem } from "@mui/material";
interface IProps {
  handleCloseContextMenuCharacterStatus: () => void;
  contextMenuCharacterStatus: {
    mouseX: number;
    mouseY: number;
  } | null;
}

const ChangeCharacterStatus = ({
  handleCloseContextMenuCharacterStatus,
  contextMenuCharacterStatus,
}: IProps) => {
  return (
    <Menu
      open={contextMenuCharacterStatus !== null}
      onClose={handleCloseContextMenuCharacterStatus}
      anchorReference="anchorPosition"
      anchorPosition={
        contextMenuCharacterStatus !== null
          ? {
              top: contextMenuCharacterStatus.mouseY,
              left: contextMenuCharacterStatus.mouseX,
            }
          : undefined
      }
      sx={{
        "& .MuiList-root": {
          backgroundColor: "#181025",
          width: "198px",
          padding: "16px 12px",
        },
      }}
    >
      <MenuItem className="text-white hover:bg-primary-700 justify-between rounded-md mb-1 mx-h-[35px]">
        (V.O.)
      </MenuItem>
      <MenuItem className="text-white hover:bg-primary-700 justify-between rounded-md mb-1 mx-h-[35px]">
        (O.S.)
      </MenuItem>
      <MenuItem className="text-white hover:bg-primary-700 justify-between rounded-md mb-1 mx-h-[35px]">
        (O.C.)
      </MenuItem>
      <MenuItem className="text-white hover:bg-primary-700 justify-between rounded-md mb-1 mx-h-[35px]">
        (Cont'd)
      </MenuItem>
    </Menu>
  );
};

export default ChangeCharacterStatus;
