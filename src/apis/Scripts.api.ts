import useAxiosPrivate from "hooks/useAxiosPrivate";
import api from "./configs/axios.config";

interface ICreateNewScriptPayload {
  title: string;
  tagline: string;
}

interface IUpdateCoverPageScriptPayload {
  title: string;
  writtenBy: string[];
  basedOn: string;
  draftDate: string;
}

interface IUpdateScriptPayload {
  scriptFormat?: string;
  storyFormat?: string;
  title?: string;
  primaryGenre?: string;
  secondaryGenre: string;
  primaryCast?: string;
  secondaryCast?: string;
  estimatedBudget?: string;
  tagline?: string;
  logLine?: string;
  synopsis?: string;
  storyWorld?: string;
  actStructure?: string;
  characterBible?: string;
  storyTopics: string[];
  adaption?: boolean;
  inspiration?: string;
  motivation?: string;
  progress: number;
}

interface IUpdateScriptImagePayload {
  image: File;
}
interface IUpdateAdaptionPermissionPayload {
  adaptionPermission: File;
}

interface IGiveRateToScriptPayload {
  scriptId: string;
  rate: string;
}

const useScriptsApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async createNewScript(payload: ICreateNewScriptPayload) {
      const res = await axiosPrivate.post("/script/create", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async updateScript(
      payload: IUpdateScriptPayload,
      id: string,
      query?: string
    ) {
      const res = await axiosPrivate.patch(
        `/script/update/${id}?${query}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },
    async updateScriptImage(id: string, payload: IUpdateScriptImagePayload) {
      const res = await axiosPrivate.post(`/script/image/${id}`, payload, {
        signal: controller?.signal,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data;
    },
    async updateAdaptionPermission(
      id: string,
      payload: IUpdateAdaptionPermissionPayload
    ) {
      const res = await axiosPrivate.post(
        `/script/adaptionPermission/${id}`,
        payload,
        {
          signal: controller?.signal,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return res.data;
    },
    async updateCoverPageScript(
      payload: IUpdateCoverPageScriptPayload,
      id: string
    ) {
      const res = await axiosPrivate.patch(
        `/script/update/coverpage/${id}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async verifyScript(id: string) {
      const res = await axiosPrivate.patch(
        `/script/verify/${id}`,
        {},
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async deleteScript(id: string) {
      const res = await axiosPrivate.delete(`/script/delete/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getAllScripts(query: string) {
      const res = await api.get(`/script/all?limit=10&${query}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getProducerAllScripts(search: string) {
      const res = await axiosPrivate.get(
        `/script/producer/all?search=${search}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getScript(id: string) {
      const res = await axiosPrivate.get(`/script/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async searchScripts(search: string) {
      const res = await api.get(`/script/search?search=${search}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async giveRateToScript(payload: IGiveRateToScriptPayload) {
      const res = await axiosPrivate.post("/script/rate", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getWriterAllScripts(query: string, search?: string) {
      const res = await axiosPrivate.get(
        `/script/writer/all?limit=10&${query}&search=${search}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getWriterAllPublishedScripts(searchQuery: string) {
      const res = await axiosPrivate.get(
        `/script/writer/published/all?search=${searchQuery}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getWriterAllUnPublishedScripts(searchQuery: string) {
      const res = await axiosPrivate.get(
        `/script/writer/unpublished/all?search=${searchQuery}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getWriterAllInCompletedScripts(searchQuery: string) {
      const res = await axiosPrivate.get(
        `/script/writer/incomplete/all?search=${searchQuery}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getWriterAllSoldScripts(searchQuery: string) {
      const res = await axiosPrivate.get(
        `/script/writer/sold/all?search=${searchQuery}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async updateWriterArchiveScript(payload: { archive: boolean }, id: string) {
      const res = await axiosPrivate.patch(
        `/script/update/archive/${id}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async updatePublishedScript(payload: { published: boolean }, id: string) {
      const res = await axiosPrivate.patch(
        `/script/update/publish/${id}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async listAllCollaborators(scriptId: string) {
      const res = await axiosPrivate.get(`/script/collaborators/${scriptId}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getCoverPageInformation(scriptId: string) {
      const res = await axiosPrivate.get(`/script/coverpage/${scriptId}`, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useScriptsApi;
