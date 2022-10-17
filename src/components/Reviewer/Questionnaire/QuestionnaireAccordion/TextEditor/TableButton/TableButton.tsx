import { IconButton, SvgIcon } from "@mui/material";
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
      <IconButton onClick={handleOpenAddTableModal} className="w-10 h-10">
        <SvgIcon fontSize="small" component={MdOutlineWindow} inheritViewBox />
      </IconButton>
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
