import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SvgIcon,
  Typography,
} from "@mui/material";
import { AiOutlineBorderlessTable } from "react-icons/ai";
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
    addRowHandler,
    addColumnHandler,
  } = useTableComponent();

  if (element.type === "table") {
    return (
      <div
        className="relative mb-2 w-full flex shadow-sm overflow-scroll no-scrollbar"
        onContextMenu={handleContextMenu}
      >
        <table
          style={{ borderCollapse: "collapse", flex: "1 1 0%" }}
          {...attributes}
        >
          <tbody>{children}</tbody>
        </table>
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
          anchorReference="none"
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
            TouchRippleProps={{ className: "text-primary-main" }}
            className="w-full hover:bg-primary-50/25"
            onClick={addRowHandler}
          >
            <ListItemIcon>
              <SvgIcon
                component={AiOutlineBorderlessTable}
                fontSize="small"
                inheritViewBox
              />
            </ListItemIcon>
            <ListItemText>Add Row</ListItemText>
          </MenuItem>
          <MenuItem
            divider
            TouchRippleProps={{ className: "text-primary-main" }}
            className="w-full hover:bg-primary-50/25"
            onClick={addColumnHandler}
          >
            <ListItemIcon>
              <SvgIcon
                component={AiOutlineBorderlessTable}
                fontSize="small"
                inheritViewBox
              />
            </ListItemIcon>
            <ListItemText>Add Column</ListItemText>
          </MenuItem>
          <MenuItem
            TouchRippleProps={{ className: "text-primary-main" }}
            className="w-full hover:bg-primary-50/25"
            onClick={removeTableHandler}
          >
            <ListItemIcon>
              <SvgIcon component={BsTrash} fontSize="small" inheritViewBox />
            </ListItemIcon>
            <ListItemText>Delete Table</ListItemText>
          </MenuItem>
          <MenuItem
            TouchRippleProps={{ className: "text-primary-main" }}
            className="w-full hover:bg-primary-50/25"
            onClick={removeRowHandler}
          >
            <ListItemIcon>
              <SvgIcon component={BsTrash} fontSize="small" inheritViewBox />
            </ListItemIcon>
            <ListItemText>Delete Row</ListItemText>
          </MenuItem>
          <MenuItem
            TouchRippleProps={{ className: "text-primary-main" }}
            className="w-full hover:bg-primary-50/25"
            onClick={removeColumnHandler}
          >
            <ListItemIcon>
              <SvgIcon component={BsTrash} fontSize="small" inheritViewBox />
            </ListItemIcon>
            <ListItemText>Delete Column</ListItemText>
          </MenuItem>
        </Menu>
      </div>
    );
  } else {
    return (
      <p style={{ fontSize: "16px" }} {...attributes}>
        {children}
      </p>
    );
  }
};

export default TableComponent;
