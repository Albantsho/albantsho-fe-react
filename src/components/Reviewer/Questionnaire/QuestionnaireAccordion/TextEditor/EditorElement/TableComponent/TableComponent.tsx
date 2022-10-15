import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SvgIcon,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";
import { BsTrash } from "react-icons/bs";
import { type RenderElementProps } from "slate-react";
import useTableComponent from "./useTableComponent";

const TableComponent = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  const {
    handleClose,
    handleContextMenu,
    removeColumnHandler,
    removeRowHandler,
    removeTableHandler,
    contextMenu,
  } = useTableComponent();

  if (element.type === "table") {
    return (
      <TableContainer
        className="relative mb-2"
        onContextMenu={handleContextMenu}
      >
        <Table>
          <TableBody {...attributes}>{children}</TableBody>
        </Table>
        <Menu
          style={{ top: contextMenu?.mouseY, left: contextMenu?.mouseX }}
          sx={{
            "& .MuiPaper-root": {
              position: "absolute",
              opacity: contextMenu ? "1" : "0",
              transition: "all 1000ms linear",
            },
          }}
          className={`duration-1000`}
          open={contextMenu !== null}
          onClose={handleClose}
          anchorPosition={
            contextMenu !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem
            onClick={() => {
              removeTableHandler();
            }}
          >
            <ListItemIcon>
              <SvgIcon component={BsTrash} fontSize="small" inheritViewBox />
            </ListItemIcon>
            <ListItemText>Delete Table</ListItemText>
          </MenuItem>
          <MenuItem onClick={removeRowHandler}>
            <ListItemIcon>
              <SvgIcon component={BsTrash} fontSize="small" inheritViewBox />
            </ListItemIcon>
            <ListItemText>Delete Row</ListItemText>
          </MenuItem>
          <MenuItem onClick={removeColumnHandler}>
            <ListItemIcon>
              <SvgIcon component={BsTrash} fontSize="small" inheritViewBox />
            </ListItemIcon>
            <ListItemText>Delete Column</ListItemText>
          </MenuItem>
        </Menu>
      </TableContainer>
    );
  } else {
    return <Typography {...attributes}>{children}</Typography>;
  }
};

export default TableComponent;
