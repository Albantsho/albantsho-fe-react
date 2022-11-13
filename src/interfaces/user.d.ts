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
