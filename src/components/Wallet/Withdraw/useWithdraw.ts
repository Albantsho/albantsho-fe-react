import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import errorHandler from "utils/error-handler";
import { withdrawSchema } from "./validation/withdraw.validation";

interface IWithdrawFormValues {
  amount: string;
  method: string;
  bank?: string;
  account_name?: string;
  account_number?: string;
  network?: string;
  address?: string;
}

const useWithdraw = () => {
  const [loading, setLoading] = useState(false);

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
