import useWalletApi from "apis/Wallet.api";
import useUserStore from "app/user.store";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { FlutterWaveResponse } from "flutterwave-react-v3/dist/types";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import routes from "routes/routes";

interface IProps {
  amount: number;
}

const PaymentModal = ({ amount }: IProps) => {
  const { increaseWalletBalance } = useWalletApi();
  const user = useUserStore((state) => state.user);
  const { replace } = useRouter();

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY as string,
    tx_ref: `${Date.now()}`,
    amount,
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

  const paymentResponse = (response: FlutterWaveResponse) => {
    async function increaseWalletBalanceFunc() {
      try {
        const res = await increaseWalletBalance({
          transactionId: `${response.transaction_id}`,
          method: "bank",
        });

        replace(routes.wallet.url);
      } catch (error) {
        ("");
      }
    }
    increaseWalletBalanceFunc();
    closePaymentModal(); // this will close the modal programmatically
  };

  const paymentBuyingSubscriptionPlan = () => {
    try {
      handleFlutterPayment({
        callback: paymentResponse,
        onClose: () => {
          toast.error("payment Field or canceled, please try again");
        },
      });
    } catch (error) {
      ("");
    }
  };

  paymentBuyingSubscriptionPlan();

  return <div></div>;
};

export default PaymentModal;
