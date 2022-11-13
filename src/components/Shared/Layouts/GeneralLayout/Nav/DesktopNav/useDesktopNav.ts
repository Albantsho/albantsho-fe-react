import useUserStore from "app/user.store";
import shallow from "zustand/shallow";

const useDesktopNav = () => {
  const user = useUserStore((state) => state.user);

  return { user };
};

export default useDesktopNav;
