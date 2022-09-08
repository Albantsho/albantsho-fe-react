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
      <div className="bg-white rounded-md px-3 sm:px-6 py-6 md:px-10 md:py-9 lg:px-14 lg:py-14 flex-1 w-full">
        <Typography
          variant="h4"
          className="text-primary-700 futura font-medium"
        >
          Transaction History
        </Typography>
        <Typography variant="body1" className="text-neutral-800 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
          scelerisque nulla eget tincidunt venenatis convallis massa nisi,
          egestas.
        </Typography>
        <Divider className="mt-5" />
        <div className="grid">
          <TableContainer className="shadow-none" component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="w-full">
                    <Typography variant="body1" className="futura font-medium">
                      Transaction ID
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      className="lg:mr-20 futura font-medium w-20"
                    >
                      Price
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" className="futura font-medium">
                      Date
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactionList.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="w-full">
                      <Typography className="text-primary-700 futura font-medium">
                        {transaction.TransactionID}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        className="font-semibold text-primary-700"
                      >
                        $ {transaction.price}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="font-medium text-primary-700">
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
