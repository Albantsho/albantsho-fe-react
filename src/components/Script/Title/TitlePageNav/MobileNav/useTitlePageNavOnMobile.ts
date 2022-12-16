import { useState } from "react";

const useTitlePageNavOnMobile = () => {
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return {
    open,
    handleToggleDrawer,
  };
};

export default useTitlePageNavOnMobile;
