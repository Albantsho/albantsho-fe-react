import { IconButton, Modal, Slide, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useScriptsApi from "apis/Scripts.api";
import { IResData } from "interfaces/response";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { QueryClient, useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";
import UnListingItem from "./assets/un-listing-item.png";

interface IProps {
  openUnListingItem: boolean;
  setOpenUnListingItem: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  refetch: any;
}

const queryClient = new QueryClient();

const UnListingItemModal = ({
  openUnListingItem,
  setOpenUnListingItem,
  id,
  refetch,
}: IProps) => {
  const { updatePublishedScript } = useScriptsApi();

  const { mutate: unPublishScriptMutation, isLoading: loadingUnPublishScript } =
    useMutation<
      IResData<object>,
      Error,
      { payload: { published: boolean }; scriptId: string }
    >(
      (data) =>
        updatePublishedScript(
          { published: data.payload.published },
          data.scriptId
        ),
      {
        onError: (error) => errorHandler(error),
        onSuccess: (data) => {
          successHandler(data.message);
          refetch();
          queryClient.invalidateQueries("script");
          handleClose();
        },
      }
    );

  const handleClose = () => setOpenUnListingItem(false);

  const unListingScript = async () =>
    unPublishScriptMutation({ payload: { published: false }, scriptId: id });

  return (
    <Modal className="px-5" open={openUnListingItem} onClose={handleClose}>
      <Slide
        direction="right"
        in={openUnListingItem}
        mountOnEnter
        unmountOnExit
      >
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl mx-auto flex flex-col items-center py-16 rounded-lg">
          <IconButton
            color="error"
            onClick={handleClose}
            className="absolute top-5 right-5"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image src={UnListingItem} alt="UnListing Item" />
          </div>
          <Typography
            className="text-center max-w-[212px] my-5 lg:my-6"
            color="primary.700"
            variant="body1"
          >
            Are you sure you want to unlist this script?
          </Typography>
          <div className="flex gap-3 sm:gap-6">
            <Btn
              onClick={unListingScript}
              loading={loadingUnPublishScript}
              size="large"
              className="py-3 px-5 md:px-3 rounded-lg md:py-4 text-white bg-primary-700"
            >
              Unlist Script
            </Btn>
            <CancelBtn onClick={handleClose} />
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default UnListingItemModal;
