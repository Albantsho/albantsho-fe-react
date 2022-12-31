import { IUser } from "interfaces/user";
import create from "zustand";
import { persist } from "zustand/middleware";

interface IUserState {
  user: IUser;
  authenticationUser: (user: IUser) => void;
  logOutUser: () => void;
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
        emailVerified: false,
        firstName: "",
        lastName: "",
        image: null,
        gender: "male",
        userType: "writer",
        portfolio: null,
        productionCompanyName: null,
        subscriptionPlan: null,
      },
      accessToken: "",
      authenticationUser: (user: IUser) => set((state) => ({ ...state, user })),
      logOutUser: () =>
        set((state) => ({
          ...state,
          user: {
            active: false,
            country: "",
            email: "",
            emailVerified: false,
            firstName: "",
            lastName: "",
            gender: "male",
            userType: "writer",
            portfolio: null,
            productionCompanyName: null,
            image: null,
            subscriptionPlan: null,
          },
          accessToken: "",
        })),
      setAccessToken: (accessToken: string) =>
        set((state) => ({ ...state, accessToken })),
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
