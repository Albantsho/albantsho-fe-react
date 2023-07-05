import { IconButton, Modal, Slide, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useWithdrawApi from "apis/withdraw.api";
import { AiOutlineClose } from "react-icons/ai";
import { QueryClient, useMutation } from "react-query";
import errorHandler from "utils/error-handler";

interface IProps {
  openRejectWithdrawModal: boolean;
  handleCloseRejectWithdrawModal: () => void;
  withdrawId: string;
  refetch: any;
}

const queryClient = new QueryClient();

const RejectWithdrawModal = ({
  openRejectWithdrawModal,
  handleCloseRejectWithdrawModal,
  withdrawId,
  refetch,
}: IProps) => {
  const { updateStatusWithdraw } = useWithdrawApi();

  const { mutate: rejectWithdraw, isLoading: loadingConfirmWithdraw } =
    useMutation(
      () => updateStatusWithdraw(withdrawId, { status: "rejected" }),
      {
        onError: (error) => {
          errorHandler(error);
        },
        onSuccess: () => {
          handleCloseRejectWithdrawModal();
          refetch();
          return queryClient.invalidateQueries({ queryKey: ["withdraws"] });
        },
      }
    );

  const handleConfirmWithdraw = () => rejectWithdraw();

  return (
    <Modal
      className="px-5"
      open={openRejectWithdrawModal}
      onClose={handleCloseRejectWithdrawModal}
    >
      <Slide direction="up" in={openRejectWithdrawModal}>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl lg:max-w-2xl mx-auto flex flex-col items-center py-12 lg:py-16 rounded-lg">
          <IconButton
            onClick={handleCloseRejectWithdrawModal}
            className="absolute top-5 right-5"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <div></div>
          <Typography
            className="text-center max-w-xs mt-2 lg:mt-5 leading-7 font-normal"
            color="primary.700"
            variant="h6"
          >
            You’ll be reject this withdraw. Do you want to proceed?
          </Typography>
          <div className="flex w-full justify-center gap-3 sm:gap-6 mt-4 lg:mt-7">
            <Btn
              loading={loadingConfirmWithdraw}
              onClick={handleConfirmWithdraw}
              size="large"
              className="py-3 px-5 text-white self-stretch bg-primary-700 rounded-lg"
            >
              Proceed
            </Btn>
            <CancelBtn onClick={handleCloseRejectWithdrawModal} />
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default RejectWithdrawModal;
