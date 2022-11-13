import { IUser } from "interfaces/user";
import create from "zustand";
import { persist } from "zustand/middleware";

interface IUserState {
  user: IUser;
  authenticationUser: (user: IUser) => void;
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
}

const useUserStore = create<IUserState>()(
  persist(
    (set) => ({
      user: {
        active: false,
        country: "",
        email: "",
        email_verified: false,
        fullname: "",
        gender: "mail",
        portfolio: null,
        production_company_name: null,
      },
      accessToken: "",
      authenticationUser: (user: IUser) => set((state) => ({ ...state, user })),
      setAccessToken: (accessToken: string) =>
        set((state) => {
          console.log(accessToken);

          return { ...state, accessToken };
        }),
    }),
    {
      name: "user",
      getStorage: () => localStorage,
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => !["accessToken"].includes(key)
          )
        ),
    }
  )
);

export default useUserStore;
