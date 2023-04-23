export interface IWithdraw {
  "userId": string;
  "transactionId": null | string;
  "amount": number;
  "verified": boolean;
  "status": "onchecking" | "done" | "rejected";
  "method": string;
  "bankName": string | null;
  "bankAccountName": string | null;
  "bankAccountNumber": string | null;
  "usdtTrc20Address": string | null;
  "_id": string;
  "createdAt": Date;
  "updatedAt": Date;
}