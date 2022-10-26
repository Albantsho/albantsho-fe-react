import { useState } from "react";

const useOpeningList = () => {
  const [openMenuItem, setOpenMenuItem] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(openMenuItem);

  const handleOpenMenuItem = (event: React.MouseEvent<HTMLElement>) =>
    setOpenMenuItem(event.currentTarget);

  const handleCloseMenuItem = () => setOpenMenuItem(null);

  return {
    openMenu,
    handleOpenMenuItem,
    handleCloseMenuItem,
    openMenuItem,
    setOpenMenuItem,
  };
};

export default useOpeningList;
