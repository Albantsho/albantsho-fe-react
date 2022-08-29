import success from "@assets/images/success.png";
import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import Link from "next/link";

const SubscriptionSuccess = () => {
  return (
    <div className="pt-24 md:pt-32 px-10 md:px-16 text-center min-h-screen md:max-w-lg mx-auto">
      <div>
        <Image src={success} alt="success" />
      </div>
      <Typography
        variant="h5"
        color="primary.700"
        className="futura font-medium leading-normal"
      >
        Payment Successful
      </Typography>
      <Typography
        variant="h5"
        color="primary.700"
        mb={0.5}
        className="futura font-medium"
      >
        Transaction ID: 1234567890AVGED
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: { xs: 2, md: 2.5 } }}
        className="text-[#484848]"
      >
        Subscription activated! you now have unlimited access to all scripts on
        the platform!
      </Typography>
      <Link href="/market-place" passHref>
        <Btn size="large" className="py-3 px-6">
          Back to marketplace
        </Btn>
      </Link>
    </div>
  );
};

export default SubscriptionSuccess;
