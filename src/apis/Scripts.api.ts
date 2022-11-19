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
  conver_page?: string;
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
  return {
    async createNewScript(payload: ICreateNewScriptPayload) {
      const res = await api.post("/script/create", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async addScriptTheme(payload: IAddThemeScriptPayload<string>, id: string) {
      const res = await api.post(`/script/theme/add/${id}`, payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async removeScriptTheme(id: string) {
      const res = await api.delete(`/script/theme/remove/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async updateScript(payload: IUpdateScriptPayload, id: string) {
      const res = await api.post(`/script/update/${id}`, payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async verifyScript(payload: object, id: string) {
      const res = await api.patch(`/script/verify/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async deleteScript(id: string) {
      const res = await api.patch(`/script/delete/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getAllScripts() {
      const res = await api.get("/script/all", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getProducerAllScripts() {
      const res = await api.get("/script/producer/all", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getScript(id: string) {
      const res = await api.get(`/script/${id}`, {
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
      const res = await api.post("/script/rate", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getWriterAllScripts() {
      const res = await api.get("/script/writer/all", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async updateWriterArchiveScript(payload: object, id: string) {
      const res = await api.patch(`/script/update/archive/${id}`, payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async updateWriterListingScript(payload: object, id: string) {
      const res = await api.patch(`/script/update/listing/${id}`, payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getWriterAllListingScripts() {
      const res = await api.get("/script/writer/listing/all", {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useScriptsApi;