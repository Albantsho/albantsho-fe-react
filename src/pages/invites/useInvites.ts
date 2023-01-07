import useInvite from "apis/Invite.api";
import { IInvite } from "interfaces/invite";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import errorHandler from "utils/error-handler";

const useInvites = () => {
  const { allInvite, acceptInvite, rejectInvite } = useInvite();
  const [loading, setLoading] = useState(true);
  const [invitesList, setInvitesList] = useState<Array<IInvite>>([]);

  useEffect(() => {
    async function getInvites() {
      try {
        setLoading(true);
        const res = await allInvite();
        console.log(res);
        setInvitesList(res.data.invites);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }

    getInvites();
  }, []);

  const acceptInviteFunc = (inviteId: string) => async () => {
    try {
      const res = await acceptInvite(inviteId);
      console.log(res);
      const copiedInvitesList = [...invitesList];
      const copiedInvitedIndex = invitesList.findIndex(
        (n) => n._id === inviteId
      );
      copiedInvitesList[copiedInvitedIndex].accepted = true;
      setInvitesList(copiedInvitesList);
      toast.success(res.data.message);
    } catch (error) {
      errorHandler(error);
    }
  };

  const rejectInviteFunc = (inviteId: string) => async () => {
    try {
      const res = await rejectInvite(inviteId);
      setInvitesList(invitesList.filter((i) => i._id !== inviteId));
      console.log(res);
      toast.success(res.data.message);
    } catch (error) {
      errorHandler(error);
    }
  };

  return { rejectInviteFunc, acceptInviteFunc, loading, invitesList };
};

export default useInvites;
