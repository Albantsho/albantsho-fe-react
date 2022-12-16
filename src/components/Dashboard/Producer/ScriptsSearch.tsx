import { RiSearch2Line } from "react-icons/ri";

interface IProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ScriptsSearch = ({ handleSearch }: IProps) => {
  return (
    <div className="flex items-center bg-white shadow-primary mt-8 py-2 px-5 rounded-md gap-2 flex-1  lg:max-w-[350px]">
      <RiSearch2Line className="text-gray-400 text-2xl md:mr-1" />
      <input
        onChange={handleSearch}
        placeholder="Search"
        className=" outline-none border-none  placeholder:text-gray-400 text-base text-gray-600 w-full"
      />
    </div>
  );
};

export default ScriptsSearch;
