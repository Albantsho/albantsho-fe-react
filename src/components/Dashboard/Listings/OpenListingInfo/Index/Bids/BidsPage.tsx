import {
  Button,
  ButtonGroup,
  Chip,
  Divider,
  SvgIcon,
  Typography,
} from "@mui/material";
import ReviewedIcon from "@assets/icons/reviewed.svg";
import BidsInProgress from "./BidsInProgress/BidsInProgress";
import BidsCompleted from "./BidsCompleted/BidsCompleted";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  setOpenAcceptOffer: Dispatch<SetStateAction<boolean>>;
}

const BidsPage = ({ setOpenAcceptOffer }: IProps) => {
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
                The Long Man Of Long Beach
                <SvgIcon
                  inheritViewBox
                  className="-mb-[6px]  ml-2 sm:ml-4 md:ml-6"
                  component={ReviewedIcon}
                />
              </Typography>
              <Chip
                label="Feature film"
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
                  $100
                </Typography>
                <Typography variant="body1" color="primary.700">
                  (0.0237 ETH)
                </Typography>
              </div>
            </div>
          </div>
          <Divider className="my-5 md:my-7 lg:my-4 xl:my-6" />
          <div className="lg:pt-6 md:flex ">
            <div className="mb-4 md:mb-0  space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
              <Typography variant="h6" className="text-neutral-700 font-normal">
                <span className="font-semibold text-primary-700">Talan</span>{" "}
                has placed a bid for your script
              </Typography>
              <Typography
                variant="h3"
                color="primary.700"
                className="font-semibold leading-normal"
              >
                @$6,000
              </Typography>
            </div>
            <ButtonGroup className="border-none items-stretch md:items-end md:pb-2  md:-ml-24 gap-x-2 md:gap-x-8 xl:gap-x-12">
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
                sx={{ "&.MuiButtonBase-root": { fontWeight: 600 } }}
                size="large"
                variant="text"
                className="text-secondary-700"
              >
                Decline
              </Button>
            </ButtonGroup>
          </div>
          <BidsInProgress />
          <BidsCompleted />
        </div>
      </div>
    </>
  );
};

export default BidsPage;
