import { IconButton, Modal } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import { Dispatch, SetStateAction } from "react";
import { AiFillInfoCircle, AiOutlineClose } from "react-icons/ai";
interface IProps {
  openModalCreateScript: boolean;
  setOpenModalCreateScript: Dispatch<SetStateAction<boolean>>;
}

const ModalProject = ({ openModalCreateScript, setOpenModalCreateScript }: IProps) => {
  const handleClose = () => setOpenModalCreateScript(false);
  return (
    <Modal className="px-5" open={openModalCreateScript} onClose={handleClose}>
      <div className="px-6 relative bg-white w-full mt-12 max-w-lg mx-auto flex flex-col py-16 rounded-lg">
        <IconButton onClick={handleClose} className="absolute top-5 right-5">
          <AiOutlineClose className="text-error-500" />
        </IconButton>
        <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
          <label htmlFor="title-script" className="futura font-medium">
            Script Title<span className="text-error-700">*</span>
          </label>
          <CustomInput
            fullWidth
            id="title-script"
            variant="outlined"
            size="medium"
          />
          <span className="text-blue-600 flex items-center gap-2">
            <AiFillInfoCircle className="text-xl" />
            note: ways to create killer titles
          </span>
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
            size="medium"
          />
          <span className="text-blue-600 flex items-center gap-2">
            <AiFillInfoCircle className="text-xl" />
            What’s a tagline?
          </span>
        </div>
        <div className=" mt-8 md:ml-auto flex flex-wrap gap-3">
          <Btn size="large" className="py-4 px-5  text-white bg-primary-700">
            Create Script
          </Btn>
          <Btn
            size="large"
            disabled
            className="py-4 px-5  border border-gray-300"
          >
            Cancel
          </Btn>
        </div>
      </div>
    </Modal>
  );
};

export default ModalProject;

{
  /* <label className="futura font-medium">
Script Title<span className="text-error-700">*</span>
</label>
<input
type="text"
className="border border-gray-300 rounded-md outline-none py-3 px-4 w-full bg-white"
/> */
}
