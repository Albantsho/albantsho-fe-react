import useAxiosPrivate from "hooks/useAxiosPrivate";
import api from "./configs/axios.config";
interface ICreateNewContactPayload {
  email: string;
  name: string;
  message: string;
}

const useContact = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async createNewContact(payload: ICreateNewContactPayload) {
      const res = await api.post("/contact/create", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async allContacts() {
      const res = await axiosPrivate.get("/contact/all", {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useContact;
