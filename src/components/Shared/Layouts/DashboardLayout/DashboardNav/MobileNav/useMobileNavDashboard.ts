import useNotificationsApi from "apis/Notifications.api";
import { useState } from "react";

const useMobileNavDashboard = () => {
  const [open, setOpen] = useState(false);
  const [notificationList, setNotificationList] = useState([]);
  const { getUserInformation } = useNotificationsApi();

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
  };
};

export default useMobileNavDashboard;
