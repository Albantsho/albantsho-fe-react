import { Divider, Tab, Tabs } from "@mui/material";
import { Suspense, useState } from "react";
import beautySmall from "@assets/images/beauty-small.jpg";
import Task from "./Task/Task";
import React from "react";
import dynamic from "next/dynamic";
import { IReviewerTask } from "interfaces/reviews";

const tasks = [
  {
    id: 1,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
  },
  {
    id: 2,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
  },
  {
    id: 3,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
  },
  {
    id: 4,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
  },
  {
    id: 5,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
  },
];

interface IProps {
  reviewerTaskList: IReviewerTask[];
}

const TasksList = ({ reviewerTaskList }: IProps) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const activeLinkChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveLinkIndex(newValue);
  };

  return (
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
            borderBottom: { sx: "2px solid #7953B5", lg: "4px solid #7953B5" },
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
              reviewerTaskList={reviewerTaskList}
              reviewerTask={reviewerTask}
            />
            {index < tasks.length - 1 && (
              <Divider className="hidden md:block" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TasksList;
