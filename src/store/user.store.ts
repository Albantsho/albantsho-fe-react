import { IUser } from "interfaces/user";
import create from "zustand";
import { persist } from "zustand/middleware";

interface IUserState {
  user: IUser;
  authenticationUser: (user: IUser) => void;
  logOutUser: () => void;
  updateUserProfile: (
    firstName: string,
    lastName: string,
    image: string
  ) => void;
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
        userType: "producer",
        portfolio: null,
        productionCompanyName: null,
        subscriptionPlan: null,
      },
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
        })),
      updateUserProfile: (firstName: string, lastName: string, image: string) =>
        set((state) => ({
          ...state,
          user: { ...state.user, firstName, lastName, image },
        })),
    }),
    {
      name: "user",
      getStorage: () => localStorage,
    }
  )
);

export default useUserStore;
