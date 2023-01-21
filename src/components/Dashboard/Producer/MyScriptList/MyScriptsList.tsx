import emptyBlogs from "@assets/images/empty-blogs.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { IScript } from "interfaces/script";
import Image from "next/image";
import MyScript from "./MyScript/MyScript";

interface IProps {
  scriptsList: IScript[];
}

const MyScriptsList = ({ scriptsList }: IProps) => {
  return scriptsList.length > 0 ? (
    <Table className="mt-4 sm:mt-6 bg-white rounded-md shadow-primary  py-5 xl:py-8 flex flex-col mb-16">
      <TableHead>
        <TableRow className="flex">
          <TableCell className="flex-1 pl-5 sm:pl-10 xl:pb-8 pb-5 pt-0 xl:pl-16">
            <Typography
              variant="h6"
              className="text-primary-700 font-medium futura"
            >
              Script
            </Typography>
          </TableCell>
          <TableCell className=" hidden md:flex xl:pb-8 pb-5 pt-0"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-5  xl:px-12 overflow-hidden">
        {scriptsList.map((script) => (
          <MyScript key={script._id} script={script} />
        ))}
      </TableBody>
    </Table>
  ) : (
    <div className="flex items-center">
      <Image
        width={384}
        height={384}
        loading="lazy"
        className="w-fit h-fit mx-auto mt-14 lg:mt-24"
        src={emptyBlogs}
        alt="empty blog list"
      />
    </div>
  );
};

export default MyScriptsList;
