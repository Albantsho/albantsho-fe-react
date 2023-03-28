import { Divider, Grow, IconButton, Modal } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import successImage from "../assets/success.png";

interface IProps {
  email: string;
  handleCloseSuccessAddWaitListModal: () => void;
  successAddWaitList: boolean;
}

const SuccessAddWaitListModal = ({
  email,
  handleCloseSuccessAddWaitListModal,
  successAddWaitList,
}: IProps) => {
  return (
    <Modal className="px-5" open={successAddWaitList}>
      <Grow in={successAddWaitList}>
        <div className="relative text-white bg-[#573195] w-full mt-96 lg:mt-52 max-w-lg mx-auto flex flex-col pt-10 pb-3">
          <IconButton
            color="inherit"
            onClick={handleCloseSuccessAddWaitListModal}
            className="absolute top-3 right-3"
          >
            <AiOutlineClose className="w-4 h-4" />
          </IconButton>

          <div className="w-16 h-16 mx-auto mb-2">
            <Image src={successImage} alt="success" width={60} height={60} />
          </div>
          <h3
            style={{ fontFamily: "Space Grotesk" }}
            className="text-center text-xl font-bold mb-2 sm:mb-4"
          >
            You’re on the waitlist!
          </h3>
          <p className="max-w-[315px] inter px-6 sm:px-10 text-sm sm:max-w-full text-center mx-auto text-[#DDD4EC]">
            {email}, you’ve been successfully added to Albantsho’s waitlist
          </p>
          <Divider className="mb-3 mt-8 bg-[#DDD4EC]" />
          <button
            onClick={handleCloseSuccessAddWaitListModal}
            className="px-8 py-4 inter font-semibold cursor-pointer bg-white w-fit mx-auto rounded-lg text-[#573195]"
          >
            Okay, great!
          </button>
        </div>
      </Grow>
    </Modal>
  );
};

export default SuccessAddWaitListModal;
