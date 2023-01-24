import useUserStore from "store/user.store";

const useDesktopNav = () => {
  const user = useUserStore((state) => state.user);

  return { user };
};

export default useDesktopNav;
