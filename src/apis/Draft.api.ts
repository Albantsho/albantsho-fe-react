import useAxiosPrivate from "hooks/useAxiosPrivate";

interface IUploadFileDraftPayload {
  content: string | File;
}

interface ISelectOtherDraftPayload {
  draftScriptId: string;
}

interface IUploadCopyrightPayload {
  content: File;
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
        }
      );

      return res.data;
    },
    async saveFileDraft(scriptId: string, payload: IUploadFileDraftPayload) {
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
      const res = await axiosPrivate.patch(
        `/draft/copyright/${scriptId}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },
  };
};

export default useDraftApi;
