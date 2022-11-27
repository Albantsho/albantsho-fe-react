import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import useReviewsApi from "apis/Reviews.api";
import { IAssignedOrCompletedRequest } from "interfaces/reviews";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";
import AssignedOrCompletedRequest from "./AssignedOrCompletedRequest/AssignedOrCompletedRequest";

const AssignedRequestsList = () => {
  const [assignedRequestList, setAssignedRequestList] = useState<
    Array<IAssignedOrCompletedRequest>
  >([]);
  const [loading, setLoading] = useState(false);
  const { getAssignedRequestedReviews } = useReviewsApi();

  useEffect(() => {
    async function getAssignedReviewsFunc() {
      try {
        setAssignedRequestList([]);
        setLoading(true);
        const res = await getAssignedRequestedReviews();
        setAssignedRequestList(res.data.scripts);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }
    getAssignedReviewsFunc();

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
                className="w-28 xl:flex-0 flex-[0.35] lg:hidden xl:flex xl:pl-0 xl:pb-8 pb-5 pt-0 hidden md:flex xl:flex-0"
              >
                <Typography
                  variant="h6"
                  className="futura font-medium text-primary-700"
                >
                  Script Type
                </Typography>
              </TableCell>
              <TableCell className="flex-[0.35] xl:pb-8 pb-5 pt-0 hidden md:flex lg:hidden xl:flex xl:justify-end xl:pr-16">
                <Typography
                  variant="h6"
                  className="futura font-medium text-primary-700"
                >
                  Reviewer
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="px-6 xl:px-14 overflow-hidden">
            {assignedRequestList.map((script) => (
              <AssignedOrCompletedRequest script={script} key={script._id} />
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default AssignedRequestsList;
