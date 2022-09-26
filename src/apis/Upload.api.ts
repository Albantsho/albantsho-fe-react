import api from "./configs/axios.config";

const UploadApi = (controller?: AbortController) => ({
   async uploadFiles(payload:string) {
     const res = await api.post("/upload", payload, {
       signal: controller?.signal,
     });
 
     return res.data;
   },
 });
 
 export default UploadApi;
 