import { ITable, ITableRow } from "interfaces/slate";
import React, { useState } from "react";
import { Transforms, Editor } from "slate";
import { useSlate } from "slate-react";

const useTableButton = () => {
  const [tableValues, setTableValues] = useState({
    rows: "",
    columns: "",
  });
  const [openAddTable, setOpenAddTable] = useState(false);
  const editor = useSlate();

  const handleOpenAddTableModal = () => setOpenAddTable(true);

  const handleCloseAddTableModal = () => setOpenAddTable(false);

  const handleChangeValueTable = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const result = e.target.value.replace(/\D/g, "");
    setTableValues({
      ...tableValues,
      [e.target.name]: result,
    });
  };

  const insertTable = () => {
    const [hasTable] = Editor.nodes(editor, {
      match: (n) => Editor.isBlock(editor, n) && n.type === "table",
    });
    if (hasTable || tableValues.rows === "0" || !tableValues.rows) return;
    if (tableValues.columns === "0" || !tableValues.columns) return;

    const rows: ITableRow[] = Array.from(new Array(+tableValues.rows)).map(
      () => ({
        type: "tableRow",
        children: Array.from(new Array(+tableValues.columns)).map(() => ({
          type: "tableCell",
          children: [{ text: "" }],
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

    setTableValues({
      rows: "",
      columns: "",
    });
    handleCloseAddTableModal();
  };

  return {
    openAddTable,
    handleOpenAddTableModal,
    handleChangeValueTable,
    insertTable,
    handleCloseAddTableModal,
    tableValues,
  };
};

export default useTableButton;
