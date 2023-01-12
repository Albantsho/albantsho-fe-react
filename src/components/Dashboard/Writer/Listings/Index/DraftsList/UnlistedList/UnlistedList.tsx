import { Divider, Paper, Typography } from "@mui/material";
import { IUnlistedScript } from "interfaces/script";
import Image from "next/image";
import React from "react";
import UnlistedScript from "./UnlistedScript/UnlistedScript";
import emptyBlogs from "@assets/images/empty-blogs.png";

interface IProps {
  unListedScripts: IUnlistedScript[];
  setUnListedScripts: React.Dispatch<React.SetStateAction<IUnlistedScript[]>>;
}

const UnlistedList = ({ unListedScripts, setUnListedScripts }: IProps) => {
  return unListedScripts.length ? (
    <Paper elevation={0} className="mt-4 sm:mt-6 bg-white shadow-primary">
      <div className="border-b border-tinted-100 px-5 py-5 xl:px-14 xl:py-8 flex">
        <Typography
          variant="h6"
          className="futura w-1/2 sm:w-full md:max-w-[220px]  lg:max-w-full xl:max-w-[415px] font-medium text-primary-700"
        >
          Script
        </Typography>

        <Typography
          variant="h6"
          className="futura hidden  md:block lg:hidden xl:block self-start md:self-center md:mx-auto xl:mr-auto xl:ml-0  sm:mr-3 md:text-center  font-medium text-primary-700"
        >
          Script Type
        </Typography>
        <Typography></Typography>
      </div>
      <div className="px-5 xl:px-14 overflow-hidden">
        {unListedScripts.map((script, index) => (
          <React.Fragment key={script._id}>
            <UnlistedScript
              setUnListedScripts={setUnListedScripts}
              key={script._id}
              script={script}
            />
            {index < unListedScripts.length - 1 && (
              <Divider className="hidden sm:flex" />
            )}
          </React.Fragment>
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

export default UnlistedList;
