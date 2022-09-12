import {
  Chip,
  Fab,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import beautySmall from "@assets/images/beauty-small.jpg";
import { IoIosMore } from "react-icons/io";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";

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
    <Table className="mt-4 bg-white rounded-md shadow-sm   py-5 xl:py-8 flex flex-col mb-16">
      <TableHead>
        <TableRow className="flex">
          <TableCell
            sx={{ "&.MuiTableCell-root": { px: { xs: 2.5, sm: 2 } } }}
            className="flex-1 sm:pl-3 pt-0 xl:pb-8 pb-5 2xl:flex-[0.38]"
          >
            <Typography className="xl:pl-10 text-primary-700 font-medium futura">
              Script
            </Typography>
          </TableCell>
          <TableCell className="hidden pt-0 md:flex flex-[0.46] xl:pb-8 pb-5 lg:flex-[0.5] xl:flex-[0.43]">
            <Typography
              variant="h6"
              className="text-primary-700 font-medium futura"
            >
              Script Type
            </Typography>
          </TableCell>
          <TableCell className="hidden pt-0 sm:flex sm:pr-12 lg:pr-0 xl:pb-8 pb-5">
            <Typography
              variant="h6"
              className="text-primary-700 font-medium futura"
            >
              {" "}
              Bids
            </Typography>
          </TableCell>
          <TableCell className="hidden pt-0 sm:flex 2xl:flex-[0.2] xl:pb-8 pb-5 sm:pr-6 lg:pr-16 xl:pr-28"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="pt-4 px-5 sm:px-1 md:px-2 xl:px-10">
        {listScripts.map((script) => (
          <TableRow
            key={script.id}
            sx={{
              "& td, & th": {
                borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
              },
              "&:last-child td, &:last-child th": { border: 0 },
            }}
            className="flex flex-1 flex-col sm:flex-row"
          >
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                 
                  px: { xs: 0, sm: 1 },
                  pr: { xl: 2 },
                },
              }}
              className="flex flex-1  gap-1 sm:py-6 xl:py-10 sm:gap-3 flex-col sm:flex-row sm:flex-1 2xl:flex-[0.4]"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <Image
                    className="rounded-md w-full h-full"
                    loading="lazy"
                    src={script.image}
                    alt={script.title}
                  />
                </div>
                <Fab
                  sx={{
                    "&.MuiButtonBase-root ": {
                      backgroundColor: "inherit",
                      boxShadow: "none",
                      border: `${
                        script.bids === 0
                          ? "1px solid #B7B7B7"
                          : "1px solid #03B76F"
                      }`,
                    },
                  }}
                  className={`${
                    script.bids === 0 ? "text-gray-300" : "text-success-500"
                  } md:ml-auto sm:hidden flex w-9 h-8  border rounded-full`}
                >
                  {script.bids}
                </Fab>
              </div>
              <div className="flex-1 sm:max-w-[271px] min-w-[170px]">
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
            </TableCell>
            <TableCell
              sx={{ "&.MuiTableCell-root": { px: { md: 1 } } }}
              className="hidden md:flex items-center flex-[0.5]"
            >
              <Chip
                className="py-5 px-4 bg-tinted-100/60 rounded-md  text-neutral-800"
                label={script.type}
              />
            </TableCell>
            <TableCell className="hidden sm:flex sm:py-6 xl:py-10 items-center md:ml-auto sm:pr-10 md:pr-0 lg:pr-1 2xl:pr-2">
              <Tooltip title="Bids">
                <div
                  className={`${
                    script.bids === 0
                      ? "text-gray-300 border border-gray-300"
                      : "text-success-500 border border-success-500"
                  } md:ml-auto w-9 h-9 flex justify-center items-center  border rounded-full`}
                >
                  {script.bids}
                </div>
              </Tooltip>
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                 
                  px: { xs: 1, sm: 0, md: 2 },
                },
              }}
              className="flex items-center sm:py-6 xl:py-10 2xl:flex-[0.25] 2xl:justify-end"
            >
              <IconButton onClick={handleClick}>
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
                  horizontal: "right",
                }}
              >
                <Link href={`/listings/${script.id}`}>
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
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OpeningLists;
