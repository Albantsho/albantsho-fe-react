import useInvite from "apis/Invite.api";
import useNotification from "apis/Notification.api";
import { IInvite } from "interfaces/invite";
import { INotification } from "interfaces/notification";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import errorHandler from "utils/error-handler";

const useNotificationComponent = () => {
  const { getAllNotifications, seenNotification, deleteNotification } =
    useNotification();
  const { allInvite } = useInvite();
  const [notificationsList, setNotificationsList] = useState<
    Array<INotification>
  >([]);
  const [loading, setLoading] = useState(false);
  const [allInvites, setAllInvites] = useState<Array<IInvite>>([]);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const readNotification = (id: string) => async () => {
    try {
      const res = await seenNotification(id);
      const copiedNotificationList = [...notificationsList];
      const findReadiedNotificationIndex = copiedNotificationList.findIndex(
        (n) => n._id === id
      );
      copiedNotificationList[findReadiedNotificationIndex].read = true;
      setNotificationsList(copiedNotificationList);
      toast.success(res.message);
    } catch (error) {
      errorHandler(error);
    }
  };

  const deleteNotificationFunc = (id: string) => async () => {
    try {
      const res = await deleteNotification(id);
      setNotificationsList(notificationsList.filter((n) => n._id !== id));
      toast.success(res.message);
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
        setNotificationsList(res.data.notifications);
        const resInvites = await allInvite();
        setAllInvites(resInvites.data.invites);
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
    readNotification,
    deleteNotificationFunc,
    allInvites,
  };
};

export default useNotificationComponent;
