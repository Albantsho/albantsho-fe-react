import api from "./configs/axios.config";

interface ICreateNewWeblogPayload {
  title: string;
  description: string;
  content: string;
  image: string;
}

interface IUpdateWeblogPayload {
  title?: string;
  description?: string;
  content?: string;
  image?: string;
  archive?: boolean;
  trash?: boolean;
}

const useWeblogApi = (controller?: AbortController) => {
  return {
    async createNewWeblog(payload: ICreateNewWeblogPayload) {
      const res = await api.post("/weblog/create", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async updateWeblog(payload: IUpdateWeblogPayload, id: string) {
      const res = await api.patch(`/weblog/update/${id}`, payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async deleteWeblog(id: string) {
      const res = await api.delete(`/weblog/delete/${id}`, {
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

    async getWeblog(id: string) {
      const res = await api.get(`/weblog/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getAllWeblogsForAdmin() {
      const res = await api.get("/weblog/admin/all", {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useWeblogApi;
