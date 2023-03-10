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
import pictureDeleteScript from "./assets/trash.png";

interface IProps {
  openDeleteScript: boolean;
  setOpenDeleteScript: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  refetch: any;
}

const queryClient = new QueryClient();

const DeleteScriptModal = ({
  openDeleteScript,
  setOpenDeleteScript,
  id,
  refetch,
}: IProps) => {
  const { deleteScript } = useScriptsApi();

  const { mutate: deleteScriptMutation, isLoading: isLoadingDeleteScript } =
    useMutation<IResData<object>, Error, string>(
      (scriptId) => deleteScript(scriptId),
      {
        onError: (error) => {
          errorHandler(error);
        },
        onSuccess: (data) => {
          successHandler(data.message);
          refetch();
          handleCloseDeleteScript();
          queryClient.invalidateQueries(
            ["opening-scripts", "unpublished-scripts"],
            {
              exact: true,
              stale: true,
            }
          );
        },
      }
    );

  const deleteScriptFunc = () => deleteScriptMutation(id);
  const handleCloseDeleteScript = () => setOpenDeleteScript(false);

  return (
    <Modal
      className="px-5"
      open={openDeleteScript}
      onClose={handleCloseDeleteScript}
    >
      <Slide direction="left" in={openDeleteScript} mountOnEnter unmountOnExit>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl mx-auto flex flex-col items-center py-16 rounded-lg">
          <IconButton
            onClick={handleCloseDeleteScript}
            className="absolute top-5 right-5"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image
              src={pictureDeleteScript}
              alt="delete script modal picture"
            />
          </div>
          <Typography
            className="text-center max-w-[279px] my-5 lg:my-6"
            color="primary.700"
            variant="body1"
          >
            Are you sure you want to delete this script?
          </Typography>
          <div className="flex gap-3 sm:gap-6">
            <Btn
              onClick={deleteScriptFunc}
              size="large"
              className="py-3 px-5 rounded-lg"
              variant="contained"
              color="error"
              loading={isLoadingDeleteScript}
            >
              Delete Script
            </Btn>
            <CancelBtn onClick={handleCloseDeleteScript} />
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default DeleteScriptModal;
