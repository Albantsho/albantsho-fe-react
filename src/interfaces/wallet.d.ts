export interface IWallet {
  _id: string;
  userId: string;
  balance: number;
  ledgerBalance: number;
  createdAt: string;
  updatedAt: string;
}
