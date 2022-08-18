import { useState } from "react";

const useLandingNav = () => {
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return {
    open,
    handleToggleDrawer,
  };
};

export default useLandingNav;
