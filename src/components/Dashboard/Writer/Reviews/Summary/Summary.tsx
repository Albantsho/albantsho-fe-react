import { Chip, Divider, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import usePlanApi from "apis/Plan.api";
import useUserStore from "app/user.store";
import {
  closePaymentModal,
  useFlutterwave,
  FlutterWaveButton,
} from "flutterwave-react-v3";
import type { FlutterWaveResponse } from "flutterwave-react-v3/dist/types";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import { priceConverter } from "utils/price-convert";

interface IProps {
  script: IFullInformationScript;
}

const Summary = ({ script }: IProps) => {
  const { query } = useRouter();
  const user = useUserStore((state) => state.user);
  const { replace } = useRouter();
  const [loading, setLoading] = useState(false);
  const [ethPrice, setEthPrice] = useState<number | false | null>(null);
  const { buyReviewsPlan } = usePlanApi();
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY as string,
    tx_ref: `${Date.now()}`,
    amount: query.reviewPlan === "typeA" ? 100 : 300,
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
      title: "Review Plan",
      description: "Get your script reviewed by our top experts",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const responsePayment = async (response: FlutterWaveResponse) => {
    try {
      const res = await buyReviewsPlan({
        plan:
          query.reviewPlan === "typeA"
            ? "A"
            : query.reviewPlan === "typeB"
            ? "B"
            : "",
        scriptId: script._id,
        transactionId: `${response.transaction_id}`,
      });
      // closePaymentModal(); // this will close the modal programmatically
      replace(
        routes.reviewsPaymentSuccessful.dynamicUrl(`${response.transaction_id}`)
      );
    } catch (error) {
      errorHandler(error);
    }
  };

  const paymentBuyingReviewPlan = () => {
    try {
      setLoading(true);
      handleFlutterPayment({
        callback: responsePayment,
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

  useEffect(() => {
    async function getETHPrice() {
      const price = await priceConverter();
      setEthPrice(price.USDT.ETH(query.reviewPlan === "typeA" ? 100 : 300));
    }
    getETHPrice();
  }, []);

  return (
    <div className="pb-9 lg:pb-16 bg-white rounded-md px-5">
      <Divider className="lg:mx-5 2xl:mx-20" />
      <div
        data-aos="flip-left"
        className="mt-7 lg:mt-12 rounded-md mx-auto lg:px-10   lg:py-9  xl:py-12 lg:shadow-secondary  max-w-3xl"
      >
        <Typography
          variant="h4"
          color="primary.700"
          className="mb-3 futura font-medium text-[#7B61FF] lg:mb-6"
        >
          {query.reviewPlan === "typeA" && "Type A"}
          {query.reviewPlan === "typeB" && "Type B"} Review
        </Typography>
        <div className="flex flex-col  md:flex-row lg:flex-col xl:flex-row mb-2 lg:mb-5 lg:max-w-max  gap-x-2 xl:gap-x-4 gap-y-4">
          <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
            <Typography
              variant="h5"
              color="primary.700"
              className="futura font-medium leading-normal"
            >
              {script.title}
            </Typography>
            <Chip
              label={script.scriptFormat}
              className="rounded bg-tinted-50/60 text-neutral-800 lg:mr-5 md:px-4 md:py-5"
            />
          </div>
          <Divider
            className="hidden md:block md:mx-4 xl:mx-7 2xl:mx-9 lg:hidden xl:block"
            orientation="vertical"
            flexItem
          />
          <div>
            <span className="font-semibold">Review Fee:</span> <br />
            <div className="flex gap-1 items-center">
              <Typography
                color="primary.700"
                className="lg:leading-normal font-semibold"
                variant="h5"
              >
                {query.reviewPlan === "typeA" && "$100"}
                {query.reviewPlan === "typeB" && "$300"}
              </Typography>
              <Typography variant="body1" color="primary.700">
                ({ethPrice} ETH)
              </Typography>
            </div>
          </div>
        </div>
        {/* <FlutterWaveButton onClick={paymentBuyingReviewPlan}>
          Proceed to pay
        </FlutterWaveButton> */}
        <Btn
          type="button"
          loading={loading}
          onClick={paymentBuyingReviewPlan}
          className="mt-4 py-3 px-7 xl:m12"
          size="large"
        >
          Proceed to pay
        </Btn>
      </div>
    </div>
  );
};

export default Summary;
