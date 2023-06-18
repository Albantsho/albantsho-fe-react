import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import routes from "utils/routes";

const BidRequestCard = () => {
  const { push, query } = useRouter();

  const bidRequest = () => {
    push(routes.marketplaceOneScript.url(query.id as string), undefined, {
      scroll: true,
      shallow:true
    });
  };

  return (
    <div className="max-w-screen-2xl mx-auto flex justify-center px-6">
      <div className="py-10 px-5 sm:px-10 w-full max-w-[688px] md:px-14  bg-primary-700 rounded-2xl flex flex-col justify-start items-center gap-5 min-h-[258px] mb-10 md:mb-20">
        <Typography
          color="white"
          variant="h4"
          className="text-center futura font-semibold"
        >
          Love this script?
        </Typography>
        <div className="flex w-full gap-y-3 gap-x-6 items-center max-[500px]:justify-center justify-between max-[500px]:flex-wrap">
          <Button
            color="secondary"
            onClick={bidRequest}
            className="py-2 text-primary-main w-full"
            variant="contained"
          >
            Make an offer
          </Button>
          <Link className="w-full" href={routes.marketplace.url}>
            <Button
              variant="outlined"
              className="bg-white w-full hover:bg-white py-2"
            >
              I’ll Pass
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BidRequestCard;
