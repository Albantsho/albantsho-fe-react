import { useState } from "react";

const useNav = () => {
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return {
    open,
    handleToggleDrawer,
  };
};

export default useNav;
