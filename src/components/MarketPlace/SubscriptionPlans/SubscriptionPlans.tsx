import { Typography } from "@mui/material";
import Subscription from "@shared/Subscription/Subscription";

const plans = [
  "Synopsis",
  "SynopStory worldsis",
  "Writer’s motivations and personal notes",
  "Act structure",
  "Writer’s inspiration",
];

const SubscriptionPlans = () => {
  return (
    <div className="py-8 md:py-12 px-5 sm:px-9 lg:mb-16  mx-auto">
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
      <Subscription
        changeColor="text-primary-700"
        plans={plans}
        title="$300"
        description="Here’s what you get when you subcribe;"
        button="Subscribe"
        isShowIcon={true}
      />
    </div>
  );
};

export default SubscriptionPlans;
