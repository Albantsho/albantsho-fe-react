import useAuthApi from "apis/Auth.api";
import useUserStore from "app/user.store";
import { useRouter } from "next/router";
import { useState } from "react";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";

const useProfileMenu = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState<null | HTMLElement>(
    null
  );
  const openProfile = Boolean(openProfileMenu);
  const { logoutUser } = useAuthApi();
  const { replace } = useRouter();
  const logOutUser = useUserStore((state) => state.logOutUser);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenProfileMenu(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setOpenProfileMenu(null);
  };

  const logOutUserFunc = async () => {
    try {
      await logoutUser();
      logOutUser();
      useUserStore.persist.clearStorage();
      setTimeout(() => {
        replace(routes.home.url);
      }, 1);
    } catch (error) {
      console.log(error);
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
