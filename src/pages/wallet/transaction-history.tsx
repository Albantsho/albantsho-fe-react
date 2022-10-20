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
import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const transactionList = [
  { id: 1, TransactionID: "1234567890AVGED", price: 4000, date: "01/02/22" },
  { id: 2, TransactionID: "1234567890AVGED", price: 6000, date: "01/02/22" },
  { id: 3, TransactionID: "1234567890AVGED", price: 5700, date: "01/02/22" },
  { id: 4, TransactionID: "1234567890AVGED", price: 2000, date: "01/02/22" },
  { id: 5, TransactionID: "1234567890AVGED", price: 1000, date: "01/02/22" },
  { id: 6, TransactionID: "1234567890AVGED", price: 1800, date: "01/02/22" },
];

const TransactionHistory: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Transaction History </title>
      </Head>
      <div className="bg-white rounded-md px-5 sm:px-6  md:px-10 py-9 lg:px-14 lg:py-14 flex-1 w-full">
        <Typography
          variant="h4"
          className="text-primary-700 futura font-medium leading-normal mb-2 md:mb-3"
        >
          Transaction History
        </Typography>
        <Typography variant="body1" className="text-neutral-800 max-w-lg">
          Below are your most recently approved transactions. To resolve any
          challenges, please contact us via our “Contact us” page” thank you.
        </Typography>
        <Divider className="mt-5" />
        <div className="grid">
          <TableContainer className="shadow-none" component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="w-full lg:py-5 xl:py-7">
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
                {transactionList.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="w-full  pr-10 lg:py-8 xl:py-16">
                      <Typography
                        variant="h6"
                        className="text-primary-700 futura font-medium"
                      >
                        {transaction.TransactionID}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        className="font-semibold text-primary-700"
                      >
                        $ {transaction.price}
                      </Typography>
                    </TableCell>
                    <TableCell className="pl-10">
                      <Typography
                        variant="h6"
                        className="font-medium text-primary-700"
                      >
                        {transaction.date}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

TransactionHistory.getLayout = (pages) => <WalletLayout>{pages}</WalletLayout>;

export default TransactionHistory;
