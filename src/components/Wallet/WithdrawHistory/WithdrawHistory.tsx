import emptyPayment from "@assets/images/empty-blogs.png";
import {
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { IWithdraw } from "interfaces/withdraw";
import Image from "next/image";
import TableRowWithdraw from "./TableRowWithdraw/TableRowWithdraw";

interface IProps {
  withdrawList: IWithdraw[];
  refetch: any;
}

const WithdrawHistory = ({ withdrawList, refetch }: IProps) => {
  return (
    <div className="bg-white rounded-md px-5 sm:px-6  md:px-10 py-9 lg:px-14 lg:py-14 flex-1 w-full">
      <Typography
        variant="h4"
        className="text-primary-700 futura font-medium leading-normal mb-2 md:mb-3"
      >
        Withdraw History
      </Typography>
      <Typography variant="body1" className="text-neutral-800 max-w-lg">
        Below are your most recently approved withdraw. To resolve any
        challenges, please contact us via our “Contact us” page” thank you.
      </Typography>
      <Divider className="mt-5" />
      {withdrawList.length >= 1 ? (
        <div className="grid">
          <TableContainer
            className="shadow-none no-scrollbar"
            component={Paper}
          >
            <Table className="no-scrollbar">
              <TableHead>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="w-full lg:py-5 xl:py-7">
                    <Typography
                      variant="h6"
                      className="futura min-w-[135px] font-medium text-neutral-800"
                    >
                      Transaction ID
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="h6"
                      className="lg:mr-20 futura font-medium text-neutral-800 w-20"
                    >
                      Price
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="h6"
                      className="lg:mr-20 futura font-medium text-neutral-800 w-20"
                    >
                      Status
                    </Typography>
                  </TableCell>
                  <TableCell className="pl-10">
                    <Typography
                      variant="h6"
                      className="futura font-medium text-neutral-800"
                    >
                      Date
                    </Typography>
                  </TableCell>
                  <TableCell className="pl-10">
                    <Typography
                      variant="h6"
                      className="futura font-medium text-neutral-800"
                    ></Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {withdrawList.map((withdraw) => (
                  <TableRowWithdraw
                    key={withdraw._id}
                    refetch={refetch}
                    withdraw={withdraw}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <div className="py-14 lg:py-24 text-center mx-auto">
          <Image
            width={384}
            height={384}
            loading="lazy"
            className="w-fit h-fit"
            src={emptyPayment}
            alt="empty blog list"
          />
        </div>
      )}
    </div>
  );
};

export default WithdrawHistory;
