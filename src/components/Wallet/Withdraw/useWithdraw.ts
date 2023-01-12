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
  method: string;
  bank?: string;
  bankName?: string;
  withdrawPlatform?: string;
  network?: string;
  address?: string;
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
      method: "bank_deposit",
    },
    resolver: yupResolver(withdrawSchema),
  });
  const withdrawTypeValue = watch("method");

  const onSubmit = async (data: IWithdrawFormValues) => {
    try {
      setLoading(true);
      withdrawWallet(data);
      replace(routes.wallet.url);
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
