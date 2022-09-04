import {
  Button,
  ButtonGroup,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { AiOutlineClose } from "react-icons/ai";
import { MdDone } from "react-icons/md";

const auctions = [
  { name: "Woyenbrakemi", price: 4000 },
  { name: "Talan", price: 6000 },
  { name: "Odhran", price: 5700 },
  { name: "Desmond", price: 2000 },
  { name: "Musa", price: 1000 },
  { name: "Lawlyn", price: 18000 },
];

const AuctionsScripts = () => {
  return (
    <div className="mt-10 md:mt-20">
      <Typography variant="h6" color="primary.700">
        Auctions
      </Typography>
      <TableContainer>
        <Table className=" overflow-x-scroll">
          <TableHead sx={{ overflow: "scroll" }}>
            <TableRow className="border-b border-gray-200">
              <TableCell className="min-w-[150px]">
                <Typography
                  variant="body1"
                  className="text-purple-700 futura font-medium"
                >
                  Bidder
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  "&.MuiTableCell-root": {
                    p: { sm: 0 },
                    border: 0,
                  },
                }}
              >
                <Typography
                  variant="body1"
                  className="text-purple-700 futura font-medium"
                >
                  Asking Price
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ overflow: "scroll" }}>
            {auctions.map((auction) => (
              <TableRow
                key={auction.price}
                sx={{ "& td, & th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    "&.MuiTableCell-root": {
                      pr: { sm: 5 },
                    },
                  }}
                  className="min-w-[150px]"
                >
                  <Typography>{auction.name}</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    "&.MuiTableCell-root": {
                      p: { sm: 0 },
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    className="text-primary-700 font-semibold"
                  >
                    $ {auction.price}
                  </Typography>
                </TableCell>

                <TableCell
                  sx={{
                    "&.MuiTableCell-root": {
                      pr: { sm: 0 },
                    },
                  }}
                  className=""
                >
                  <ButtonGroup className="border-none md:gap-8 lg:gap-12">
                    <Button className="hidden sm:flex border-none hover:border-none text-success-500">
                      completed
                    </Button>
                    <Button className="hidden sm:flex border-none hover:border-none text-secondary-700">
                      deleted
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <IconButton className="flex sm:hidden text-success-500">
                      <MdDone />
                    </IconButton>
                    <IconButton className="flex sm:hidden text-secondary-700">
                      <AiOutlineClose />
                    </IconButton>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AuctionsScripts;
