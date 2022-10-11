import {
  IconButton,
  ListItemButton,
  Menu,
  MenuItem,
  SvgIcon,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { MdOutlineWindow } from "react-icons/md";
import useTableButton from "./useTableButton";

const TableButton = () => {
  const {
    anchorEl,
    handleChangeValueTable,
    handleCloseMenu,
    handleOpenMenu,
    insertTable,
    open,
    rowsAndColumns,
  } = useTableButton();

  return (
    <>
      <IconButton onClick={handleOpenMenu} className="w-10 h-10">
        <SvgIcon fontSize="small" component={MdOutlineWindow} inheritViewBox />
      </IconButton>
      <Menu
        sx={{ "& .MuiList-root": { py: 0 } }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
      >
        <MenuItem
          disableRipple
          disableTouchRipple
          TouchRippleProps={{ className: "text-primary-main" }}
          className=" hover:bg-primary-50/25 justify-center gap-2 py-2"
        >
          <CustomInput
            value={rowsAndColumns.rows}
            name="rows"
            variant="outlined"
            type="tel"
            placeholder="row"
            onChange={handleChangeValueTable}
            sx={{
              input: {
                width: { xs: 70 },
                height: { xs: 70 },
                boxSizing: "border-box",
                textAlign: "center",
                padding: 0,
              },
            }}
            inputProps={{
              maxLength: 1,
              min: 0,
            }}
          />
          <CustomInput
            value={rowsAndColumns.columns}
            name="columns"
            variant="outlined"
            type="tel"
            placeholder="column"
            onChange={handleChangeValueTable}
            sx={{
              input: {
                width: { xs: 70 },
                height: { xs: 70 },
                boxSizing: "border-box",
                textAlign: "center",
                padding: 0,
              },
            }}
            inputProps={{
              maxLength: 1,
              min: 0,
            }}
          />
        </MenuItem>
        <MenuItem
          disableRipple
          disableTouchRipple
          className=" hover:bg-primary-50/25 py-0"
          disableGutters
        >
          <ListItemButton
            TouchRippleProps={{ className: "text-primary-main" }}
            className="mx-auto hover:bg-primary-50/25 flex flex-col justify-center items-center h-12"
            onClick={insertTable}
          >
            create table
          </ListItemButton>
        </MenuItem>
      </Menu>
    </>
  );
};

export default TableButton;
