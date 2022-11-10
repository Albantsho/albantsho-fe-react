import api from "./configs/axios.config";

interface ICreateNewTicketPayload {
  name: string;
  email: string;
  text: string;
}

const useInvite = (controller?: AbortController) => {
  return {
    async createNewTicket(payload: ICreateNewTicketPayload) {
      const res = await api.post("/ticket/create", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useInvite;
