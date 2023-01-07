import useAxiosPrivate from "hooks/useAxiosPrivate";

interface IUploadFileDraftPayload {
  script: File;
}
interface ISaveDraftPayload {
  content: string;
}

interface ISelectOtherDraftPayload {
  draftScriptId: string;
}

interface IUploadCopyrightPayload {
  copyright: File;
}

const useDraftApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async getAllDraft() {
      const res = await axiosPrivate.get("/draft/all", {
        signal: controller?.signal,
      });

      return res.data;
    },
    async getOneDraft(scriptId: string) {
      const res = await axiosPrivate.get(`/draft/${scriptId}`, {
        signal: controller?.signal,
      });

      return res.data;
    },
    async uploadFileDraft(scriptId: string, payload: IUploadFileDraftPayload) {
      const res = await axiosPrivate.post(
        `/draft/upload/${scriptId}`,
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
    async saveFileDraft(scriptId: string, payload: ISaveDraftPayload) {
      const res = await axiosPrivate.patch(`/draft/save/${scriptId}`, payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async selectedDraft(scriptId: string, payload: ISelectOtherDraftPayload) {
      const res = await axiosPrivate.patch(
        `/draft/select/${scriptId}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async uploadCopyright(scriptId: string, payload: IUploadCopyrightPayload) {
      const res = await axiosPrivate.post(
        `/draft/copyright/${scriptId}`,
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
  };
};

export default useDraftApi;
