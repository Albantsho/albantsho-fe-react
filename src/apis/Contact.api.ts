import useAxios from "hooks/useAxios";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IResData } from "interfaces/response";
import { useCallback } from "react";
interface ICreateNewContactPayload {
  email: string;
  name: string;
  message: string;
}

const useContact = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();
  const axios = useAxios();

  const createNewContact = useCallback(
    async (payload: ICreateNewContactPayload) => {
      const res = await axios.post<IResData<object>>(
        "/contact/create",
        payload,
        {
          signal: controller?.signal,
        }
      );
      return res.data;
    },

    [controller?.signal]
  );

  const allContacts = useCallback(async () => {
    const res = await axiosPrivate.get("/contact/all", {
      signal: controller?.signal,
    });
    return res.data;
  }, [controller?.signal]);

  return {
    createNewContact,
    allContacts,
  };
};

export default useContact;
