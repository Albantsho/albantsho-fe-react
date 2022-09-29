import { Divider, Tab, Tabs } from "@mui/material";
import { Suspense, useState } from "react";
import beautySmall from "@assets/images/beauty-small.jpg";
import ListTask from "./ListTask/ListTask";
import React from "react";
import dynamic from "next/dynamic";

const DetailScriptModal = dynamic(
  () => import("../DetailScriptModal/DetailScriptModal")
);

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

const ListTasks = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const [openDetailScript, setOpenDetailScript] = useState(false);

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
      <Suspense fallback={null}>
        <DetailScriptModal
          openDetailScript={openDetailScript}
          setOpenDetailScript={setOpenDetailScript}
        />
      </Suspense>
      <div className=" bg-white rounded-md shadow-sm flex flex-col overflow-hidden">
        {tasks.map((task, index) => (
          <React.Fragment key={index}>
            <ListTask
              image={task.image}
              title={task.title}
              description={task.description}
              setOpenDetailScript={setOpenDetailScript}
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

export default ListTasks;
