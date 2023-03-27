import pictureModalsSaves from "@assets/images/picture-modals-saves.png";
import { IconButton, Modal, Typography, Zoom } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useScriptsApi from "apis/Scripts.api";
import { IResData } from "interfaces/response";
import { IWriterScript } from "interfaces/script";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import { QueryClient, useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";
interface IProps {
  openPublishScript: boolean;
  setOpenPublishScript: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  listScripts: IWriterScript[];
}

const queryClient = new QueryClient();

const PublishScriptModal = ({
  openPublishScript,
  setOpenPublishScript,
  id,
  listScripts,
}: IProps) => {
  const { updatePublishedScript } = useScriptsApi();
  const { push, query } = useRouter();
  const handleClosePublishScript = () => setOpenPublishScript(false);

  const { mutate: publishScriptMutate, isLoading: isLoadingArchiveScript } =
    useMutation<
      IResData<object>,
      Error,
      { payload: { publish: boolean }; scriptId: string }
    >(
      (data) =>
        updatePublishedScript({ publish: data.payload.publish }, data.scriptId),
      {
        onError: (error) => errorHandler(error),
        onSuccess: (data) => {
          successHandler(data.message);
          if (listScripts.length <= 1) {
            push(`?archive=false&page=${+String(query.page) - 1}`, undefined, {
              shallow: true,
            });
          }
          queryClient.invalidateQueries(["script"]);
        },
      }
    );

  const publishScriptFunc = async () => {
    publishScriptMutate({ payload: { publish: true }, scriptId: id });
  };

  return (
    <Modal
      className="px-5"
      open={openPublishScript}
      onClose={handleClosePublishScript}
    >
      <Zoom in={openPublishScript}>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl mx-auto flex flex-col items-center py-16 rounded-lg">
          <IconButton
            color="error"
            onClick={handleClosePublishScript}
            className="absolute top-5 right-5"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image
              src={pictureModalsSaves}
              alt="add to archive modal picture"
            />
          </div>
          <Typography
            className="text-center font-normal mt-4"
            color="primary.700"
            variant="h6"
            component="p"
          >
            Proceed to publish script?
          </Typography>
          <div className="flex gap-2 sm:gap-5 mt-8 justify-center items-stretch">
            <Btn
              loading={isLoadingArchiveScript}
              size="large"
              className="py-3 px-5 text-white bg-primary-700 rounded-lg"
              onClick={publishScriptFunc}
            >
              Proceed
            </Btn>
            <CancelBtn onClick={handleClosePublishScript} />
          </div>
        </div>
      </Zoom>
    </Modal>
  );
};

export default PublishScriptModal;
