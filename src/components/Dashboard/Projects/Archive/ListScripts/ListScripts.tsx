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
    <Table className="mt-4 bg-white rounded-md shadow-primary  py-5 xl:py-8 flex flex-col mb-16">
      <TableHead>
        <TableRow className="flex">
          <TableCell className="flex-1 pl-7  xl:pl-16  xl:max-w-xl  md:pr-0 pt-0 xl:pb-8 pb-5">
            <Typography
              variant="h6"
              className="futura font-medium text-primary-700"
            >
              Script
            </Typography>
          </TableCell>
          <TableCell
            sx={{
              "&.MuiTableCell-root": {
                px: { xs: 0 },
              },
            }}
            className="flex-[0.71] xl:flex-0 xl:pl-0 xl:pb-8 pb-5 pt-0 hidden md:flex lg:hidden xl:flex"
          >
            <Typography
              variant="h6"
              className="futura font-medium text-primary-700"
            >
              Script Type
            </Typography>
          </TableCell>
          <TableCell className=" hidden md:flex xl:flex-[0.1]"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-6 xl:px-14">
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
              className="flex flex-1 py-4 pl-0 flex-col sm:flex-row  sm:py-6 xl:py-10 items-start sm:items-center xl:max-w-lg gap-4 sm:gap-8"
            >
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <div className="mt-1">
                  <Image
                    width={64}
                    height={64}
                    layout="fixed"
                    className="rounded-md "
                    loading="lazy"
                    src={script.image}
                    alt={script.title}
                  />
                </div>

                <div className="flex-grow sm:max-w-[360px]">
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
                },
              }}
              className="hidden py-4  sm:py-6 xl:py-10 md:flex lg:hidden xl:flex flex-[0.55] items-center"
            >
              <Chip
                label={script.type}
                className=" py-5 px-4 md:ml-3 hidden md:flex rounded-md bg-tinted-100/60  text-neutral-800"
              />
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  pl: { xs: 0 },
                },
              }}
              className="hidden py-4  sm:py-6 xl:py-10 pr-0  md:flex 2xl:flex-[0.1] items-center 2xl:justify-end"
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
