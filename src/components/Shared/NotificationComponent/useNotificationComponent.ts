import useNotification, { IData_getNotifications } from "apis/Notification.api";
import { IResData } from "interfaces/response";
import { useState } from "react";
import { QueryClient, useMutation, useQuery } from "react-query";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";

const queryClient = new QueryClient();

const useNotificationComponent = () => {
  const { getAllNotifications, seenNotification, deleteNotification } =
    useNotification();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const {
    data: notificationsData,
    isLoading: isLoadingNotifications,
    refetch: refetchNotifications,
  } = useQuery<IData_getNotifications, Error>("notification", () =>
    getAllNotifications(), {
    refetchInterval: 60000
  }
  );


  const { mutate: seenNotificationMutate, isLoading: loadingSeenNotification } =
    useMutation<IResData<object>, Error, string>(
      (notificationId) => seenNotification(notificationId),
      {
        onError: (error) => {
          errorHandler(error);
        },
        onSuccess: (data) => {
          queryClient.invalidateQueries(["notification", "invite"]);
          refetchNotifications();
          successHandler(data.message);
        },
      }
    );

  const {
    mutate: deleteNotificationMutate,
    isLoading: loadingDeleteNotification,
  } = useMutation<IResData<object>, Error, string>(
    (notificationId) => deleteNotification(notificationId),
    {
      onError: (error) => {
        errorHandler(error);
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(["notification", "invite"]);
        refetchNotifications();
        successHandler(data.message);
      },
    }
  );


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const readNotification = (id: string) => async () =>
    seenNotificationMutate(id);

  const deleteNotificationFunc = (id: string) => async () =>
    deleteNotificationMutate(id);

  return {
    anchorEl,
    handleClick,
    handleClose,
    open,
    notificationsData,
    isLoadingNotifications,
    readNotification,
    deleteNotificationFunc,
    loadingSeenNotification,
    loadingDeleteNotification,
  };
};

export default useNotificationComponent;
