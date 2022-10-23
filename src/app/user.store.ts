import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IUser } from "interfaces/user";

interface IUserState {
  user: IUser;
  authenticationUser: (user: IUser) => void;
}

const useUserStore = create<IUserState>()(
  devtools(
    persist(
      (set, get) => ({
        user: {
          id: "",
          email: "",
          password: "",
          full_name: "",
          country: "",
          bank_name: "",
          bank_account: "",
          bank_code: "",
          bank_id: "",
          destination_bank_branch: "",
          active: false,
          email_verified: false,
          production_company_name: "",
          portfolio: "",
          verification_status: false,
          subscription_count: 0,
          token: "",
          user_type: "",
          created_at: "",
          updated_at: "",
        },
        authenticationUser: (user) => {
          // set(user);
          get().user = user;
        },
      }),
      {
        name: "user",
        getStorage: () => localStorage,
      }
    )
  )
);

export default useUserStore;
