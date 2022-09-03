import {
  Button,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import projectArchive from "./assets/project-archive.png";

const listScripts = [
  {
    id: 1,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 2,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 3,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 4,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 5,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
];

interface IProps {
  setOpenArchive: Dispatch<SetStateAction<boolean>>;
}

const ListArchiveScripts = ({ setOpenArchive }: IProps) => {
  const handleOpen = () => setOpenArchive(true);
  return (
    <Table className="mt-4 bg-white rounded-md shadow-sm  py-5 flex flex-col min-h-screen">
      <TableHead>
        <TableRow className="flex">
          <TableCell className="flex-1 2xl:flex-[0.54]">Script</TableCell>
          <TableCell className="flex-1  hidden md:flex">Script Type</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-3 lg:px-6 xl:px-12">
        {listScripts.map((script) => (
          <TableRow
            sx={{
              "& td, & th": {
                borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
              },
              '&:last-child td, &:last-child th': { border: 0 }
            }}
            className="flex flex-1"
            key={script.id}
          >
            <TableCell
              scope="script"
              className="flex flex-1 2xl:flex-[0.5] items-center flex-wrap sm:flex-nowrap gap-4 sm:gap-8"
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
                onClick={handleOpen}
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
            <TableCell className="hidden md:flex flex-1">
              <div className="flex-1 flex justify-between items-center   xl:justify-start xl:gap-28 md:flex-grow">
                <Chip
                  label={script.type}
                  className=" py-5 px-4   hidden md:flex rounded-md bg-tinted-100/60  text-neutral-800"
                />

                <Button
                  onClick={handleOpen}
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
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListArchiveScripts;