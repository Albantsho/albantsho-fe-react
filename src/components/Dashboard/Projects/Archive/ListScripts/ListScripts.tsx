import {
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import beautySmall from "@assets/images/beauty-small.jpg";

const listScripts = [
  {
    id: 1,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 2,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 3,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 4,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 5,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
];

interface IProps {
  setOpenModalUnArchive: Dispatch<SetStateAction<boolean>>;
}

const ListScripts = ({ setOpenModalUnArchive }: IProps) => {
  const handleOpenUnArchive = () => setOpenModalUnArchive(true);
  return (
    <Table className="mt-4 bg-white rounded-md shadow-sm  py-5 flex flex-col mb-16">
      <TableHead>
        <TableRow className="flex">
          <TableCell className="flex-1 pl-7 md:pl-8 xl:pl-16 2xl:flex-[0.4] md:pr-0">
            Script
          </TableCell>
          <TableCell
            sx={{
              "&.MuiTableCell-root": {
                px: { xs: 0 },
              },
            }}
            className="flex-[0.7]  2xl:flex-[0.66]  hidden md:flex"
          >
            Script Type
          </TableCell>
          <TableCell className=" hidden md:flex"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-3 xl:px-12">
        {listScripts.map((script) => (
          <TableRow
            sx={{
              "& td, & th": {
                borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
              },
              "&:last-child td, &:last-child th": { border: 0 },
            }}
            className="flex flex-1"
            key={script.id}
          >
            <TableCell
              scope="script"
              className="flex flex-1  items-center 2xl:flex-[0.41] flex-wrap sm:flex-nowrap gap-4 sm:gap-8"
            >
              <div className="flex flex-1 flex-wrap sm:flex-nowrap sm:gap-2 xl:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image
                    className="rounded-md "
                    loading="lazy"
                    src={script.image}
                    alt={script.title}
                  />
                </div>
                <div className="flex-grow max-w-[340px]  sm:max-w-[271px] min-w-[170px]">
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
              <Button
                onClick={handleOpenUnArchive}
                variant="text"
                sx={{
                  paddingY: 1.5,
                  paddingX: 2,
                  border: "1px solid #7953B5",
                  borderRadius: 1.5,
                }}
                className=" md:hidden"
              >
                Unarchive
              </Button>
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  px: { xs: 0 },
                  pl: { lg: 3 },
                },
              }}
              className="hidden md:flex flex-[0.55] items-center"
            >
              <Chip
                label={script.type}
                className=" py-5 px-4 md:ml-3  hidden md:flex rounded-md bg-tinted-100/60  text-neutral-800"
              />
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  pl: { xs: 0 },
                },
              }}
              className="hidden md:flex 2xl:flex-[0.2] items-center 2xl:justify-end"
            >
              <Button
                onClick={handleOpenUnArchive}
                variant="text"
                sx={{
                  paddingY: 1.5,
                  paddingX: 2,
                  border: "1px solid #7953B5",
                  borderRadius: 1.5,
                }}
                className=""
              >
                Unarchive
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListScripts;
