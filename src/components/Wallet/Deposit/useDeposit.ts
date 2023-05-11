import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import errorHandler from "utils/error-handler";
import { depositSchema } from "./validation/deposit.validation";

interface IDepositFormValues {
  amount: number;
}

const useDeposit = () => {
  const [amount, setAmount] = useState<number>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDepositFormValues>({
    defaultValues: {},
    resolver: yupResolver(depositSchema),
  });

  const onSubmit = (data: IDepositFormValues) => {

    try {
      setAmount(+data.amount);
    } catch (error) {
      errorHandler(error);
    }
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
    amount,
    setAmount
  };
};

export default useDeposit;
