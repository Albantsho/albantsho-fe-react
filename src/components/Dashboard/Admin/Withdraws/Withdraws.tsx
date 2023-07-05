import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import type { IWithdrawForAdmin } from "interfaces/withdraw";
import Withdraw from "./Withdraw/Withdraw";

interface IProps {
  withdraws: IWithdrawForAdmin[];
  refetch:any
}

const Withdraws = ({ withdraws, refetch}: IProps) => {
  return (
    <TableContainer className="shadow-none no-scrollbar" component={Paper}>
      <Table className="no-scrollbar">
        <TableHead>
          <TableRow className="border-b border-gray-200">
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
                Method
              </Typography>
            </TableCell>
            <TableCell className="pl-10">
              <Typography
                variant="h6"
                className="futura font-medium text-neutral-800"
              ></Typography>
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
          {withdraws.map((withdraw) => (
            <Withdraw refetch={refetch} key={withdraw._id} withdraw={withdraw} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Withdraws;
