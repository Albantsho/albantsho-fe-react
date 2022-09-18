import { Grow, IconButton, Modal } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
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
      <Grow in={openCreateScript}>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl mx-auto flex flex-col py-16 rounded-lg">
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
                "& .MuiOutlinedInput-input": { py: 2 },
                "& .MuiFormHelperText-root": {
                  mx: 0,
                  color: "#5D5FEF",
                },
              }}
              helperText={
                <span className="flex items-center gap-2">
                  <AiFillInfoCircle className="text-xl" />
                  note: ways to create killer titles
                </span>
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
                "& .MuiOutlinedInput-input": { py: 2 },
                "& .MuiFormHelperText-root": {
                  mx: 0,
                  color: "#5D5FEF",
                },
              }}
              helperText={
                <span className="flex items-center gap-2">
                  <AiFillInfoCircle className="text-xl" />
                  What’s a tagline?
                </span>
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
            <CancelBtn onClick={handleCloseModalCreateScript} />
          </div>
        </div>
      </Grow>
    </Modal>
  );
};

export default CreateScriptModal;
