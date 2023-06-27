import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IResData } from "interfaces/response";
import { useCallback } from "react";

interface IUploadFileDraftPayload {
  script: File;
}
interface ISaveDraftPayload {
  content: string;
  scriptSnippet?: string;
}

interface ISelectOtherDraftPayload {
  draftScriptId: string;
}

interface IUploadCopyrightPayload {
  copyright: File;
}

const useDraftApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  const getOneDraft = useCallback(
    async (scriptId: string) => {
      const res = await axiosPrivate.get(
        `/draft/file/${scriptId}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const getOneDraftAsPdf = useCallback(
    async (scriptId: string) => {
      const res = await axiosPrivate.get(`/draft/file/${scriptId}`, {
        responseType: "blob",
        signal: controller?.signal,
        headers: {
          "Content-Type": "application/pdf",
        },
      });

      return res.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const getAllDraft = useCallback(
    async (query?: string) => {
      const res = await axiosPrivate.get(`/draft/all?${query}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const uploadFileDraft = useCallback(
    async (scriptId: string, payload: IUploadFileDraftPayload) => {
      const res = await axiosPrivate.post<IResData<object>>(
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

    [axiosPrivate, controller?.signal]
  );

  const saveFileDraft = useCallback(
    async (scriptId: string, payload: ISaveDraftPayload) => {
      const res = await axiosPrivate.patch<IResData<object>>(
        `/draft/save/${scriptId}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const uploadCopyright = useCallback(
    async (scriptId: string, payload: IUploadCopyrightPayload) => {
      const res = await axiosPrivate.post<IResData<object>>(
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

    [axiosPrivate, controller?.signal]
  );

  const selectedDraft = useCallback(
    async (scriptId: string, payload: ISelectOtherDraftPayload) => {
      const res = await axiosPrivate.patch<IResData<object>>(
        `/draft/select/${scriptId}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const convertPdfToText = useCallback(
    async (scriptId: string) => {
      const res = await axiosPrivate.get<string>(
        `/draft/file/pdf-to-text/${scriptId}`,

        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    [axiosPrivate, controller?.signal]
  );

  return {
    getAllDraft,
    getOneDraft,
    getOneDraftAsPdf,
    uploadFileDraft,
    selectedDraft,
    uploadCopyright,
    saveFileDraft,
    convertPdfToText
  };
};

export default useDraftApi;
