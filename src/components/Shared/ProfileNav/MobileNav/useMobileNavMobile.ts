import useNotificationsApi from "apis/Notifications.api";
import { useState } from "react";

const useMobileNavMobile = () => {
  const [open, setOpen] = useState(false);
  const [notificationList, setNotificationList] = useState([]);
  const { getUserInformation } = useNotificationsApi();

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
  };
};

export default useMobileNavMobile;
