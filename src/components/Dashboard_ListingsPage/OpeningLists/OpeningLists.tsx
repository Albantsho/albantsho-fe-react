import {
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import projectArchive from "./assets/project-archive.png";
import { IoIosMore } from "react-icons/io";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";

const listScripts = [
  {
    id: 1,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 4,
  },
  {
    id: 2,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 2,
  },
  {
    id: 3,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 1,
  },
  {
    id: 4,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 0,
  },
  {
    id: 5,
    image: projectArchive,
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
    <Table className="mt-4 bg-white rounded-md shadow-sm  py-5 flex flex-col mb-16">
      <TableHead>
        <TableRow className="flex">
          <TableCell
            sx={{ "&.MuiTableCell-root": { px: { xs: 1, sm: 2 } } }}
            className="flex-1 sm:pl-3  text-purple-700 futura font-medium 2xl:flex-[0.4]"
          >
            <span className="xl:pl-10">Script</span>
          </TableCell>
          <TableCell className="hidden md:flex flex-[0.46] lg:flex-[0.5] xl:flex-[0.43] text-purple-700 futura font-medium">
            Script Type
          </TableCell>
          <TableCell className="hidden sm:flex sm:pr-12 lg:pr-0 text-purple-700 futura font-medium">
            Bids
          </TableCell>
          <TableCell className="hidden sm:flex 2xl:flex-[0.2] sm:pr-6 lg:pr-16 xl:pr-28">
            {" "}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="pt-4 sm:px-1 md:px-2 xl:px-10">
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
                  pb: { xs: 0, sm: 2 },
                  px: { xs: 1, sm: 1 },
                },
              }}
              className="flex flex-1 gap-1 sm:gap-3 flex-col sm:flex-row sm:flex-1 2xl:flex-[0.4]"
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
                <span
                  className={`${
                    script.bids === 0
                      ? "text-gray-300 border-gray-300"
                      : "text-success-500 border-success-500"
                  } w-8 h-8 sm:hidden border rounded-full flex justify-center items-center`}
                >
                  {script.bids}
                </span>
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
            <TableCell className="hidden sm:flex items-center md:ml-auto sm:pr-10 md:pr-0 2xl:pr-2">
              <span
                className={`${
                  script.bids === 0
                    ? "text-gray-300 border-gray-300"
                    : "text-success-500 border-success-500"
                } w-8 h-8 md:ml-auto  border rounded-full flex justify-center items-center`}
              >
                {script.bids}
              </span>
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  pt: { xs: 0, sm: 2 },
                  px: { xs: 1, sm: 0, md: 2 },
                },
              }}
              className="flex items-center 2xl:flex-[0.25] 2xl:justify-end"
            >
              <IconButton onClick={handleClick}>
                <IoIosMore className="text-2xl  text-primary-700" />
              </IconButton>
              <Menu
                sx={{
                  "& .MuiPaper-root": {
                    boxShadow: "1px 1px 10px rgba(0,0,0,0.055)",
                  },
                }}
                className="shadow-none"
                anchorEl={openMenuItem}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Link href={`/listings/${script.id}`} passHref>
                  <MenuItem
                    sx={{
                      "&:hover": {
                        color: "#9A7EC7",
                        backgroundColor: "#F7F5F8",
                      },
                      fontSize: "14px",
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
