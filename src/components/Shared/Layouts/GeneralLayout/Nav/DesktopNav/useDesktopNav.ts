import useUserStore from "app/user.store";

const useDesktopNav = () => {
  const user = useUserStore((state) => state.user);

  return { user };
};

export default useDesktopNav;
