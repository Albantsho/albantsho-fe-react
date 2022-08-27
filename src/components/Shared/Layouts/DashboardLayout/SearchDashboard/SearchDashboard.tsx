import Btn from "@shared/Btn/Btn";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";

const SearchDashboard = () => {
  return (
    <div className="flex justify-start items-center mt-8">
      <div className=" flex gap-5 flex-1 lg:w-1/2">
        <span className="w-12 h-12  flex justify-center items-center  rounded-full bg-white">
          <BsArrowLeftShort className="text-3xl text-primary-700 " />
        </span>
        <div className="flex items-center bg-white py-2 px-5 rounded-md gap-2 flex-1">
          <BiSearch className="text-[#484848] text-3xl" />
          <input
            placeholder="search"
            className=" outline-none border-none flex-1"
          />
        </div>
      </div>
      <div className="hidden lg:w-1/2 lg:flex justify-end">
        <Btn className=" ml-auto  py-3 px-6" size="large">
          List New Script
        </Btn>
      </div>
    </div>
  );
};

export default SearchDashboard;
