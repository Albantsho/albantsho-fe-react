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
  directorApplication: boolean;
  directorApproval: boolean;
  userType: "writer" | "producer" | "admin" | "reviewer";
  country: string;
  productionCompanyName: null | string;
  portfolio: null | string;
  verificationStatus: boolean;
  bankName: string | null;
  bankAccountName: string | null;
  bankAccountNumber: string | null;
  subscriptionPlan: null | string;
  freeze: boolean;
  block: boolean;
  soldScripts: number;
  gender: "male" | "female";
  image: string | null;
  createdAt: string;
  updatedAt: string;
  usdtTrc20Address: string | null;
  wallet: IWallet[];
}
