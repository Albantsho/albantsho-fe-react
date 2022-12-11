import useAxiosPrivate from "hooks/useAxiosPrivate";

interface IUpdateDraftPayload {
  title: string;
  description: string;
  script_type: string;
  front_page: string;
  archived: boolean;
  page_title: string;
  by_line: string;
  based_on: string;
  cover_page: string;
}

interface IUploadFileDraftPayload {
  file: string;
}

const useDraftApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async getAllDraft() {
      const res = await axiosPrivate.get("/draft/all", {
        signal: controller?.signal,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data;
    },
    async getOneDraft(draftId: string) {
      const res = await axiosPrivate.get(`/draft/${draftId}`, {
        signal: controller?.signal,
      });

      return res.data;
    },
    async updateDraft(draftId: string, payload: IUpdateDraftPayload) {
      const res = await axiosPrivate.patch(
        `/draft/update/${draftId}`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },
    async uploadFileDraft(draftId: string, payload: IUploadFileDraftPayload) {
      const res = await axiosPrivate.post(`/draft/upload/${draftId}`, payload, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useDraftApi;
