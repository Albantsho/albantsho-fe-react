import { Modal, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import cancell from "./assets/cancell.png";
import onArchive from "./assets/on-archive.png";

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalProject = ({ open, setOpen }: IProps) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal className="px-5" open={open} onClose={handleClose}>
      <div className="px-6 relative bg-white w-full mt-12 max-w-xl mx-auto flex flex-col py-16 rounded-lg">
        <div
          onClick={handleClose}
          className="absolute top-5 right-5 cursor-pointer"
        >
          <Image src={cancell} alt="cancell" />
        </div>
        <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
          <label className="futura font-medium">
            Script Title<span className="text-error-700">*</span>
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-md outline-none py-3 px-4 w-full bg-white"
          />
          <span className="text-blue-600">
            note: ways to create killer titles
          </span>
        </div>
        <div className="flex items-start flex-col justify-start gap-2">
          <label className="futura font-medium">
            Tagline
            <span className="text-error-700">*</span>
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-md outline-none py-3 px-4 w-full bg-white"
          />
          <span className="text-blue-600">What’s a tagline?</span>
        </div>
        <div className="space-x-3 mt-8 md:ml-auto">
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
