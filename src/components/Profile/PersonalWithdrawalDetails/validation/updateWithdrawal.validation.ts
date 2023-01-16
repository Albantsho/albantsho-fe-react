import * as Yup from "yup";

export const updateWithdrawalSchema = Yup.object({
  bankName: Yup.string().required().min(3).label("Bank name"),
  bankAccountName: Yup.string().required().min(3).label("Bank account name"),
  bankAccountNumber: Yup.string()
    .required()
    .min(3)
    .label("Bank account number"),
});
