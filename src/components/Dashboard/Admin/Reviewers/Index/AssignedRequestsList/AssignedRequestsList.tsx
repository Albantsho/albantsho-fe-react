import emptyBlogs from "@assets/images/empty-blogs.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Loader from "@shared/Loader/Loader";
import useReviewsApi from "apis/Reviews.api";
import Image from "next/image";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";
import AssignedOrCompletedRequest from "./AssignedOrCompletedRequest/AssignedOrCompletedRequest";

interface IProps {
  searchQuery: string;
}

const AssignedRequestsList = ({ searchQuery }: IProps) => {
  const { getAssignedRequestedReviews } = useReviewsApi();

  const {
    data: assignedReviewRequestData,
    isLoading: loadingGetAssignedReviewRequest,
  } = useQuery(
    ["assigned requests review", searchQuery],
    () => getAssignedRequestedReviews(searchQuery),
    {
      onError: (err) => errorHandler(err),
    }
  );

  return (
    <>
      {!loadingGetAssignedReviewRequest && assignedReviewRequestData ? (
        assignedReviewRequestData.scripts.length > 0 ? (
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
              {assignedReviewRequestData.scripts.map((script) => (
                <AssignedOrCompletedRequest script={script} key={script._id} />
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="w-fit h-fit mx-auto text-center mt-14 lg:mt-24">
            <Image
              width={384}
              height={384}
              loading="lazy"
              src={emptyBlogs}
              alt="empty blog list"
            />
          </div>
        )
      ) : (
        <Loader setCustomHeight="min-h-[55vh]" />
      )}
    </>
  );
};

export default AssignedRequestsList;
