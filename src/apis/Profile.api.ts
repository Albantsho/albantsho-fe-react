import api from "./configs/axios.config";

interface IWithdrawalDetail {
  bank_name: string;
  bank_account: string;
  destination_bank_branch: string;
  bank_code: string;
}

const useProfileApi = (controller?: AbortController) => {
  return {
    async getUserInformation() {
      const res = await api.get("/profile/user", {
        signal: controller?.signal,
      });

      return res.data;
    },
    async addingWithdrawalDetail(payload: IWithdrawalDetail) {
      const res = await api.post("/profile/bank", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useProfileApi;
