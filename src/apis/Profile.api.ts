import { useEffect, useRef } from "react";
import api from "./configs/axios.config";

interface IWithdrawalDetail {
  bank_name: string;
  bank_account: string;
  destination_bank_branch: string;
  bank_code: string;
}

const useProfileApi = (controller?: AbortController) => {
  const token = useRef<string>("");

  useEffect(() => {
    let tk = localStorage.getItem("USER_TOKEN");
    if (tk === null) tk = "";
    token.current = tk;
  }, []);

  return {
    async getUserInformation() {
      const res = await api.get("/profile/user", {
        signal: controller?.signal,
        headers: {
          Token: token.current,
        },
      });

      return res.data;
    },
    async addingWithdrawalDetail(payload: IWithdrawalDetail) {
      const res = await api.post("/profile/user", payload, {
        signal: controller?.signal,
        headers: {
          Token: token.current,
        },
      });

      return res.data;
    },
  };
};

export default useProfileApi;
