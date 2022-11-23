export interface IUser {
  active: boolean;
  country: string;
  email: string;
  email_verified: boolean;
  fullname: string;
  gender: "mail" | "female";
  user_type?: "writer" | "producer" | "admin" | "reviewer";
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
  gender: string;
  image: null | string;
}
