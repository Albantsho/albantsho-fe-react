import { Divider, Tab, Tabs } from "@mui/material";
import { IReviewerTask } from "interfaces/reviews";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ScriptCart from "../ScriptCart/ScriptCart";
import Task from "./Task/Task";
import emptyBlogs from "@assets/images/empty-blogs.png";

interface IProps {
  reviewerTaskList: IReviewerTask[];
}

const TasksList = ({ reviewerTaskList }: IProps) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const [selectedScriptId, setSelectedScriptId] = useState(
    reviewerTaskList && reviewerTaskList[0] ? reviewerTaskList[0]._id : "1"
  );
  const { query, push } = useRouter();
  const activeLinkChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveLinkIndex(newValue);
  };

  useEffect(() => {
    if (query.reviewed === "false") setActiveLinkIndex(0);
    if (query.reviewed === "true") setActiveLinkIndex(1);
  }, [query]);

  return (
    <>
      <div
        data-aos="fade-right"
        className="flex flex-col flex-1 mb-16 shadow-primary"
      >
        <Tabs
          value={activeLinkIndex}
          onChange={activeLinkChange}
          className="bg-white rounded-md"
          sx={{
            "& .MuiTabs-indicator": {
              borderBottom: {
                sx: "2px solid #7953B5",
                lg: "4px solid #7953B5",
              },
              mb: { lg: "-1px" },
            },
          }}
        >
          <Tab
            onClick={() => push("?reviewed=false")}
            sx={{
              "&.MuiButtonBase-root": {
                flex: { xs: 1 },
                maxWidth: "100%",
                px: { md: 6 },
              },
            }}
            className={`text-gray-600 futura text-lg 2xl:text-2xl font-medium py-3 md:py-5 xl:py-7 my-auto`}
            label="Tasks"
          />
          <Tab
            onClick={() => push("?reviewed=true")}
            sx={{
              "&.MuiButtonBase-root": {
                flex: { xs: 1 },
                maxWidth: "100%",
                px: { md: 6 },
              },
            }}
            className={`text-gray-600 futura text-lg 2xl:text-2xl font-medium py-3 md:py-5 xl:py-7 my-auto`}
            label="History"
          />
        </Tabs>

        <div className="bg-white h-full rounded-md shadow-sm flex flex-col gap-2 overflow-hidden justify-start">
          {reviewerTaskList.length > 0 ? (
            reviewerTaskList.map((reviewerTask, index) => (
              <React.Fragment key={index}>
                <Task
                  selectedScriptId={selectedScriptId}
                  setSelectedScriptId={setSelectedScriptId}
                  reviewerTask={reviewerTask}
                />
                {index < reviewerTaskList.length - 1 && (
                  <Divider className="hidden md:block" />
                )}
              </React.Fragment>
            ))
          ) : (
            <div className="flex mx-auto">
              <Image
                width={384}
                height={384}
                loading="lazy"
                className="w-fit h-fit mx-auto mt-14 lg:mt-24"
                src={emptyBlogs}
                alt="empty blog list"
              />
            </div>
          )}
        </div>
      </div>
      <ScriptCart
        selectedScriptId={selectedScriptId}
        reviewerTaskList={reviewerTaskList}
      />
    </>
  );
};

export default TasksList;
