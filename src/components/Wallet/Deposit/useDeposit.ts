import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import errorHandler from "utils/error-handler";
import { depositSchema } from "./validation/deposit.validation";

interface IDepositFormValues {
  amount: string;
}

const useDeposit = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDepositFormValues>({
    defaultValues: {},
    resolver: yupResolver(depositSchema),
  });

  const onSubmit = async (data: IDepositFormValues) => {
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
    onSubmit,
    handleSubmit,
    errors,
    loading,
  };
};

export default useDeposit;
