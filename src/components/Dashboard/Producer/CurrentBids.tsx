import emptyBlogs from "@assets/images/empty-blogs.png";
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
import useScripBidApi from "apis/ScripBid.api";
import { IProducerBid } from "interfaces/bid";
import { IResData } from "interfaces/response";
import Image from "next/image";
import Link from "next/link";
import { QueryClient, useMutation } from "react-query";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";

interface IProps {
  bidsList: IProducerBid[];
  refetch: any;
}

const queryClient = new QueryClient();

const CurrentBids = ({ bidsList, refetch }: IProps) => {
  const { deleteBid } = useScripBidApi();

  const { mutate: deleteBidMutate, isLoading: loadingDeleteBid } = useMutation<
    IResData<object>,
    Error,
    string
  >((data) => deleteBid(data), {
    onError: (error) => errorHandler(error),
    onSuccess: (data) => {
      successHandler(data.message);
      refetch();
      queryClient.invalidateQueries("script");
    },
  });

  const withdrawOnScript = (bidId: string) => () => deleteBidMutate(bidId);

  console.log(bidsList);

  return bidsList.filter((b) => !b.rejected).length > 0 ? (
    <Table className="mt-4 sm:mt-6 bg-white rounded-md shadow-primary py-5 xl:py-8 flex flex-col mb-16">
      <TableHead>
        <TableRow className="flex">
          <TableCell className="flex-1 md:max-w-[380px] xl:max-w-[465px] pl-5 sm:pl-10  xl:pl-16 xl:pb-8 pb-5 pt-0">
            <Typography
              variant="h6"
              className="text-primary-700 font-medium futura"
            >
              Script
            </Typography>
          </TableCell>
          <TableCell className=" md:flex-[0.55] hidden md:flex lg:hidden xl:flex  pb-5 pt-0">
            <Typography
              variant="h6"
              className="text-primary-700 font-medium futura"
            >
              Current Bid
            </Typography>
          </TableCell>
          <TableCell className="hidden md:flex lg:w-full xl:w-auto 2xl:flex-1 xl:pb-8 pb-5 pt-0"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-5 xl:px-12 overflow-hidden">
        {bidsList
          .filter((bid) => !bid.rejected)
          .map((bid) => (
            <TableRow
              data-aos="fade-up"
              key={bid._id}
              sx={{
                "& td, & th": {
                  borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
                },
                "&:last-child td, &:last-child th": { border: 0 },
              }}
              className="flex flex-1 md:justify-start"
            >
              <TableCell
                sx={{
                  "&.MuiTableCell-root": {
                    px: { xs: 0, sm: 2 },
                  },
                }}
                className="flex flex-1 md:min-w-[360px] xl:min-w-[440px] md:flex-grow-0 sm:py-6 xl:py-10 flex-wrap sm:flex-nowrap gap-2 sm:gap-8 lg:gap-4"
              >
                <div className="flex gap-3 items-end flex-wrap justify-center sm:justify-start sm:items-start">
                  <Image
                    width="64"
                    height="64"
                    className="rounded-md w-16 h-16"
                    loading="lazy"
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${bid.script.image}`}
                    alt={bid.script.title}
                  />
                  <Chip
                    className="bg-success-50 font-xs font-semibold sm:hidden text-success-500"
                    label={`Current Bid : $${bid.amount}`}
                  />
                </div>
                <div className="flex-grow sm:flex-1 sm:max-w-[271px] min-w-[170px] sm:-ml-4 lg:ml-0">
                  <Link
                    passHref
                    href={routes.marketplaceOneScript.dynamicUrl(
                      bid.script._id
                    )}
                  >
                    <Typography
                      variant="body1"
                      className="futura font-semibold text-primary-700"
                    >
                      {bid.script.title}
                    </Typography>
                  </Link>
                  <Typography variant="caption" className="text-stone-800">
                    {bid.script.tagline}
                  </Typography>
                </div>
                <Button
                  variant="text"
                  disabled={loadingDeleteBid}
                  onClick={withdrawOnScript(bid._id)}
                  sx={{
                    paddingY: 1,
                    border: "1px solid #7953B5",
                    borderRadius: 1.5,
                  }}
                  className="sm:hidden mb-1 mt-2"
                >
                  Withdraw Bid
                </Button>
              </TableCell>
              <TableCell
                sx={{
                  "&.MuiTableCell-root": {
                    pl: { lg: 0 },
                  },
                }}
                className="hidden md:flex md:w-full items-center sm:py-6 lg:hidden xl:flex xl:py-10  xl:flex-[0.6]"
              >
                <Chip
                  label={`$ ${bid.amount}`}
                  className=" hidden md:flex bg-white md:mr-auto text-primary-700 text-lg futura font-semibold"
                />
              </TableCell>
              <TableCell
                sx={{
                  "&.MuiTableCell-root": {
                    pl: { lg: 0 },
                  },
                }}
                className="hidden sm:flex md:min-w-[160px] lg:w-full gap-3 flex-col items-center md:justify-center sm:py-6 xl:py-10"
              >
                <Chip
                  className="bg-success-50 font-xs font-semibold md:hidden lg:flex lg:ml-auto xl:hidden text-success-500"
                  label={`Current Bid : $${bid.amount}`}
                />
                <Button
                  disabled={loadingDeleteBid}
                  variant="text"
                  onClick={withdrawOnScript(bid._id)}
                  sx={{
                    paddingY: 1,
                    border: "1px solid #7953B5",
                    borderRadius: 1.5,
                  }}
                  className="md:ml-auto lg:mr-5"
                >
                  Withdraw Bid
                </Button>
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
        src={emptyBlogs}
        alt="empty blog list"
      />
    </div>
  );
};

export default CurrentBids;
