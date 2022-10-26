import { useUserStore } from "app/user.store";
import shallow from "zustand/shallow";
import api from "./configs/axios.config";

interface IWithdrawalDetail {
  bank_name: string;
  bank_account: string;
  destination_bank_branch: string;
  bank_code: string;
}

const useProfileApi = (controller?: AbortController) => {
  const useUser = () => {
    const { user } = useUserStore(
      (store) => ({
        user: store.user,
      }),
      shallow
    );
    return { user };
  };

  const {
    user: { token },
  } = useUser();

  return {
    async getUserInformation() {
      const res = await api.get("/profile/user", {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
    async addingWithdrawalDetail(payload: IWithdrawalDetail) {
      const res = await api.post("/profile/bank", payload, {
        signal: controller?.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
  };
};

export default useProfileApi;
