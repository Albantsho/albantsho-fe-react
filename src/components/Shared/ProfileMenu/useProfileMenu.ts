import useAuthApi from "apis/Auth.api";
import { useRouter } from "next/router";
import { useState } from "react";
import errorHandler from "utils/error-handler";
import routes from "utils/routes";

const useProfileMenu = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState<null | HTMLElement>(
    null
  );
  const openProfile = Boolean(openProfileMenu);
  const { logoutUser } = useAuthApi();
  const { replace } = useRouter();

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenProfileMenu(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setOpenProfileMenu(null);
  };

  const logOutUserFunc = async () => {
    try {
      await logoutUser();
      replace(routes.home.url)
    } catch (error) {
      errorHandler(error);
    }
  };

  return {
    openProfileMenu,
    openProfile,
    handleOpenMenu,
    handleCloseProfileMenu,
    logOutUserFunc, 
  };
};

export default useProfileMenu;
