import Btn from "@shared/Btn/Btn";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";

const SearchDashboard = () => {
  return (
    <div className="flex justify-start items-center mt-8">
      <div className="flex gap-4 flex-1 w-full">
        <span className="w-10 h-10  flex justify-center items-center  rounded-full bg-white">
          <BsArrowLeftShort className="text-3xl text-primary-700" />
        </span>
        <div className="flex items-center bg-white py-2 px-5 rounded-md gap-2 w-full md:w-auto">
          <BiSearch className="text-gray-400   text-xl" />
          <input
            placeholder="search"
            className=" outline-none border-none flex-1 placeholder:text-gray-400 text-primary-700 w-full"
          />
        </div>
      </div>
      <div className="hidden  md:block md:justify-center xl:flex-end">
        <Btn className=" ml-auto  py-3 px-6" size="large">
          List New Script
        </Btn>
      </div>
    </div>
  );
};

export default SearchDashboard;
