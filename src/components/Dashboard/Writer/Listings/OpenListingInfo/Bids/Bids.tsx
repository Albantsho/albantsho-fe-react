import ReviewedIcon from "@assets/icons/reviewed.svg";
import { Button, Chip, Divider, SvgIcon, Typography } from "@mui/material";
import useScripBidApi from "apis/ScripBid.api";
import { IBidForScript } from "interfaces/bid";
import { IResData } from "interfaces/response";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { QueryClient, useMutation } from "react-query";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import { priceConverter } from "utils/price-convert";
import successHandler from "utils/success-handler";

interface IProps {
  setOpenAcceptOffer: React.Dispatch<React.SetStateAction<boolean>>;
  bid: IBidForScript;
  script: IFullInformationScript;
}

const queryClient = new QueryClient();

const Bids = ({ setOpenAcceptOffer, bid, script }: IProps) => {
  const { replace } = useRouter();
  const { rejectBid } = useScripBidApi();
  const [ethPrice, setEthPrice] = useState<number | false | null>(null);

  const { mutate: rejectBidMutation, isLoading: loadingRejectBid } =
    useMutation<IResData<object>, Error, string>((data) => rejectBid(data), {
      onError: (error) => errorHandler(error),
      onSuccess: (data) => {
        successHandler(data.message);
        queryClient.invalidateQueries(["script", "bid"]);
        replace(routes.writerDashboard.url);
      },
    });

  const rejectOfferFunc = (id: string) => async () => rejectBidMutation(id);

  useEffect(() => {
    async function getETHPrice() {
      const price = await priceConverter();
      setEthPrice(price?.USDT.ETH(script.price) as number);
    }
    getETHPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="bg-white shadow-primary my-4 md:my-6 py-4 sm:py-8 lg:py-12 xl:py-16 px-5 sm:px-8 lg:px-8 xl:px-20 rounded-md">
        <Typography
          variant="h4"
          color="primary.700"
          className="futura font-medium leading-normal"
        >
          Auctions
        </Typography>

        <div className="pt-4 sm:pt-8 lg:pt-12 xl:pt-16">
          <div className="lg:pb-6 flex flex-col md:flex-row lg:flex-col xl:flex-row md:items-center lg:items-start xl:items-center  gap-x-5 gap-y-2 ">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Typography
                variant="h6"
                color="primary.700"
                className=" futura font-medium leading-normal"
              >
                {script.title}
                <SvgIcon
                  inheritViewBox
                  className="-mb-[6px]  ml-2 sm:ml-4 md:ml-6"
                  component={ReviewedIcon}
                />
              </Typography>
              <Chip
                label={script.primaryGenre}
                className="rounded bg-tinted-50/60 py-2 xl:py-5 xl:px-2 text-neutral-800 lg:mr-1"
              />
            </div>
            <Divider
              className="hidden md:block lg:hidden xl:flex xl:mx-2 2xl:mx-10"
              orientation="vertical"
              flexItem
            />
            <div className="mt-2 sm:mt-0">
              <Typography variant="caption" className="text-[#B7B7B7]">
                Base Fee:
              </Typography>
              <br />
              <div className="flex gap-1 items-center">
                <Typography
                  color="primary.700"
                  className="leading-normal font-semibold"
                  variant="h5"
                >
                  ${script.price}
                </Typography>
                <Typography variant="body1" color="primary.700">
                  ({ethPrice} ETH)
                </Typography>
              </div>
            </div>
          </div>
          <Divider className="my-5 md:my-7 lg:my-4 xl:my-6" />

          <div className="lg:pt-6 md:flex ">
            <div className="mb-4 md:mb-0  space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
              <Typography variant="h6" className="text-neutral-700 font-normal">
                <span className="font-semibold text-primary-700">{`${bid.producer[0].firstName} ${bid.producer[0].lastName}`}</span>{" "}
                has placed a bid for your script
              </Typography>
              <Typography
                variant="h3"
                color="primary.700"
                className="font-semibold leading-normal"
              >
                @${bid.amount}
              </Typography>
            </div>
            <div className="border-none flex items-stretch md:items-end md:pb-2  md:-ml-24 gap-x-2 md:gap-x-8 xl:gap-x-12">
              <Button
                onClick={() => setOpenAcceptOffer(true)}
                sx={{ "&.MuiButtonBase-root": { fontWeight: 600 } }}
                size="large"
                variant="text"
                className="text-success-500"
              >
                Accept Offer
              </Button>
              <Button
                disabled={loadingRejectBid}
                onClick={rejectOfferFunc(bid._id)}
                sx={{ "&.MuiButtonBase-root": { fontWeight: 600 } }}
                size="large"
                variant="text"
                className="text-secondary-700"
              >
                Decline
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bids;
