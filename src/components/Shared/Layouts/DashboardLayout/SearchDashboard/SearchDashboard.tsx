import { IconButton } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { BsArrowLeftShort } from "react-icons/bs";

interface IProps {
  setOpenModalCreateScript: Dispatch<SetStateAction<boolean>>;
}

const SearchDashboard = ({ setOpenModalCreateScript }: IProps) => {
  const { back } = useRouter();
  const handleOpen = () => setOpenModalCreateScript(true);

  return (
    <div className="flex justify-start items-center mt-8">
      <div className="flex gap-4 flex-1 w-full">
        <IconButton
          onClick={back}
          className="bg-white"
        >
          <BsArrowLeftShort className="text-3xl text-primary-700" />
        </IconButton>

        <div className="flex items-center bg-white py-2 px-5 rounded-md gap-2 flex-1 md:flex-grow-0 md:min-w-[350px] md:w-auto">
          <RiSearch2Line className="text-gray-400 md:text-2xl md:mr-1   text-xl" />
          <input
            placeholder="Search"
            className=" outline-none border-none  placeholder:text-gray-400 md:text-base text-gray-600 w-full md:w-auto"
          />
        </div>
      </div>
      <div className="hidden  md:block md:justify-center xl:flex-end">
        <Btn onClick={handleOpen} className="ml-auto  py-3 px-6" size="large">
          List New Script
        </Btn>
      </div>
    </div>
  );
};

export default SearchDashboard;
