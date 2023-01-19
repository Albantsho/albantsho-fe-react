import {
  Chip,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { IBidScript } from "interfaces/script";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import { IoIosMore } from "react-icons/io";
import routes from "routes/routes";
import UnListingItemModal from "../Modals/UnListingItemModal/UnListingItemModal";

interface IProps {
  script: IBidScript;
  scripts: IBidScript[];
  index: number;
  setListedScript: React.Dispatch<React.SetStateAction<IBidScript[]>>;
}

const OpeningBidScript = ({
  script,
  index,
  scripts,
  setListedScript,
}: IProps) => {
  const [openUnListingItem, setOpenUnListingItem] = useState<boolean>(false);
  const [openMenuItem, setOpenMenuItem] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(openMenuItem);

  const handleOpenMenuItem = (event: React.MouseEvent<HTMLElement>) =>
    setOpenMenuItem(event.currentTarget);

  const handleCloseMenuItem = () => setOpenMenuItem(null);

  return (
    <>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos="zoom-in"
        className="flex flex-col sm:flex-row py-6 xl:py-10 sm:justify-start  md:justify-end 2xl:justify-start"
      >
        <div className="flex flex-col sm:flex-row sm:mr-10 md:mr-6 lg:mr-8 gap-y-1 gap-x-3 xl:gap-5 sm:w-auto xl:mr-12 lg:max-w-[445px] 2xl:max-w-[425px] 2xl:mr-[65px]">
          <div className="flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <Image
                width={64}
                height={64}
                alt={script.title}
                className="rounded-md w-16 h-16"
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${script.image}`}
              />
            </div>
            <Tooltip title="Bids">
              <div
                className={`${
                  script.numberOfBids === 0
                    ? "text-gray-300 border border-gray-300"
                    : "text-success-500 border border-success-500"
                } w-9 h-9 flex justify-center sm:hidden self-center items-center  border rounded-full`}
              >
                {script.numberOfBids}
              </div>
            </Tooltip>
          </div>
          <div className="w-full sm:w-[271px] flex-1">
            <Typography
              variant="body1"
              className="futura font-semibold text-primary-700"
            >
              {script.title}
            </Typography>
            <Typography variant="caption" className="text-stone-800">
              {script.tagline}
            </Typography>
          </div>
        </div>
        <Chip
          className="py-5 px-4 hidden md:flex lg:hidden xl:flex self-center 2xl:mr-36 md:mr-10 min-w-[146px] bg-tinted-100/60 rounded-md  text-neutral-800"
          label={script.scriptFormat}
        />
        <Tooltip title="Bids">
          <div
            className={`${
              script.numberOfBids === 0
                ? "text-gray-300 border border-gray-300"
                : "text-success-500 border border-success-500"
            } w-9 h-9 justify-center hidden sm:flex self-center lg:mr-auto lg:ml-0 xl:ml-10  md:ml-auto md:mr-8 items-center  border rounded-full`}
          >
            {script.numberOfBids}
          </div>
        </Tooltip>
        <div className="flex self-center sm:ml-auto justify-center items-center">
          <IconButton className="max-h-[46px]" onClick={handleOpenMenuItem}>
            <IoIosMore className="text-3xl mt-1 sm:mt-0 text-primary-700" />
          </IconButton>
          <Menu
            sx={{
              "& .MuiPaper-root": {
                boxShadow: "1px 1px 10px rgba(0,0,0,0.055)",
                py: 0,
              },
            }}
            className="shadow-none"
            anchorEl={openMenuItem}
            open={openMenu}
            onClose={handleCloseMenuItem}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Link
              legacyBehavior
              href={routes.listingsOneScript.dynamicUrl(script._id)}
            >
              <MenuItem
                TouchRippleProps={{ className: "text-primary-main" }}
                className="w-full hover:bg-primary-50/25 hover:text-primary-500"
                sx={{
                  fontSize: "14px",
                  px: "25px",
                  py: 2,
                }}
              >
                View Script
              </MenuItem>
            </Link>
            <MenuItem
              TouchRippleProps={{ className: "text-primary-main" }}
              className="w-full hover:bg-primary-50/25 hover:text-primary-500"
              sx={{
                fontSize: "14px",
                px: "25px",
                py: 2,
              }}
              onClick={() => {
                setOpenUnListingItem(true);
                setOpenMenuItem(null);
              }}
            >
              Unlist Script
            </MenuItem>
          </Menu>
        </div>
      </div>
      <Suspense fallback={null}>
        <UnListingItemModal
          id={script._id}
          setListedScript={setListedScript}
          openUnListingItem={openUnListingItem}
          setOpenUnListingItem={setOpenUnListingItem}
        />
      </Suspense>
      {index < scripts.length - 1 && <Divider className="hidden sm:flex" />}
    </>
  );
};

export default OpeningBidScript;
