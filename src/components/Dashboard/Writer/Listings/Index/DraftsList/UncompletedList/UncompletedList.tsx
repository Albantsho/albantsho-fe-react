import { Divider, Paper, Typography } from "@mui/material";
import { IUnCompletedScript } from "interfaces/script";
import React from "react";
import UncompletedScript from "./UncompletedScript/UncompletedScript";
import emptyBlogs from "@assets/images/empty-blogs.png";
import Image from "next/image";

interface IProps {
  unCompletedScripts: IUnCompletedScript[];
}

const UncompletedList = ({ unCompletedScripts }: IProps) => {
  return unCompletedScripts.length > 0 ? (
    <Paper elevation={0} className="mt-4 sm:mt-6 shadow-primary bg-white">
      <div className="border-b border-tinted-100 px-5 py-5 xl:px-14 xl:py-8 flex">
        <Typography
          variant="h6"
          className="futura w-1/2 sm:w-full md:max-w-[220px]  lg:max-w-full xl:max-w-[410px] font-medium text-primary-700"
        >
          Script
        </Typography>

        <Typography
          variant="h6"
          className="futura hidden sm:block self-start md:self-center md:mx-auto lg:ml-5  sm:mr-8 md:text-center lg:text-start lg:mr-7 font-medium text-primary-700"
        >
          Progress
        </Typography>
      </div>
      <div className="px-5 xl:px-14 overflow-hidden">
        {unCompletedScripts.map((script, index) => (
          <React.Fragment key={script._id}>
            <UncompletedScript script={script} />
            {index < unCompletedScripts.length - 1 && (
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

export default UncompletedList;
