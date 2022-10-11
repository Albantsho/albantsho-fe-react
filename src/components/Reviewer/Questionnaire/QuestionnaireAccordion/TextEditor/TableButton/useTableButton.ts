import { ITableCell, ITableRow, ITable } from "interfaces/slate";
import React, { useState } from "react";
import { Transforms } from "slate";
import { useSlate } from "slate-react";

const useTableButton = () => {
  const [rowsAndColumns, setRowsAndColumns] = useState({
    rows: "",
    columns: "",
  });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const editor = useSlate();

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleCloseMenu = () => setAnchorEl(null);

  const handleChangeValueTable = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const result = e.target.value.replace(/\D/g, "");
    setRowsAndColumns({
      ...rowsAndColumns,
      [e.target.name]: result,
    });
  };

  const insertTable = () => {
    const columns: ITableCell[] = Array.from(
      new Array(+rowsAndColumns.columns)
    ).map(() => ({
      type: "tableCell",
      children: [{ text: "sh" }],
    }));

    console.log(columns);

    const rows: ITableRow[] = Array.from(new Array(+rowsAndColumns.rows)).map(
      () => ({
        type: "tableRow",
        children: columns,
      })
    );

    const table: ITable = {
      type: "table",
      children: rows,
    };
    Transforms.insertNodes(editor, table);
    console.log(rowsAndColumns);
    handleCloseMenu();
  };

  return {
    anchorEl,
    open,
    handleOpenMenu,
    handleCloseMenu,
    handleChangeValueTable,
    insertTable,
    rowsAndColumns,
  };
};

export default useTableButton;
