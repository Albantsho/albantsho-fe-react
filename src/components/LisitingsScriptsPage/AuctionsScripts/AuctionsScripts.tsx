import {
  Button,
  ButtonGroup,
  IconButton,
  Paper,
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

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ overflow: "scroll" }}>
            <TableRow>
              <TableCell>Bidder</TableCell>
              <TableCell>Asking Price</TableCell>
              <TableCell> </TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ overflow: "scroll" }}>
            {auctions.map((auction) => (
              <TableRow
                key={auction.price}
                sx={{ "& td, & th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {auction.name}
                </TableCell>
                <TableCell>$ {auction.price}</TableCell>

                <TableCell>
                  <ButtonGroup className="border-none">
                    <Button className="hidden sm:flex border-none hover:border-none">
                      completed
                    </Button>
                    <Button className="hidden sm:flex border-none hover:border-none">
                      deleted
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <IconButton className="flex sm:hidden">
                      <MdDone />
                    </IconButton>

                    <IconButton className="flex sm:hidden">
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
