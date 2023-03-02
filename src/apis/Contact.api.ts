import useAxios from "hooks/useAxios";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IContact } from "interfaces/contact";
import { IResData } from "interfaces/response";
import { useCallback } from "react";
interface ICreateNewContactPayload {
  email: string;
  name: string;
  message: string;
}

export interface IData_getContacts {
  contacts: IContact[];
  currentPage: number;
  pagesCount: number;
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

  const answerToContact = useCallback(
    async (contactId: string, payload: { answer: string }) => {
      const res = await axios.post<IResData<object>>(
        `/contact/answer/${contactId}`,
        payload,
        {
          signal: controller?.signal,
        }
      );
      return res.data;
    },

    [controller?.signal]
  );

  const allContacts = useCallback(
    async (page: string, answered: string, search: string) => {
      const res = await axiosPrivate.get<IResData<IData_getContacts>>(
        `/contact/all?limit=20&page=${page}&answered=${answered}&search=${search}`,
        {
          signal: controller?.signal,
        }
      );
      return res.data.data;
    },
    [controller?.signal]
  );

  return {
    createNewContact,
    allContacts,
    answerToContact,
  };
};

export default useContact;
