import useNotificationsApi from "apis/Notifications.api";
import { useState } from "react";

const useProfileNavOnDesktop = () => {
  const [notificationList, setNotificationList] = useState([]);
  const { getUserInformation } = useNotificationsApi();

  const getNotifications = async () => {
    const res = await getUserInformation();
    setNotificationList(res.data);
  };

  return {
    notificationList,
    getNotifications,
  };
};

export default useProfileNavOnDesktop;
