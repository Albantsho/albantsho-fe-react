import Btn from "@shared/Btn/Btn";

import { useRouter } from "next/router";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";

const SearchDashboard = () => {
  const { back } = useRouter();
  console.log(back);

  return (
    <div className="flex justify-start items-center mt-8">
      <div className="flex gap-4 flex-1 w-full">
        <span
          onClick={back}
          className="w-10 h-10 flex justify-center items-center  rounded-full bg-white cursor-pointer"
        >
          <BsArrowLeftShort className="text-3xl text-primary-700" />
        </span>

        <div className="flex items-center bg-white py-2 px-5 rounded-md gap-2 flex-1 md:flex-grow-0 md:min-w-[350px] md:w-auto">
          <BiSearch className="text-neutral-800 md:text-2xl md:mr-1   text-xl" />
          <input
            placeholder="search"
            className=" outline-none border-none  placeholder:text-neutral-800 md:text-base text-primary-700 w-full md:w-auto"
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
