import useAuthApi from "apis/Auth.api";
import { useState } from "react";
import { useQuery } from "react-query";

const useMobileNav = () => {
  const [open, setOpen] = useState(false);
  const { getUserProfile } = useAuthApi();
  const { data: userData, isLoading: loadingGetUser } = useQuery(
    ["home_mobile_nav"],
    () => getUserProfile(),
    {
      retry: 2,
      refetchOnWindowFocus: false
    }
  );

  const handleToggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return {
    open,
    userData,
    handleToggleDrawer,
  };
};

export default useMobileNav;
