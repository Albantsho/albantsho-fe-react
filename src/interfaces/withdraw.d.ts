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

export interface IWithdrawForAdmin {
  "_id": string;
  "transactionId": null | string;
  "amount": 30,
  "verified": true,
  "status": "onchecking" | "done" | "rejected";
  "method": string;
  "bankName": string;
  "bankAccountName": string;
  "bankAccountNumber": string;
  "usdtTrc20Address": null | string;
  "user": {
    "_id": string;
    "email": string;
  };
}