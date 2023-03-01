import useAxios from "hooks/useAxios";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IResData } from "interfaces/response";
import { IWeblog } from "interfaces/weblog";
import { useCallback } from "react";

export interface ICreateNewWeblogPayload {
  title: string;
  description: string;
  content: string | undefined;
  image: string | File;
  slug: string;
}

export interface IUpdateWeblogPayload {
  title?: string;
  description?: string;
  content?: string;
  image?: File;
  archive?: boolean;
  trash?: boolean;
  slug?: string;
}

interface IData_allWeblogs {
  weblogs: IWeblog[];
  currentPage: number;
  pagesCount: number;
}

const useWeblogApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();
  const axios = useAxios();

  const getAllWeblogsForAdmin = useCallback(
    async (query?: string, search?: string) => {
      const res = await axiosPrivate.get<IResData<IData_allWeblogs>>(
        `/weblog/admin/all?limit=10&${query}&search=${search}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [controller?.signal]
  );

  const getAllWeblogs = useCallback(
    async (page: number) => {
      const res = await axiosPrivate.get<IResData<IData_allWeblogs>>(
        `/weblog/all?limit=10&page=${page}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [controller?.signal]
  );

  const getWeblog = useCallback(
    async (slug: string) => {
      const res = await axiosPrivate.get<IResData<{ weblog: IWeblog }>>(
        `/weblog/${slug}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [controller?.signal]
  );

  const createNewWeblog = useCallback(
    async (payload: ICreateNewWeblogPayload) => {
      await axiosPrivate.post("/weblog/create", payload, {
        signal: controller?.signal,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    [controller?.signal]
  );

  const updateWeblog = useCallback(
    async (payload: IUpdateWeblogPayload, id: string) => {
      const res = await axiosPrivate.patch(`/weblog/update/${id}`, payload, {
        signal: controller?.signal,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    },
    [controller?.signal]
  );

  const deleteWeblog = useCallback(
    async (id: string) => {
      const res = await axiosPrivate.delete(`/weblog/delete/${id}`, {
        signal: controller?.signal,
      });
      return res.data;
    },
    [controller?.signal]
  );

  return {
    createNewWeblog,
    updateWeblog,
    deleteWeblog,
    getAllWeblogs,
    getWeblog,
    getAllWeblogsForAdmin,
    // async createNewWeblog(payload: ICreateNewWeblogPayload) {
    //   const res = await axiosPrivate.post("/weblog/create", payload, {
    //     signal: controller?.signal,
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });

    //   return res.data;
    // },

    // async updateWeblog(payload: IUpdateWeblogPayload, id: string) {
    //   const res = await axiosPrivate.patch(`/weblog/update/${id}`, payload, {
    //     signal: controller?.signal,
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });

    //   return res.data;
    // },

    // async deleteWeblog(id: string) {
    //   const res = await axiosPrivate.delete(`/weblog/delete/${id}`, {
    //     signal: controller?.signal,
    //   });

    //   return res.data;
    // },

    // async getAllWeblogs(page: number) {
    //   const res = await axios.get(`/weblog/all?limit=10&page=${page}`, {
    //     signal: controller?.signal,
    //   });

    //   return res.data;
    // },

    // async getWeblog(slug: string | string[]) {
    //   const res = await axiosPrivate.get(`/weblog/${slug}`, {
    //     signal: controller?.signal,
    //   });

    //   return res.data;
    // },

    // async getAllWeblogsForAdmin(query?: string, search?: string) {
    //   const res = await axiosPrivate.get(
    //     `/weblog/admin/all?limit=10&${query}&search=${search}`,
    //     {
    //       signal: controller?.signal,
    //     }
    //   );

    //   return res.data;
    // },
  };
};

export default useWeblogApi;
