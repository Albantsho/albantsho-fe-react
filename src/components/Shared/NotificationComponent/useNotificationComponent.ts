import useInvite, { IData_getInvites } from "apis/Invite.api";
import useNotification, { IData_getNotifications } from "apis/Notification.api";
import useScriptsApi from "apis/Scripts.api";
import { IResData } from "interfaces/response";
import { useState } from "react";
import { QueryClient, useMutation, useQuery } from "react-query";
import useUserStore from "store/user.store";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";

const queryClient = new QueryClient();

const useNotificationComponent = () => {
  const { getAllNotifications, seenNotification, deleteNotification } =
    useNotification();
  const { getAllCollaboratorScripts } = useScriptsApi();
  const { allInvite, acceptInvite, rejectInvite } = useInvite();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const user = useUserStore((state => state.user));

  const {
    data: notificationsData,
    isLoading: isLoadingNotifications,
    refetch: refetchNotifications,
  } = useQuery<IData_getNotifications, Error>("notification", () =>
    getAllNotifications(), {
    refetchInterval: 60000
  }
  );

  const {
    data: invitesData,
    isLoading: isLoadingInvites,
    refetch: refetchInvites,
  } = useQuery<IData_getInvites, Error>("invite", () => allInvite());

  const {
    data: collaboratorsData,
    refetch: refetchCollaboratorsData,
  } = useQuery("collaborators on", () => getAllCollaboratorScripts(), {
    enabled: user.userType === "writer"
  });

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

  const { mutate: acceptInviteMutate, isLoading: loadingAcceptInvite } =
    useMutation<IResData<object>, Error, string>(
      (inviteId) => acceptInvite(inviteId),
      {
        onError: (error) => {
          errorHandler(error);
        },
        onSuccess: (data) => {
          queryClient.invalidateQueries([
            "notification",
            "invite",
            "collaborator",
          ]);
          refetchInvites();
          refetchCollaboratorsData();
          successHandler(data.message);
        },
      }
    );

  const { mutate: rejectInviteMutate, isLoading: loadingRejectInvite } =
    useMutation<IResData<object>, Error, string>(
      (inviteId) => rejectInvite(inviteId),
      {
        onError: (error) => {
          errorHandler(error);
        },
        onSuccess: (data) => {
          queryClient.invalidateQueries([
            "notification",
            "invite",
            "collaborator",
          ]);
          refetchInvites();
          refetchCollaboratorsData();
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

  const acceptInviteFunc = (id: string) => async () => acceptInviteMutate(id);

  const rejectInviteFunc = (id: string) => async () => rejectInviteMutate(id);

  return {
    anchorEl,
    handleClick,
    handleClose,
    open,
    notificationsData,
    isLoadingNotifications,
    isLoadingInvites,
    readNotification,
    deleteNotificationFunc,
    invitesData,
    loadingSeenNotification,
    loadingDeleteNotification,
    acceptInviteFunc,
    rejectInviteFunc,
    loadingAcceptInvite,
    loadingRejectInvite,
    collaboratorsData,
    user
  };
};

export default useNotificationComponent;
