import { Icon, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import ReviewedIcon from "./assets/reviewed.svg";

const plans = [
  "Synopsis",
  "SynopStory worldsis",
  "Writer’s motivations and personal notes",
  "Act structure",
  "Writer’s inspiration",
];

const SubscriptionPage = () => {
  return (
    <div className="py-8 md:py-12 px-5 sm:px-9  mx-auto">
      <div className="max-w-[520px] mx-auto">
        <Typography
          variant="h4"
          color="primary.700"
          className="text-center font-semibold futura px-5"
        >
          Subscription Plan
        </Typography>
        <Typography
          variant="body1"
          className="text-center mb-5 md:mb-8 text-[#484848]"
        >
          Make the most of your Albantsho experience by subscribing and getting
          indepth information on all scripts you view.
        </Typography>
      </div>
      <div className="bg-white shadow-md px-8 py-10 max-w-[478px] mx-auto rounded-lg">
        <Typography
          variant="h3"
          color="primary.700"
          className="futura font-semibold"
        >
          300$
        </Typography>
        <Typography variant="body1" color="" className="font-medium mb-8">
          Here’s what you get when you subcribe;
        </Typography>
        <div>
          {plans.map((plan) => {
            return (
              <div key={plan} className="flex mb-4 md:mb-5 items-center gap-3">
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
          <Btn size="large" className="mt-4 py-2 md:mt-5 w-full text-center">
            Subscribe
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
