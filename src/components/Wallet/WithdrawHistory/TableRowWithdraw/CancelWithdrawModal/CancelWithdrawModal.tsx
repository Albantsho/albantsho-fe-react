import { Grow, IconButton, Modal, SvgIcon, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useWithdrawApi from "apis/withdraw.api";
import { AiOutlineClose } from "react-icons/ai";
import { useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";

interface IProps {
  openCancelWithdrawModal: boolean;
  handleCloseCancelWithdrawModal: () => void;
  refetch: any;
  id: string;
}

const controller = new AbortController();

const CancelWithdrawModal = ({
  openCancelWithdrawModal,
  handleCloseCancelWithdrawModal,
  refetch,
  id,
}: IProps) => {
  const { withdrawDelete } = useWithdrawApi(controller);

  const { mutate: cancelWithdraw, isLoading: loadingCancelWithdraw } =
    useMutation<{ message: string }, Error, string>(
      (data) => withdrawDelete(data),
      {
        onError: (error) => {
          errorHandler(error);
        },

        onSuccess: (data) => {
          successHandler(data.message);
          refetch && refetch();
        },
      }
    );

  const onClickCancelWithdraw = () => cancelWithdraw(id);

  return (
    <Modal
      className="px-5"
      open={openCancelWithdrawModal}
      onClose={handleCloseCancelWithdrawModal}
    >
      <Grow in={openCancelWithdrawModal}>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-lg mx-auto flex flex-col items-center py-12 rounded-lg">
          <IconButton
            onClick={handleCloseCancelWithdrawModal}
            className="absolute top-5 right-5"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <SvgIcon
              color="error"
              width={100}
              height={100}
              component={AiOutlineClose}
              inheritViewBox
              className="w-24 h-24"
            />
          </div>
          <Typography
            className="text-center max-w-[351px] mt-2 lg:mt-5 leading-7 font-normal"
            color="primary.700"
            variant="h6"
          >
            Are you sure you want to cancel this withdraw?
          </Typography>
          <div className="flex w-full justify-center gap-3 sm:gap-6 mt-4 lg:mt-7">
            <Btn
              loading={loadingCancelWithdraw}
              onClick={onClickCancelWithdraw}
              size="large"
              className="py-3 px-5 text-white self-stretch bg-primary-700 rounded-lg"
            >
              Proceed
            </Btn>
            <CancelBtn onClick={handleCloseCancelWithdrawModal} />
          </div>
        </div>
      </Grow>
    </Modal>
  );
};

export default CancelWithdrawModal;
