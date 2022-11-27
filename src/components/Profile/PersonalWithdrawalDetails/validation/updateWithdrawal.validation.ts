import * as Yup from "yup";

export const updateWithdrawalSchema = Yup.object({
  bank_name: Yup.string().required().min(3).label("Bank name"),
  bank_account_name: Yup.string().required().min(3).label("Bank account name"),
  bank_account_number: Yup.string()
    .required()
    .min(3)
    .label("Bank account number"),
});
