import { yupResolver } from "@hookform/resolvers/yup";
import useWithdrawApi from "apis/withdraw.api";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import { withdrawSchema } from "./validation/withdraw.validation";

interface IWithdrawFormValues {
  amount: string;
  method: "usdt" | "bank";
  bankAccountName?: string;
  bankName?: string;
  bankAccountNumber?: string;
  network?: string;
  usdtTrc20Address?: string;
}

const useWithdraw = () => {
  const [loading, setLoading] = useState(false);
  const { withdrawRequest } = useWithdrawApi();
  const { replace } = useRouter();

  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IWithdrawFormValues>({
    defaultValues: {
      method: "bank",
    },
    resolver: yupResolver(withdrawSchema),
  });
  const withdrawTypeValue = watch("method");

  const onSubmit = async (data: IWithdrawFormValues) => {
    try {
      setLoading(true);
      if (data.method === "bank") {
        const res = await withdrawRequest({ amount: data.amount, method: data.method, bankName: data.bankName, bankAccountName: data.bankAccountName, bankAccountNumber: data.bankAccountNumber });
        replace(
          routes.withdrawVerifyWallet.dynamicUrl(res.withdraw._id)
        );
      } else {
        const res = await withdrawRequest({
          amount: data.amount, method: data.method,
          //  network: data.network,
          usdtTrc20Address: data.usdtTrc20Address
        });
        replace(
          routes.withdrawVerifyWallet.dynamicUrl(res.withdraw._id)
        );
      }
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    control,
    onSubmit,
    handleSubmit,
    withdrawTypeValue,
    errors,
    loading,
  };
};

export default useWithdraw;
