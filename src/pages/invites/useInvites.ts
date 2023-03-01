import useInvite, { IData_getInvites } from "apis/Invite.api";
import { IResData } from "interfaces/response";
import { QueryClient, useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import errorHandler from "utils/error-handler";

const queryClient = new QueryClient();

const useInvites = () => {
  const { allInvite, acceptInvite, rejectInvite } = useInvite();

  const { data: invitesData, isLoading: isLoadingInvites } = useQuery<
    IData_getInvites,
    Error
  >("invite", () => allInvite());

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
          toast.success(data.message);
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
          toast.success(data.message);
        },
      }
    );

  const acceptInviteFunc = (inviteId: string) => async () =>
    acceptInviteMutate(inviteId);

  const rejectInviteFunc = (inviteId: string) => async () =>
    rejectInviteMutate(inviteId);

  return {
    rejectInviteFunc,
    acceptInviteFunc,
    isLoadingInvites,
    invitesData,
    loadingAcceptInvite,
    loadingRejectInvite,
  };
};

export default useInvites;
