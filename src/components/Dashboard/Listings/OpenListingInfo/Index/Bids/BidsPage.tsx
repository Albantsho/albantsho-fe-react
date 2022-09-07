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
      <div className="bg-white shadow-md mt-4 py-4 sm:py-8 px-3 md:px-6 lg:px-8 xl:px-20 rounded-md">
        <Typography variant="h6" color="primary.700" className="">
          Auctions
        </Typography>

        <div>
          <div className="border-b py-4 lg:pb-6 flex flex-wrap items-center lg:flex-nowrap   gap-x-5 gap-y-2 ">
            <Typography
              variant="h6"
              color="primary.700"
              className=" mb-2 sm:mb-4 lg:mb-0 futura font-sem leading-normal"
            >
              The Long Man Of Long Beach
            </Typography>

            <Chip
              label="Feature film"
              className="rounded bg-tinted-50/60 py-2 text-neutral-800 lg:mr-1"
            />
            <SvgIcon inheritViewBox component={ReviewedIcon} />

            <Divider
              className="hidden lg:block"
              orientation="vertical"
              flexItem
            />
            <div>
              <span>Base Fee:</span> <br />
              <div className="flex gap-1 items-center flex-wrap">
                <Typography
                  color="primary.700"
                  className="lg:leading-normal"
                  variant="h5"
                >
                  $100
                </Typography>
                <Typography
                 
                  variant="caption"
                  color="primary.700"
                >
                  (0.0237 ETH)
                </Typography>
              </div>
            </div>
          </div>
          <div className="mt-4 lg:pt-6 md:flex ">
            <div className=" sm:mb-4 md:mb-0  md:max-w-[320px]">
              <Typography variant="body1" className="">
                <span className="text-lg font-semibold text-primary-700">
                  Talan
                </span>
                has placed a bid for your script
              </Typography>
              <Typography
                variant="h5"
                color="primary.700"
                className="font-semibold md:mt-2"
              >
                @$6,000
              </Typography>
            </div>
            <ButtonGroup className="border-none flex-wrap md:flex-nowrap md:items-end  md:-ml-24 gap-x-6 ">
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
