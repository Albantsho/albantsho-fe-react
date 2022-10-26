import useNotificationsApi from "apis/Notifications.api";
import { useUserStore } from "app/user.store";
import { useState } from "react";
import shallow from "zustand/shallow";

const useMobileNavMobile = () => {
  const [open, setOpen] = useState(false);
  const [notificationList, setNotificationList] = useState([]);
  const { getUserInformation } = useNotificationsApi();
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

  const getNotifications = async () => {
    const res = await getUserInformation();
    setNotificationList(res.data);
  };

  const handleToggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return {
    open,
    handleToggleDrawer,
    notificationList,
    getNotifications,
    user,
  };
};

export default useMobileNavMobile;
