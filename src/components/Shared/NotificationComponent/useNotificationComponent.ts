import useInvite from "apis/Invite.api";
import useNotification from "apis/Notification.api";
import { INotification } from "interfaces/notification";
import { useEffect, useState } from "react";
import errorHandler from "utils/error-handler";

const useNotificationComponent = () => {
  const { getAllNotifications } = useNotification();
  const { acceptInvite, rejectInvite } = useInvite();
  const [notificationsList, setNotificationsList] = useState<
    Array<INotification>
  >([]);
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const acceptInviteFunc = (id: string) => async () => {
    try {
      const res = await acceptInvite(id.split(" ")[2]);
    } catch (error) {
      errorHandler(error);
    }
  };

  const rejectInviteFunc = (id: string) => async () => {
    try {
      const res = await rejectInvite(id.split(" ")[2]);
    } catch (error) {
      errorHandler(error);
    }
  };

  useEffect(() => {
    async function getAllNotificationsFunc() {
      try {
        setNotificationsList([]);
        setLoading(true);
        const res = await getAllNotifications();
        console.log(res);

        setNotificationsList(res.data.notifications);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }

    getAllNotificationsFunc();
  }, [anchorEl]);

  return {
    anchorEl,
    handleClick,
    handleClose,
    open,
    notificationsList,
    loading,
    acceptInviteFunc,
    rejectInviteFunc,
  };
};

export default useNotificationComponent;
