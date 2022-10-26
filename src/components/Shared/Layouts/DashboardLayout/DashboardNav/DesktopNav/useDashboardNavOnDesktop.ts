import useNotificationsApi from "apis/Notifications.api";
import { useState } from "react";

const useDashboardNavOnDesktop = () => {
  const [notificationList, setNotificationList] = useState([]);
  const { getUserInformation } = useNotificationsApi();

  const getNotifications = async () => {
    const res = await getUserInformation();
    setNotificationList(res.data);
  };

  return { getNotifications, notificationList };
};
export default useDashboardNavOnDesktop;
