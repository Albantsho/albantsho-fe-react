import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user: {
    id: string;
    email: string;
    password: string;
    full_name: string;
    country: string;
    bank_name: string;
    bank_account: string;
    bank_code: string;
    bank_id: string;
    destination_bank_branch: string;
    active: boolean;
    email_verified: boolean;
    production_company_name: string;
    portfolio: string;
    verification_status: boolean;
    subscription_count: number;
    token: string;
    user_type: string;
    updated_at: string;
    created_at: string;
  };
}

const initialState: UserState = {
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
};

console.log(initialState);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerType: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
      console.log("hello register");
      console.log({ state, action });
    },
    loginType: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
      console.log("hello login");

      console.log({ state, action });
    },
  },
});

export const { registerType, loginType } = userSlice.actions;

export default userSlice.reducer;
