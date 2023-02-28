import useAxios from "hooks/useAxios";
import useAxiosPrivate from "hooks/useAxiosPrivate";
interface ICreateNewContactPayload {
  email: string;
  name: string;
  message: string;
}

const useContact = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();
  const axios = useAxios();

  return {
    async createNewContact(payload: ICreateNewContactPayload) {
      const res = await axios.post("/contact/create", payload, {
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
