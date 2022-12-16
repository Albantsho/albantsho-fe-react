import useAxiosPrivate from "hooks/useAxiosPrivate";
import api from "./configs/axios.config";

interface ICreateNewScriptPayload {
  title: string;
  tagline: string;
}

interface IUpdateCoverPageScriptPayload {
  title: string;
  writer: string;
  dateWrite: string;
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
  tagLine?: string;
  logLine?: string;
  synopsis?: string;
  storyWorld?: string;
  actStructure?: string;
  characterBible?: string;
  storyTopics: string[];
  adaption?: boolean;
  adaptionPermission?: File;
  inspiration?: string;
  motivation?: string;
  price?: number;
  image?: File;
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
      const res = await axiosPrivate.post(
        `/script/update/${id}?${query}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },
    async updateCoverPageScript(payload: object, id: string) {
      const res = await axiosPrivate.post(
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

    async getProducerAllScripts(query: string, search: string) {
      const res = await axiosPrivate.get(
        `/script/producer/all?limit=10&search=${search}&${query}`,
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

    async getWriterAllPublishedScripts() {
      const res = await axiosPrivate.get(`/script/writer/published/all`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getWriterAllUnPublishedScripts() {
      const res = await axiosPrivate.get(`/script/writer/unpublished/all`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getWriterAllInCompletedScripts() {
      const res = await axiosPrivate.get(`/script/writer/incomplete/all`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getWriterAllSoldScripts() {
      const res = await axiosPrivate.get(`/script/writer/sold/all`, {
        signal: controller?.signal,
      });

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

    async updateWriterListingScript(payload: { market: boolean }, id: string) {
      const res = await axiosPrivate.patch(
        `/script/update/listing/${id}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getWriterAllListingScripts() {
      const res = await axiosPrivate.get("/script/writer/listing/all", {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useScriptsApi;
