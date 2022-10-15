import { ITable, ITableRow } from "interfaces/slate";
import React, { useState } from "react";
import { Transforms, Editor } from "slate";
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
    const [hasTable] = Editor.nodes(editor, {
      match: (n) => Editor.isBlock(editor, n) && n.type === "table",
    });
    if (hasTable) return;

    const rows: ITableRow[] = Array.from(new Array(+rowsAndColumns.rows)).map(
      (_, i) => ({
        type: "tableRow",
        children: Array.from(new Array(+rowsAndColumns.columns)).map(() => ({
          type: "tableCell",
          children: [{ text: `${+i + 10}` }],
        })),
      })
    );

    const table: ITable = {
      type: "table",
      children: rows,
    };

    Transforms.insertNodes(editor, table);

    Transforms.insertNodes(
      editor,
      [{ type: "typography", children: [{ text: "" }] }],
      { mode: "highest" }
    );

    setRowsAndColumns({
      rows: "",
      columns: "",
    });

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
