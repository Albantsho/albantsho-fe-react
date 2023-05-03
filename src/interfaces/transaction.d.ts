

export interface IPayment {
  _id: string;
  userId: string;
  transactionId: string;
  paymentPlatform: string;
  amount: number;
  for: string;
  createdAt: string;
  updatedAt: string;
  method: string;
}
