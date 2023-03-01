import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IInvite } from "interfaces/invite";
import { IResData } from "interfaces/response";
import { useCallback } from "react";

export interface ICreateNewInvitePayload {
  scriptId: string;
  email: string;
}

export interface IData_getInvites {
  invites: IInvite[];
}

const useInvite = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  const allInvite = useCallback(
    async () => {
      const res = await axiosPrivate.get<IResData<IData_getInvites>>(
        "/invite/all",
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [controller?.signal]
  );

  const rejectInvite = useCallback(
    async (inviteId: string) => {
      const res = await axiosPrivate.patch<IResData<object>>(
        `/invite/reject/${inviteId}`,
        {},
        {
          signal: controller?.signal,
        }
      );
      return res.data;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [controller?.signal]
  );

  const acceptInvite = useCallback(
    async (inviteId: string) => {
      const res = await axiosPrivate.patch<IResData<object>>(
        `/invite/accept/${inviteId}`,
        {},
        {
          signal: controller?.signal,
        }
      );
      return res.data;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [controller?.signal]
  );

  const createNewInvite = useCallback(
    async (payload: ICreateNewInvitePayload) => {
      const res = await axiosPrivate.post<IResData<object>>(
        "/invite/send",
        payload,
        {
          signal: controller?.signal,
        }
      );
      return res.data;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [controller?.signal]
  );

  return {
    allInvite,
    rejectInvite,
    acceptInvite,
    createNewInvite,
  };
};

export default useInvite;
