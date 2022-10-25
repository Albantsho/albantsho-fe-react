import create from "zustand";
import { devtools } from "zustand/middleware";
import { IUser } from "interfaces/user";

interface IUserState {
  user: IUser;
  registerUser: (user: IUserState) => void;
  loginUser: (user: IUserState) => void;
}

const useUserStore = create(
  devtools<IUserState>((set) => ({
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
    registerUser: (user) => {
      set(user);
    },
    loginUser: (user) => {
      set(user);
    },
  }))
);

export default useUserStore;
