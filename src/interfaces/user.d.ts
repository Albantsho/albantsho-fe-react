export interface IUser {
  active: boolean;
  country: string;
  email: string;
  email_verified: boolean;
  fullname: string;
  gender: "mail" | "female";
  portfolio: null | string;
  production_company_name: null | string;
}

export interface IUserInformation {
  _id: string;
  fullname: string;
  user_type: string;
  freeze: boolean;
  block: boolean;
}

export interface IUserFullInformation {
  _id: string;
  fullname: string;
  user_type: string;
  freeze: boolean;
  block: boolean;
  email: string;
  sold_scripts: number;
  country: string;
}
