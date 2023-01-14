import { yupResolver } from "@hookform/resolvers/yup";
import useWalletApi from "apis/Wallet.api";
import useUserStore from "app/user.store";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { FlutterWaveResponse } from "flutterwave-react-v3/dist/types";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import { depositSchema } from "./validation/deposit.validation";

interface IDepositFormValues {
  amount: string;
}

const useDeposit = () => {
  const [loading, setLoading] = useState(false);
  const { increaseWalletBalance } = useWalletApi();
  const user = useUserStore((state) => state.user);
  const { replace } = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IDepositFormValues>({
    defaultValues: {},
    resolver: yupResolver(depositSchema),
  });

  const valueFields = getValues();

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY as string,
    tx_ref: `${Date.now()}`,
    amount: Number(valueFields.amount),
    currency: "USD",
    // redirect_url: "https://www.albantsho.com/",
    payment_options:
      "card, banktransfer, ussd, account, mpesa, barter, nqr, credit",
    customer: {
      email: user.email,
      name: user.firstName,
      phone_number: "07000000000",
    },
    customizations: {
      title: "Deposit",
      description:
        "Make sure to have enough in your wallet to purchase as much amazing scripts as you would need.",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const paymentResponse = async (response: FlutterWaveResponse) => {
    try {
      await increaseWalletBalance({
        transactionId: `${response.transaction_id}`,
        paymentPlatform: "bank",
      });
      closePaymentModal(); // this will close the modal programmatically
      replace(routes.wallet.url);
    } catch (error) {
      ("");
    }
  };

  const paymentBuyingSubscriptionPlan = () => {
    try {
      setLoading(true);
      handleFlutterPayment({
        callback: paymentResponse,
        onClose: () => {
          toast.error("payment Field or canceled, please try again");
        },
      });
    } catch (error) {
      ("");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: IDepositFormValues) => {
    try {
      setLoading(true);
      paymentBuyingSubscriptionPlan();
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
