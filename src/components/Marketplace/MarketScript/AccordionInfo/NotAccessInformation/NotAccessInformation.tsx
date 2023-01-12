import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import Link from "next/link";
import routes from "routes/routes";
import { Typography } from "@mui/material";
import lock from "./assets/lock.png";

const NotAccessInformation = () => {
  return (
    <div className="flex gap-5 sm:p-12 items-center flex-col mb-3 sm:flex-row">
      <div className="max-w-[106px] flex-shrink-0">
        <Image src={lock} alt="lock" />
      </div>
      <div className="flex flex-col sm:max-w-xs">
        <Typography
          color="primary.700"
          variant="h4"
          className="futura leading-normal"
        >
          oops!
        </Typography>
        <Typography variant="body1" mb={2} className="text-tinted-500">
          You’re unable to view this content because you’re not subscribed.
        </Typography>
        <Link href={routes.marketPlaceSubscription.url} legacyBehavior passHref>
          <Btn
            size="large"
            sx={{ padding: { xs: "6px 12px", md: "12px 24px" } }}
            className="mr-auto"
          >
            View plans
          </Btn>
        </Link>
      </div>
    </div>
  );
};

export default NotAccessInformation;
