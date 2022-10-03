import api from "./configs/axios.config";

const useUploadApi = (controller?: AbortController) => {
  return {
    async uploadFiles(payload: string) {
      const res = await api.post("/upload", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useUploadApi;
