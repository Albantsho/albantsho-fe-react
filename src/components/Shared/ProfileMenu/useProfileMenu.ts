import { useState } from "react";

const useProfileMenu = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState<null | HTMLElement>(
    null
  );
  const openProfile = Boolean(openProfileMenu);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenProfileMenu(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setOpenProfileMenu(null);
  };

  return {
    openProfileMenu,
    openProfile,
    handleOpenMenu,
    handleCloseProfileMenu,
  };
};

export default useProfileMenu;
