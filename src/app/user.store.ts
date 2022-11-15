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
          return { ...state, accessToken };
        }),
    }),
    {
      name: "user",
      getStorage: () => localStorage,
      // partialize: (state) =>
      //   Object.fromEntries(
      //     Object.entries(state).filter(
      //       ([key]) => !["accessToken"].includes(key)
      //     )
      //   ),
      // onRehydrateStorage: (state) => {
      //   console.log("hydration starts");

      //   // optional
      //   return (state, error) => {
      //     console.log(state);
      //     if (error) {
      //       console.log("an error happened during hydration", error);
      //     } else {
      //       console.log("hydration finished");
      //     }
      //   };
      // },
    }
  )
);

export default useUserStore;
