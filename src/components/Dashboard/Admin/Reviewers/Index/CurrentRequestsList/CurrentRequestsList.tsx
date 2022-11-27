import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import useReviewsApi from "apis/Reviews.api";
import { ICurrentRequest } from "interfaces/reviews";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";
import CurrentRequest from "./CurrentRequest/CurrentRequest";

const CurrentRequestsList = () => {
  const [currentRequestsList, setCurrentRequestsList] = useState<
    Array<ICurrentRequest>
  >([]);
  const [loading, setLoading] = useState(false);
  const { getAllReviews } = useReviewsApi();

  useEffect(() => {
    async function getReviewsFunc() {
      try {
        setCurrentRequestsList([]);
        setLoading(true);
        const res = await getAllReviews();
        console.log(res);

        setCurrentRequestsList(res.data.scripts);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }

    getReviewsFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      ) : (
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
                    px: { xs: 0, sm: 2 },
                  },
                }}
                className="w-28 xl:flex-0 flex-[0.5] md:flex-[0.45] xl:pl-0 xl:pb-8 pb-5 pt-0 hidden sm:flex"
              >
                <Typography
                  variant="h6"
                  className="futura font-medium text-primary-700"
                >
                  Script Type
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="px-6 xl:px-14 overflow-hidden">
            {currentRequestsList.map((request) => (
              <CurrentRequest request={request} key={request._id} />
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default CurrentRequestsList;
