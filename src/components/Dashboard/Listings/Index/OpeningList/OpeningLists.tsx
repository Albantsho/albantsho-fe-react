import {
  Chip,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import beautySmall from "@assets/images/beauty-small.jpg";
import { IoIosMore } from "react-icons/io";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import React from "react";
import routes from "routes/routes";

const listScripts = [
  {
    id: 1,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 4,
  },
  {
    id: 2,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 2,
  },
  {
    id: 3,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 1,
  },
  {
    id: 4,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 0,
  },
  {
    id: 5,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 3,
  },
];

interface IProps {
  setOpenUnListingItem: Dispatch<SetStateAction<boolean>>;
}

const OpeningLists = ({ setOpenUnListingItem }: IProps) => {
  const [openMenuItem, setOpenMenuItem] = useState<null | HTMLElement>(null);
  const open = Boolean(openMenuItem);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpenMenuItem(event.currentTarget);
  };
  const handleClose = () => {
    setOpenMenuItem(null);
  };
  return (
    <Paper elevation={0} className="mt-4 bg-white mb-16 shadow-primary">
      <div className="border-b border-tinted-100 px-5 py-5 xl:px-14 xl:py-8 flex">
        <Typography
          variant="h6"
          className="futura w-1/2 sm:w-full sm:max-w-[387px] md:max-w-[377px]  xl:max-w-[408px] font-medium text-primary-700"
        >
          Script
        </Typography>

        <Typography
          variant="h6"
          className="futura hidden md:block lg:hidden xl:flex 2xl:ml-3 md:text-center 2xl:mr-28 font-medium text-primary-700"
        >
          Script Type
        </Typography>
        <Typography
          variant="h6"
          className="futura hidden sm:block self-start md:mx-auto  lg:ml-0 xl:ml-20 xl:mr-0 md:text-center lg:text-star font-medium text-primary-700"
        >
          Bids
        </Typography>
      </div>
      <div className="px-5 xl:px-14">
        {listScripts.map((script) => (
          <React.Fragment key={script.id}>
            <div className="flex flex-col sm:flex-row py-6 xl:py-10 sm:justify-start  md:justify-end 2xl:justify-start">
              <div className="flex flex-col sm:flex-row sm:mr-10 md:mr-6 lg:mr-8 gap-y-1 gap-x-3 xl:gap-5 sm:w-auto xl:mr-12 lg:max-w-[445px] 2xl:max-w-[425px] 2xl:mr-[65px]">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Image
                      className="rounded-md w-full h-full"
                      loading="lazy"
                      src={script.image}
                      alt={script.title}
                    />
                  </div>
                  <Tooltip title="Bids">
                    <div
                      className={`${
                        script.bids === 0
                          ? "text-gray-300 border border-gray-300"
                          : "text-success-500 border border-success-500"
                      } w-9 h-9 flex justify-center sm:hidden self-center items-center  border rounded-full`}
                    >
                      {script.bids}
                    </div>
                  </Tooltip>
                </div>
                <div className="sm:max-w-[271px]">
                  <Typography
                    variant="body1"
                    className="futura font-semibold text-primary-700"
                  >
                    {script.title}
                  </Typography>
                  <Typography variant="caption" className="text-stone-800">
                    {script.description}
                  </Typography>
                </div>
              </div>
              <Chip
                className="py-5 px-4 hidden md:flex lg:hidden xl:flex self-center 2xl:mr-36 md:mr-10 bg-tinted-100/60 rounded-md  text-neutral-800"
                label={script.type}
              />
              <Tooltip title="Bids">
                <div
                  className={`${
                    script.bids === 0
                      ? "text-gray-300 border border-gray-300"
                      : "text-success-500 border border-success-500"
                  } w-9 h-9 justify-center hidden sm:flex self-center lg:mr-auto lg:ml-0 xl:ml-10  md:ml-auto items-center  border rounded-full`}
                >
                  {script.bids}
                </div>
              </Tooltip>
              <div className="flex self-center sm:ml-auto justify-center items-center">
                <IconButton className="max-h-[46px]" onClick={handleClick}>
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
                  open={open}
                  onClose={handleClose}
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
                    href={`${routes.listingsOneScript(script.title)}`}
                    passHref
                  >
                    <a className="text-inherit" >
                      <MenuItem
                        sx={{
                          "&:hover": {
                            color: "#9A7EC7",
                            backgroundColor: "#F7F5F8",
                          },
                          fontSize: "14px",
                          px: "25px",
                          py: 2,
                        }}
                        onClick={handleClose}
                      >
                        View Script
                      </MenuItem>
                    </a>
                  </Link>
                  <MenuItem
                    sx={{
                      "&:hover": {
                        color: "#9A7EC7",
                        backgroundColor: "#F7F5F8",
                      },
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
            {script.id < listScripts.length && (
              <Divider className="hidden sm:flex" />
            )}
          </React.Fragment>
        ))}
      </div>
    </Paper>
  );
};

export default OpeningLists;
