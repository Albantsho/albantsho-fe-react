import { useState } from "react";
import { Editor, Path, Transforms } from "slate";
import { useSlate } from "slate-react";

const useTableComponent = () => {
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);
  const editor = useSlate();

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 115,
            mouseY: event.clientY,
          }
        : null
    );
  };

  const handleClose = () => setContextMenu(null);

  const removeTableHandler = () => {
    Transforms.removeNodes(editor, {
      match: (n) => Editor.isBlock(editor, n) && n.type === "table",
    });
    handleClose();
  };

  const removeRowHandler = () => {
    try {
      const [table, tablePath] = Editor.parent(editor, editor.selection!, {
        depth: 2,
      });

      if (
        table.children.length === 1 ||
        tablePath === editor.selection?.anchor.path
      ) {
        removeTableHandler();
        return;
      }
      Transforms.removeNodes(editor, {
        match: (n) => Editor.isBlock(editor, n) && n.type === "tableRow",
      });
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  const removeColumnHandler = () => {
    try {
      const [table, tablePath] = Editor.parent(editor, editor.selection!, {
        depth: 2,
      });

      const [row] = Editor.parent(editor, editor.selection!, {
        depth: 3,
      });

      if (row.children.length === 1) {
        removeTableHandler();
        return;
      }

      const tableCellPath = Path.parent(editor.selection?.anchor.path as Path);
      const cellPath = tableCellPath[tableCellPath.length - 1];
      // INFO: Get the number of rows
      const rowsLength = table.children.length;
      for (let i = 0; i < rowsLength; i++) {
        const location = [...tablePath, i, cellPath];
        Transforms.removeNodes(editor, {
          at: location,
          match: (node) =>
            Editor.isBlock(editor, node) && node.type === "tableCell",
        });
      }
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  return {
    handleContextMenu,
    handleClose,
    removeTableHandler,
    removeRowHandler,
    removeColumnHandler,
    contextMenu,
  };
};

export default useTableComponent;
