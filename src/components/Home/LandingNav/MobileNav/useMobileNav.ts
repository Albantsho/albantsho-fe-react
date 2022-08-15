import { useState } from "react";

const useMobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return {
    open,
    handleToggleDrawer,
  };
};

export default useMobileNav;
