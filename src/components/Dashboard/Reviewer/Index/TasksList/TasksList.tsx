import { Divider, Tab, Tabs } from "@mui/material";
import { IReviewerTask } from "interfaces/reviews";
import React, { useState } from "react";
import ScriptCart from "../ScriptCart/ScriptCart";
import Task from "./Task/Task";

interface IProps {
  reviewerTaskList: IReviewerTask[];
}

const TasksList = ({ reviewerTaskList }: IProps) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const [selectedScriptId, setSelectedScriptId] = useState(
    reviewerTaskList && reviewerTaskList[0] ? reviewerTaskList[0]._id : "1"
  );

  console.log(reviewerTaskList);

  const activeLinkChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveLinkIndex(newValue);
  };

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

        <div className=" bg-white rounded-md shadow-sm flex flex-col overflow-hidden">
          {reviewerTaskList.map((reviewerTask, index) => (
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
          ))}
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
