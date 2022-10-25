// import create from "zustand";
// import { devtools, persist } from "zustand/middleware";
// import { IUser } from "interfaces/user";

// interface IUserState {
//   user: IUser;
//   authenticationUser: (user: IUser) => void;
//   logOutUser: () => void;
// }

// const useUserStore = create<IUserState>()(
// devtools(
//   persist(
//       (set, get) => ({
// user: {
//   id: "",
//   email: "",
//   password: "",
//   full_name: "",
//   country: "",
//   bank_name: "",
//   bank_account: "",
//   bank_code: "",
//   bank_id: "",
//   destination_bank_branch: "",
//   active: false,
//   email_verified: false,
//   production_company_name: "",
//   portfolio: "",
//   verification_status: false,
//   subscription_count: 0,
//   token: "",
//   user_type: "",
//   created_at: "",
//   updated_at: "",
// },
// authenticationUser: (user) => {
//   set(user);
//   get().user = user;
// },
// logOutUser: () => {
//   localStorage.removeItem("user");
// },
//       }),
// {
//   name: "user",
//   getStorage: () => localStorage,
// }
//     )
//   )
// );

// export default useUserStore;

import { IUser } from "interfaces/user";
import { useLayoutEffect } from "react";
import create, { UseBoundStore } from "zustand";
import createContext from "zustand/context";
import { combine, persist } from "zustand/middleware";

interface IGetDefaultInitialState {
  user: IUser;
}

let store: any;

type InitialState = ReturnType<typeof getDefaultInitialState>;
type UseStoreState = typeof initializeStore extends (
  ...args: never
) => UseBoundStore<infer T>
  ? T
  : never;

const getDefaultInitialState = (): IGetDefaultInitialState => ({
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
});

const zustandContext = createContext<UseStoreState>();
export const Provider = zustandContext.Provider;
export const useUserStore = zustandContext.useStore;

export const initializeStore = (preloadedState = {}) => {
  return create(
    persist(
      combine(
        { ...getDefaultInitialState(), ...preloadedState },
        (set, get) => ({
          authenticationUser: (user: IUser) => {
            set({ ...set, user });
            get().user = user;
          },
          logOutUser: () => {
            localStorage.removeItem("user");
          },
        })
      ),
      {
        name: "user",
        getStorage: () => localStorage,
      }
    )
  );
};

export const useCreateStore = (serverInitialState: InitialState) => {
  // For SSR & SSG, always use a new store.
  if (typeof window === "undefined") {
    return () => initializeStore(serverInitialState);
  }

  const isReusingStore = Boolean(store);
  // For CSR, always re-use same store.
  store = store ?? initializeStore(serverInitialState);
  // And if initialState changes, then merge states in the next render cycle.
  //
  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    // serverInitialState is undefined for CSR pages. It is up to you if you want to reset
    // states on CSR page navigation or not. I have chosen not to, but if you choose to,
    // then add `serverInitialState = getDefaultInitialState()` here.
    if (serverInitialState && isReusingStore) {
      store.setState(
        {
          // re-use functions from existing store
          ...store.getState(),
          // but reset all other properties.
          ...serverInitialState,
        },
        true // replace states, rather than shallow merging
      );
    }
  });

  return () => store;
};

// devtools(
//   persist(
//     combine(
//       { ...getDefaultInitialState(), ...preloadedState },
//       (set, get) => ({
//         authenticationUser: (user: IUser) => {
//           set({ ...set, user });
//           get().user = user;
//         },
//         logOutUser: () => {
//           localStorage.removeItem("user");
//         },
//       })
//     )
//   )
// );
