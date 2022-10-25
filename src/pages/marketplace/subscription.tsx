import ReviewedIcon from "@assets/icons/reviewed.svg";
import {
  Card,
  CardActions,
  CardContent,
  Icon,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";

const plans = [
  "Synopsis",
  "SynopStory worldsis",
  "Writer’s motivations and personal notes",
  "Act structure",
  "Writer’s inspiration",
];

import useSubscriptionApi from "apis/Subscription.api";
import Head from "next/head";
import { Suspense } from "react";

const Subscription = () => {
  const { subscription } = useSubscriptionApi();

  const subscriptionFunc = async () => {
    const res = await subscription({
      sub_name: "mauve",
      paid: true,
    });
    console.log(
      "🚀 ~ file: subscription.tsx ~ line 33 ~ subscriptionFunc ~ res",
      res
    );
  };

  return (
    <>
      <Head>
        <title>Albantsho || Subscription </title>
      </Head>
      <Nav color="inherit" position="static" />
      <div className="py-8 md:py-12 px-5 sm:px-9 lg:mb-16  mx-auto bg-[#f6f8fc]">
        <div className="max-w-[520px] mx-auto">
          <Typography
            variant="h4"
            color="primary.700"
            className="text-center font-semibold futura px-5 leading-normal"
          >
            Subscription Plan
          </Typography>
          <Typography
            variant="body1"
            className="text-center mb-5 md:mb-8 text-[#484848]"
          >
            Make the most of your Albantsho experience by subscribing and
            getting indepth information on all scripts you view.
          </Typography>
        </div>
        <Card
          elevation={10}
          sx={{ maxWidth: { xs: 388, md: 478 } }}
          className="bg-white rounded-lg shadow-primary px-8 py-10 mx-auto  mb-10 lg:mb-28"
        >
          <CardContent>
            <Typography
              variant="h3"
              className={`text-primary-700 futura font-semibold leading-normal`}
            >
              $300
            </Typography>
            <Typography variant="body1" color="" className="font-medium mb-8">
              Here’s what you get when you subcribe;
            </Typography>
            <div>
              {plans.map((plan) => {
                return (
                  <div
                    key={plan}
                    className="flex mb-4 md:mb-5 items-center gap-3"
                  >
                    <Icon fontSize="large">
                      <ReviewedIcon />
                    </Icon>
                    <Typography
                      variant="body1"
                      className="font-medium text-[#484848]"
                    >
                      {plan}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </CardContent>
          <CardActions>
            <Btn
              onClick={subscriptionFunc}
              size="large"
              className="mt-4 py-2 md:mt-5 w-full text-center"
            >
              Subscribe
            </Btn>
          </CardActions>
        </Card>
      </div>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Subscription;
