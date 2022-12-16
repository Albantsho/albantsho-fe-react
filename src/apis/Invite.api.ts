import useAxiosPrivate from "hooks/useAxiosPrivate";

interface ICreateNewInvitePayload {
  scriptId: string;
  email: string;
}

const useInvite = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async createNewInvite(payload: ICreateNewInvitePayload) {
      const res = await axiosPrivate.post("/invite/send", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async rejectInvite(payload: object, inviteId: string) {
      const res = await axiosPrivate.patch(
        `/invite/reject/${inviteId}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async allInvite() {
      const res = await axiosPrivate.get("/invite/all", {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useInvite;
