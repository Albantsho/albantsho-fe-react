import { yupResolver } from "@hookform/resolvers/yup";
import useWalletApi from "apis/Wallet.api";
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
  const { withdrawWallet } = useWalletApi();
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
      const res = await withdrawWallet(data);
      replace(
        routes.withdrawSuccessfulWallet.dynamicUrl(res.data.transaction._id)
      );
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
