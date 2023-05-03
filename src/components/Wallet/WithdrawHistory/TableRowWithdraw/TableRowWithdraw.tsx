import { TableRow, TableCell, Typography, IconButton } from "@mui/material";
import { IWithdraw } from "interfaces/withdraw";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { AiOutlineClose, AiOutlineFileDone } from "react-icons/ai";
import { MdDone, MdOutlineDoNotDisturb } from "react-icons/md";

const CancelWithdrawModal = dynamic(
  () => import("./CancelWithdrawModal/CancelWithdrawModal")
);

interface IProps {
  withdraw: IWithdraw;
  refetch: any;
}

const TableRowWithdraw = ({ withdraw, refetch }: IProps) => {
  const [openCancelWithdrawModal, setOpenCancelWithdrawModal] = useState(false);

  const handleCloseCancelWithdrawModal = () =>
    setOpenCancelWithdrawModal(false);

  const handleOpenCancelWithdrawModal = () => setOpenCancelWithdrawModal(true);

  return (
    <>
      <TableRow>
        <TableCell className="w-full  pr-10 lg:py-8 xl:py-16">
          <Typography
            variant="h6"
            className="text-primary-700 text-center futura font-medium"
          >
            {withdraw.transactionId || "-"}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h6" className="font-semibold text-primary-700">
            $ {withdraw.amount}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h6" className="font-semibold text-primary-700">
            {withdraw.status}
          </Typography>
        </TableCell>
        <TableCell className="pl-10">
          <Typography variant="h6" className="font-medium text-primary-700">
            {new Date(withdraw.createdAt).toLocaleDateString()}
          </Typography>
        </TableCell>
        <TableCell className="pl-10">
          {withdraw.status === "onchecking" ? (
            <IconButton
              onClick={handleOpenCancelWithdrawModal}
              className="w-10 h-10 lg:w-12 lg:h-12 text-error-500 hover:bg-error-50"
            >
              <AiOutlineClose className="w-8 h-8 lg:w-10 lg:h-10" />
            </IconButton>
          ) : withdraw.status === "done" ? (
            <MdDone className="w-8 h-8 lg:w-10 lg:h-10 text-success-500" />
          ) : (
            <MdOutlineDoNotDisturb className="w-8 h-8 lg:w-10 lg:h-10 text-error-500" />
          )}
        </TableCell>
      </TableRow>
      <Suspense>
        {openCancelWithdrawModal ? (
          <CancelWithdrawModal
            refetch={refetch}
            id={withdraw._id}
            handleCloseCancelWithdrawModal={handleCloseCancelWithdrawModal}
            openCancelWithdrawModal={openCancelWithdrawModal}
          />
        ) : undefined}
      </Suspense>
    </>
  );
};

export default TableRowWithdraw;
