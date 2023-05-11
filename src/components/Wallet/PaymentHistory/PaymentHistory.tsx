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
import { IPayment } from "interfaces/transaction";
import Image from "next/image";

interface IProps {
  paymentsList: IPayment[];
}

const PaymentHistory = ({ paymentsList }: IProps) => {
  return (
    <div className="bg-white rounded-md px-5 sm:px-6  md:px-10 py-9 lg:px-14 lg:py-14 flex-1 w-full">
      <Typography
        variant="h4"
        className="text-primary-700 futura font-medium leading-normal mb-2 md:mb-3"
      >
        Payment History
      </Typography>
      <Typography variant="body1" className="text-neutral-800 max-w-lg">
        Below are your most recently approved Payment. To resolve any
        challenges, please contact us via our “Contact us” page” thank you.
      </Typography>
      <Divider className="mt-5" />
      {paymentsList.length >= 1 ? (
        <div className="grid">
          <TableContainer className="shadow-none" component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="w-full min-w-[135px] lg:py-5 xl:py-7">
                    <Typography
                      variant="h6"
                      className="futura font-medium text-neutral-800"
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
                  <TableCell className="pl-10">
                    <Typography
                      variant="h6"
                      className="futura font-medium text-neutral-800"
                    >
                      Date
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paymentsList.map((transaction) => (
                  <TableRow key={transaction._id}>
                    <TableCell className="w-full  pr-10 lg:py-8 xl:py-16">
                      <Typography
                        variant="h6"
                        className="text-primary-700 futura font-medium"
                      >
                        {transaction.transactionId}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        className="font-semibold text-primary-700"
                      >
                        $ {transaction.amount}
                      </Typography>
                    </TableCell>
                    <TableCell className="pl-10">
                      <Typography
                        variant="h6"
                        className="font-medium text-primary-700"
                      >
                        {new Date(transaction.createdAt).toLocaleDateString()}
                      </Typography>
                    </TableCell>
                  </TableRow>
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

export default PaymentHistory;