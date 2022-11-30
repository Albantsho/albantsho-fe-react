import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { IWriterScript } from "interfaces/script";
import ArchiveScript from "./ArchiveScript/ArchiveScript";

interface IProps {
  listScripts: IWriterScript[];
  setListScripts: React.Dispatch<React.SetStateAction<IWriterScript[]>>;
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
        {listScripts.map((script) => (
          <ArchiveScript
            key={script._id}
            setListScripts={setListScripts}
            script={script}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default ArchiveList;
