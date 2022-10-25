import { useUserStore } from "app/user.store";
import shallow from "zustand/shallow";

const useDesktopNav = () => {
  const useUser = () => {
    const { user } = useUserStore(
      (store) => ({
        user: store.user,
      }),
      shallow
    );
    return { user };
  };
  const { user } = useUser();

  return { user };
};

export default useDesktopNav;
