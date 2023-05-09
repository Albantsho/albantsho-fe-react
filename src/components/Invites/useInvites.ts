import useInvite, { IData_getInvites } from "apis/Invite.api";
import useScriptsApi from "apis/Scripts.api";
import { IResData } from "interfaces/response";
import { QueryClient, useMutation, useQuery } from "react-query";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";

const queryClient = new QueryClient();

const useInvites = () => {
  const { allInvite, acceptInvite, rejectInvite } = useInvite();
  const { getAllCollaboratorScripts } = useScriptsApi();

  const {
    data: invitesData,
    isLoading: isLoadingInvites,
    refetch,
  } = useQuery<IData_getInvites, Error>("invite", () => allInvite());

  const {
    data: collaboratorsData,
    refetch: refetchCollaboratorsData,
  } = useQuery("collaborators on", () => getAllCollaboratorScripts());

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
          refetch();
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
          refetch();
          refetchCollaboratorsData();
          successHandler(data.message);
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
    collaboratorsData
  };
};

export default useInvites;
