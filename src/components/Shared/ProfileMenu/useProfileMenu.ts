import useAuthApi from "apis/Auth.api";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";
import routes from "utils/routes";

const useProfileMenu = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState<null | HTMLElement>(
    null
  );
  const openProfile = Boolean(openProfileMenu);
  const { logoutUser } = useAuthApi();
  const { replace } = useRouter();
  const { getUserProfile } = useAuthApi();
  const { data: userData, isLoading: loadingGetUser } = useQuery(
    ["user_profile"],
    () => getUserProfile(),
    {
      retry: 2,
      refetchOnWindowFocus: false,
    }
  );

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
    profileData:userData?.profile
  };
};

export default useProfileMenu;
