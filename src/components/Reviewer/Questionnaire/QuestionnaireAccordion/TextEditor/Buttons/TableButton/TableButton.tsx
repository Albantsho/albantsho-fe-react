import {
  Button,
  IconButton,
  ListItemButton,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import { MdOutlineWindow } from "react-icons/md";
import AddTableModal from "./AddTableModal/AddTableModal";
import useTableButton from "./useTableButton";

interface IProps {
  inDrawer?: "inDrawer";
}

const TableButton = ({ inDrawer }: IProps) => {
  const {
    handleChangeValueTable,
    handleCloseAddTableModal,
    handleOpenAddTableModal,
    tableValues,
    insertTable,
    openAddTable,
  } = useTableButton();

  return (
    <>
      {!inDrawer ? (
        <>
          <IconButton
            onClick={handleOpenAddTableModal}
            className="w-10 h-10 hidden lg:flex"
          >
            <SvgIcon
              fontSize="small"
              component={MdOutlineWindow}
              inheritViewBox
            />
          </IconButton>
          <Button
            className={`lg:hidden w-10 h-10 min-w-[40px]`}
            onClick={handleOpenAddTableModal}
          >
            <SvgIcon
              fontSize="small"
              component={MdOutlineWindow}
              inheritViewBox
            />
          </Button>
        </>
      ) : (
        <ListItemButton
          onClick={handleOpenAddTableModal}
          TouchRippleProps={{ className: "text-primary-main" }}
          className="bg-transparent text-gray-500 hover:bg-primary-50/50 max-h-[40px] "
        >
          <SvgIcon component={MdOutlineWindow} inheritViewBox />
          <ListItemText
            primaryTypographyProps={{
              variant: "h6",
              className: "font-medium futura leading-normal",
            }}
            className="pl-4"
          >
            Table
          </ListItemText>
        </ListItemButton>
      )}
      <AddTableModal
        tableValues={tableValues}
        insertTable={insertTable}
        openAddTable={openAddTable}
        handleCloseAddTableModal={handleCloseAddTableModal}
        handleChangeValueTable={handleChangeValueTable}
      />
    </>
  );
};

export default TableButton;
