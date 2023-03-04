import emptyScript from "@assets/images/empty-blogs.png";
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Loader from "@shared/Loader/Loader";
import useScriptsApi from "apis/Scripts.api";
import Image from "next/image";
import { useQuery } from "react-query";

interface IProps {
  searchQuery: string;
}

const ClosedList = ({ searchQuery }: IProps) => {
  const { getWriterAllSoldScripts } = useScriptsApi();

  const { data: soldScriptsData, isLoading: loadingGetSoldScripts } = useQuery(
    "script",
    () => getWriterAllSoldScripts(searchQuery)
  );

  return !loadingGetSoldScripts && soldScriptsData ? (
    soldScriptsData.scripts.length > 0 ? (
      <Table className=" mt-4 sm:mt-6 bg-white rounded-md shadow-primary  py-5 xl:py-8 flex flex-col mb-16">
        <TableHead>
          <TableRow className="flex">
            <TableCell className="flex-1 sm:max-w-[360px] sm:min-w-[360px] md:min-w-[460px] md:max-w-[460px] lg:min-w-[360px] lg:max-w-[360px] xl:max-w-[500px] xl:min-w-[500px] pl-5 pt-0 xl:pb-8 pb-5  sm:pl-6 lg:pl-10 xl:pl-16 ">
              <Typography
                variant="h6"
                className="text-primary-700 futura font-medium"
              >
                Script
              </Typography>
            </TableCell>
            <TableCell className="hidden sm:flex flex-[0.6]  pt-0 xl:pb-8 pb-5">
              <Typography
                variant="h6"
                className="text-primary-700 futura font-medium"
              >
                Price
              </Typography>
            </TableCell>
            <TableCell className="hidden sm:flex pr-2 sm:pr-8 lg:pr-8 pt-0 xl:pb-8 pb-5 xl:flex-[0.3] xl:pr-20 justify-end">
              <Typography
                variant="h6"
                className="text-primary-700 futura font-medium "
              >
                Date
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="px-1  xl:px-12 overflow-hidden">
          {soldScriptsData.scripts.map((script) => (
            <TableRow
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              key={script._id}
              sx={{
                "& td, & th": {
                  borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
                },
                "&:last-child td, &:last-child th": { border: 0 },
              }}
              className="flex "
            >
              <TableCell className="flex flex-1 sm:flex-auto sm:min-w-[365px] sm:py-6 xl:py-10 md:min-w-[465px] lg:min-w-[365px] xl:min-w-[465px] xl:max-w-[465px] items-center flex-wrap sm:flex-nowrap gap-1 sm:gap-4 ">
                <div className="flex gap-2 sm:gap-0">
                  <Image
                    // layout="fixed"
                    width="64"
                    height="64"
                    className="rounded-md w-16 h-16"
                    loading="lazy"
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${script.image}`}
                    alt={script.title}
                  />
                  <div className="flex flex-col gap-2">
                    <Chip
                      label={`Price: $${script.soldPrice}`}
                      className="text-success-500 bg-success-50 sm:hidden"
                    />
                    <Chip
                      label={`Date:${new Date(
                        script.soldDate
                      ).toLocaleDateString()}`}
                      className="text-primary-700 bg-primary-50/50 sm:hidden"
                    />
                  </div>
                </div>
                <div className="flex-grow sm:flex-1 sm:pl-3 -mt-1  sm:max-w-[271px] min-w-[170px] sm:-ml-4">
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
              </TableCell>
              <TableCell
                sx={{
                  "&.MuiTableCell-root": {
                    px: { xs: 0 },
                  },
                }}
                className="hidden sm:flex sm:w-full lg:flex-[0.3] md:gap-4 items-center xl:justify-between"
              >
                <Typography
                  variant="body1"
                  className="rounded-md bg-inherit sm:min-w-[70px] lg:min-w-[85px] text-primary-500 font-semibold"
                >{`$ ${script.soldPrice}`}</Typography>
              </TableCell>
              <TableCell
                sx={{
                  "&.MuiTableCell-root": {
                    px: { xs: 0, sm: 2 },
                  },
                }}
                className="hidden sm:flex items-center xl:flex-[0.5] lg:w-full 2xl:flex-[0.6] justify-end"
              >
                <Typography
                  variant="body1"
                  className=" text-neutral-700 font-medium"
                >
                  {new Date(script.soldDate).toLocaleDateString()}
                </Typography>
              </TableCell>
            </TableRow>
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
          src={emptyScript}
          alt="empty scripts list"
        />
      </div>
    )
  ) : (
    <Loader setCustomHeight="min-h-[55vh]" />
  );
};

export default ClosedList;
