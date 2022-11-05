import Btn from "@shared/Btn/Btn";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { RiSearch2Line } from "react-icons/ri";

interface IProps {
  setOpenAddNewBlog: Dispatch<SetStateAction<boolean>>;
}

const AdminDashboardSearch = ({ setOpenAddNewBlog }: IProps) => {
  const { route } = useRouter();
  const handleOpenAddNewBlog = () => setOpenAddNewBlog(true);

  return (
    <div className="flex justify-start text-primary-700 items-center mt-8">
      <div className="flex gap-4 flex-1 w-full">
        <div className="flex items-center shadow-primary bg-white py-2 px-5 rounded-md gap-2 flex-1 md:flex-grow-0 md:min-w-[350px] md:w-auto">
          <RiSearch2Line className="text-gray-400 text-2xl md:mr-1" />
          <input
            placeholder="Search"
            className=" outline-none border-none  placeholder:text-gray-400 text-base text-gray-600 w-full"
          />
        </div>
      </div>
      {route === "blogs" && (
        <div className="hidden  md:block md:justify-center xl:flex-end">
          <Btn
            onClick={handleOpenAddNewBlog}
            className="ml-auto  py-3 px-6"
            size="large"
          >
            New Blog
          </Btn>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardSearch;
