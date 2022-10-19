import { Button, IconButton, SvgIcon } from "@mui/material";
import { MdOutlineWindow } from "react-icons/md";
import AddTableModal from "./AddTableModal/AddTableModal";
import useTableButton from "./useTableButton";

const TableButton = () => {
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
      <IconButton
        onClick={handleOpenAddTableModal}
        className="w-10 h-10 hidden lg:flex"
      >
        <SvgIcon fontSize="small" component={MdOutlineWindow} inheritViewBox />
      </IconButton>
      <Button
        className={`lg:hidden w-10 h-10 min-w-[40px]`}
        onClick={handleOpenAddTableModal}
      >
        <SvgIcon fontSize="small" component={MdOutlineWindow} inheritViewBox />
      </Button>
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
