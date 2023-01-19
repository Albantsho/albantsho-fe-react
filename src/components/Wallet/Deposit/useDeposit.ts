import { yupResolver } from "@hookform/resolvers/yup";
import useWalletApi from "apis/Wallet.api";
import useUserStore from "app/user.store";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import {
  FlutterWaveResponse,
  FlutterwaveConfig,
} from "flutterwave-react-v3/dist/types";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import { depositSchema } from "./validation/deposit.validation";

interface IDepositFormValues {
  amount: string;
}

const useDeposit = () => {
  const [amount, setAmount] = useState<number>(0);

  const {
    register,
    handleSubmit,
    getValues,
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
  };
};

export default useDeposit;
