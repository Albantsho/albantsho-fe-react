import { useState } from "react";
import { Editor, Transforms } from "slate";
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
    const [table]: any = Editor.nodes(editor, {
      match: (node) => Editor.isBlock(editor, node) && node.type === "table",
    });

    if (table[0].children.length === 1) {
      removeTableHandler();
      return;
    }

    Transforms.removeNodes(editor, {
      match: (n) => Editor.isBlock(editor, n) && n.type === "tableRow",
    });
    handleClose();
  };

  const removeColumnHandler = () => {
    //
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
