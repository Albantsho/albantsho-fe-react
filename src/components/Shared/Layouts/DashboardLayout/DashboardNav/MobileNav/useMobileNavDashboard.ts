import useNotificationsApi from "apis/Notifications.api";
import { useUserStore } from "app/user.store";
import { useState } from "react";
import shallow from "zustand/shallow";

const useMobileNavDashboard = () => {
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

  const handleToggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const getNotifications = async () => {
    const res = await getUserInformation();
    setNotificationList(res.data);
  };

  return {
    open,
    handleToggleDrawer,
    getNotifications,
    notificationList,
    user,
  };
};

export default useMobileNavDashboard;
