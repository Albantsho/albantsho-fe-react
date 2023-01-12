import { Paper, Typography } from "@mui/material";
import useScriptsApi from "apis/Scripts.api";
import { IBidScript } from "interfaces/script";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";
import OpeningBidScript from "./OpeningBidScript/OpeningBidScript";
import emptyBlogs from "@assets/images/empty-blogs.png";

interface IProps {
  searchQuery: string;
}

const OpeningList = ({ searchQuery }: IProps) => {
  const [listedScripts, setListedScripts] = useState<Array<IBidScript>>([]);
  const [loading, setLoading] = useState(true);
  const { getWriterAllPublishedScripts } = useScriptsApi();

  useEffect(() => {
    async function getScriptsFunc() {
      try {
        setLoading(true);
        const res = await getWriterAllPublishedScripts(searchQuery);
        setListedScripts(res.data.scripts);
        console.log(res);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }
    getScriptsFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return loading ? (
    <DotLoader color="#7953B5" className="mx-auto mt-10" />
  ) : listedScripts.length > 0 ? (
    <Paper elevation={0} className="mt-4 bg-white mb-16 shadow-primary">
      <div className="border-b border-tinted-100 px-5 py-5 xl:px-14 xl:py-8 flex">
        <Typography
          variant="h6"
          className="futura w-1/2 sm:w-full sm:max-w-[387px] md:max-w-[377px]  xl:max-w-[408px] font-medium text-primary-700"
        >
          Script
        </Typography>

        <Typography
          variant="h6"
          className="futura hidden md:block lg:hidden xl:flex 2xl:ml-3 md:text-center 2xl:mr-28 font-medium text-primary-700"
        >
          Script Type
        </Typography>
        <Typography
          variant="h6"
          className="futura hidden sm:block self-start md:mx-auto  lg:ml-0 xl:ml-28 xl:mr-0 md:text-center lg:text-star font-medium text-primary-700"
        >
          Bids
        </Typography>
      </div>
      <div className="px-5 xl:px-14 overflow-hidden">
        {listedScripts.map((script, index) => (
          <OpeningBidScript
            key={script._id}
            setListedScript={setListedScripts}
            scripts={listedScripts}
            script={script}
            index={index}
          />
        ))}
      </div>
    </Paper>
  ) : (
    <div className="flex items-center">
      <Image
        width={384}
        height={384}
        loading="lazy"
        className="w-fit h-fit mx-auto mt-14 lg:mt-24"
        src={emptyBlogs}
        alt="empty blog list"
      />
    </div>
  );
};

export default OpeningList;
