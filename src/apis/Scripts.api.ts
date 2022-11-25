import useAxiosPrivate from "hooks/useAxiosPrivate";
import api from "./configs/axios.config";

interface ICreateNewScriptPayload {
  title: string;
  tagline: string;
}

interface IAddThemeScriptPayload<T> {
  theme: Array<T>;
}

interface IUpdateScriptPayload {
  title?: string;
  description?: string;
  script_type?: string;
  archived?: boolean;
  page_title?: string;
  based_on?: string;
  copyright?: string;
  content_info?: string;
  image?: string;
  front_page?: string;
  by_line?: string;
  cover_page?: string;
  storyFormat?: string;
  primary_genre?: string;
  primary_cast?: string;
  secondary_cast?: string;
  estimated_budger?: string;
  synopsis?: string;
  story_world?: string;
  act_structure?: string;
  adaption?: string;
  adaption_permission?: string;
  inspiration?: string;
  motivation?: string;
  script_price?: string;
  is_abstract?: string;
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

    async addScriptTheme(payload: IAddThemeScriptPayload<string>, id: string) {
      const res = await axiosPrivate.post(`/script/theme/add/${id}`, payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async removeScriptTheme(id: string) {
      const res = await axiosPrivate.delete(`/script/theme/remove/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async updateScript(payload: IUpdateScriptPayload, id: string) {
      const res = await axiosPrivate.post(`/script/update/${id}`, payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async verifyScript(payload: object, id: string) {
      const res = await axiosPrivate.patch(`/script/verify/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async deleteScript(id: string) {
      const res = await axiosPrivate.patch(`/script/delete/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getAllScripts(query: string) {
      const res = await api.get(`/script/all?${query}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getProducerAllScripts(query: string) {
      const res = await axiosPrivate.get(`/script/producer/all?${query}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getScript(id: string) {
      const res = await axiosPrivate.get(`/script/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async searchScripts(id: string) {
      const res = await api.get(`/script/${id}`, {
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

    async getWriterAllScripts(query?: string) {
      const res = await axiosPrivate.get(`/script/writer/all?${query}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async updateWriterArchiveScript(payload: object, id: string) {
      const res = await axiosPrivate.patch(
        `/script/update/archive/${id}`,
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
