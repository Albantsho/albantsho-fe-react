import useAxiosPrivate from "hooks/useAxiosPrivate";
import api from "./configs/axios.config";

interface ICreateNewWeblogPayload {
  title: string;
  description: string;
  content: string | undefined;
  image: string | File;
}

interface IUpdateWeblogPayload {
  title?: string;
  description?: string;
  content?: string;
  image?: File;
  archive?: boolean;
  trash?: boolean;
}

const useWeblogApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async createNewWeblog(payload: ICreateNewWeblogPayload) {
      const res = await axiosPrivate.post("/weblog/create", payload, {
        signal: controller?.signal,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data;
    },

    async updateWeblog(payload: IUpdateWeblogPayload, id: string) {
      const res = await axiosPrivate.patch(`/weblog/update/${id}`, payload, {
        signal: controller?.signal,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data;
    },

    async deleteWeblog(id: string) {
      const res = await axiosPrivate.delete(`/weblog/delete/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getAllWeblogs() {
      const res = await api.get("/weblog/all", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getWeblog(id: string | string[]) {
      const res = await axiosPrivate.get(`/weblog/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getAllWeblogsForAdmin(query?: string, search?: string) {
      const res = await axiosPrivate.get(
        `/weblog/admin/all?${query}&search=${search}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },
  };
};

export default useWeblogApi;
