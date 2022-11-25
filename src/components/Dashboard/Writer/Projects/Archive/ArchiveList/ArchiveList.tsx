import beautySmall from "@assets/images/beauty-small.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { IWriterScript } from "interfaces/script";
import { Dispatch, SetStateAction } from "react";
import ArchiveScript from "./ArchiveScript/ArchiveScript";

const listScriptsP = [
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
  listScripts: IWriterScript[];
  setListScripts: Dispatch<SetStateAction<IWriterScript[]>>;
}

const ArchiveList = ({ setListScripts, listScripts }: IProps) => {
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
      <TableBody className="px-6 xl:px-14 overflow-hidden">
        {listScriptsP.map((script) => (
          <ArchiveScript key={script.id} script={script} />
        ))}
      </TableBody>
    </Table>
  );
};

export default ArchiveList;
