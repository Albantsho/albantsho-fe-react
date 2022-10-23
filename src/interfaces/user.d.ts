export interface IUser {
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
  production_company_name?: string;
  portfolio?: string;
  verification_status: boolean;
  subscription_count: number;
  token?: string;
  user_type: string;
  created_at: string;
  updated_at: string;
}
