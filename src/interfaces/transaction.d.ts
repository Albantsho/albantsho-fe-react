export interface IWithdraw {
  _id: string;
  userId: string;
  transactionId: string;
  amount: number;
  status: done;
  withdrawPlatform: string;
  method: string;
  bank: null | string;
  bankName: null | string;
  accountNumber: null | string;
  network: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPayment {
  _id: string;
  userId: string;
  transactionId: string;
  paymentPlatform: string;
  amount: number;
  for: string;
  createdAt: string;
  updatedAt: string;
}
