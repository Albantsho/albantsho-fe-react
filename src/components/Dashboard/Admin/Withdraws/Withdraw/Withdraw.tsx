import { IconButton, TableCell, TableRow, Typography } from "@mui/material";
import { IWithdrawForAdmin } from "interfaces/withdraw";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { MdDone, MdOutlineClose } from "react-icons/md";
import RejectWithdrawModal from "./RejectWithdrawModal/RejectWithdrawModal";

const ConfirmWithdrawModal = dynamic(
  () => import("./ConfirmWithdrawModal/ConfirmWithdrawModal")
);

interface IProps {
  withdraw: IWithdrawForAdmin;
  refetch: any;
}

const TableRowWithdraw = ({ withdraw, refetch }: IProps) => {
  const [openConfirmWithdrawModal, setOpenConfirmWithdrawModal] =
    useState(false);
  const [openRejectWithdrawModal, setOpenRejectWithdrawModal] = useState(false);

  const handleCloseConfirmWithdrawModal = () =>
    setOpenConfirmWithdrawModal(false);

  const handleOpenConfirmWithdrawModal = () =>
    setOpenConfirmWithdrawModal(true);

  const handleCloseRejectWithdrawModal = () =>
    setOpenRejectWithdrawModal(false);

  const handleOpenRejectWithdrawModal = () => setOpenRejectWithdrawModal(true);

  return (
    <>
      <TableRow>
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
            {withdraw.method}
          </Typography>
        </TableCell>
        <TableCell className="pl-10">
          {withdraw.status === "onchecking" && (
            <IconButton
              onClick={handleOpenConfirmWithdrawModal}
              className="w-10 h-10 lg:w-12 lg:h-12 text-error-500 hover:bg-error-50"
            >
              <MdDone className="w-8 h-8 lg:w-10 lg:h-10 text-success-500" />
            </IconButton>
          )}
        </TableCell>
        <TableCell className="pl-10">
          {withdraw.status === "onchecking" && (
            <IconButton
              onClick={handleOpenRejectWithdrawModal}
              className="w-10 h-10 lg:w-12 lg:h-12 text-error-500 hover:bg-error-50"
            >
              <MdOutlineClose className="w-8 h-8 lg:w-10 lg:h-10 text-error-500" />
            </IconButton>
          )}
        </TableCell>
      </TableRow>
      <Suspense>
        {openConfirmWithdrawModal ? (
          <ConfirmWithdrawModal
            refetch={refetch}
            withdrawId={withdraw._id}
            handleCloseConfirmWithdrawModal={handleCloseConfirmWithdrawModal}
            openConfirmWithdrawModal={openConfirmWithdrawModal}
          />
        ) : undefined}
      </Suspense>
      <Suspense>
        {openRejectWithdrawModal ? (
          <RejectWithdrawModal
            refetch={refetch}
            withdrawId={withdraw._id}
            handleCloseRejectWithdrawModal={handleCloseRejectWithdrawModal}
            openRejectWithdrawModal={openRejectWithdrawModal}
          />
        ) : undefined}
      </Suspense>
    </>
  );
};

export default TableRowWithdraw;
