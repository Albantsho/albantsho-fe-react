import {  IconButton, Modal } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import DeleteBtn from "@shared/DeleteBtn/DeleteBtn";
import { Dispatch, SetStateAction } from "react";
import { AiFillInfoCircle, AiOutlineClose } from "react-icons/ai";
interface IProps {
  openCreateScript: boolean;
  setOpenCreateScript: Dispatch<SetStateAction<boolean>>;
}

const CreateScriptModal = ({
  openCreateScript,
  setOpenCreateScript,
}: IProps) => {
  const handleCloseModalCreateScript = () => setOpenCreateScript(false);
  return (
    <Modal
      className="px-5"
      open={openCreateScript}
      onClose={handleCloseModalCreateScript}
    >
      <div className="px-6 relative bg-white w-full mt-12 max-w-lg mx-auto flex flex-col py-16 rounded-lg">
        <IconButton
          color="error"
          onClick={handleCloseModalCreateScript}
          className="absolute top-5 right-5"
        >
          <AiOutlineClose />
        </IconButton>
        <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
          <label htmlFor="title-script" className="futura font-medium">
            Script Title<span className="text-error-700">*</span>
          </label>
          <CustomInput
            fullWidth
            id="title-script"
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-input": { py: 1.3 },
              "& .MuiFormHelperText-root": {
                mx: 0,
                color: "#5D5FEF",
              },
            }}
            helperText={
              <div className="flex items-center gap-2">
                <AiFillInfoCircle className="text-xl" />
                note: ways to create killer titles
              </div>
            }
          />
        </div>
        <div className="flex items-start flex-col justify-start gap-2">
          <label htmlFor="tagline" className="futura font-medium">
            Tagline
            <span className="text-error-700">*</span>
          </label>
          <CustomInput
            fullWidth
            id="tagline"
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-input": { py: 1.3 },
              "& .MuiFormHelperText-root": {
                mx: 0,
                color: "#5D5FEF",
              },
            }}
            helperText={
              <div className="flex items-center gap-2">
                <AiFillInfoCircle className="text-xl" />
                What’s a tagline?
              </div>
            }
          />
        </div>
        <div className="mt-8 md:ml-auto flex items-stretch  gap-3">
          <Btn
            size="large"
            className="py-3 px-5 rounded-lg  text-white bg-primary-700"
          >
            Create Script
          </Btn>
          <DeleteBtn onClick={handleCloseModalCreateScript} />
        </div>
      </div>
    </Modal>
  );
};

export default CreateScriptModal;