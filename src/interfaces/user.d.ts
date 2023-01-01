import { IWallet } from "./wallet";

export interface IUser {
  active: boolean;
  country: string;
  email: string;
  emailVerified: boolean;
  firstName: string;
  lastName: string;
  gender: "male" | "female";
  userType?: "writer" | "producer" | "admin" | "reviewer";
  subscriptionPlan: null | string;
  portfolio: null | string;
  productionCompanyName: null | string;
  image: null | string;
}

export interface IUserInformation {
  _id: string;
  firstName: string;
  lastName: string;
  userType: string;
  freeze: boolean;
  block: boolean;
}

export interface IUserInformationInAdminPanel {
  _id: string;
  firstName: string;
  lastName: string;
  userType: "writer" | "producer" | "admin" | "reviewer";
  freeze: boolean;
  block: boolean;
  email: string;
  soldScripts: number;
  country: string;
  gender: "male" | "female";
  image: null | string;
}

export interface IUserProfile {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  director_application: boolean;
  director_approval: boolean;
  userType: "writer" | "producer" | "admin" | "reviewer";
  country: string;
  productionCompanyName: null | string;
  portfolio: null | string;
  verification_status: boolean;
  bank_name: string | null;
  bank_account_name: string | null;
  bank_account_number: string | null;
  subscription_count: number | null;
  freeze: boolean;
  block: boolean;
  soldScripts: number;
  gender: "male" | "female";
  image: string | null;
  createdAt: string;
  updatedAt: string;
  wallet: IWallet[];
}
