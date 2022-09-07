import {
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
} from "@mui/material";
import { useState } from "react";
import beautySmall from "@assets/images/beauty-small.jpg";
import TableTask from "./TableTask/TableTask";
import DetailScriptModal from "../DetailScriptModal/DetailScriptModal";

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
    <div className="flex flex-col flex-1 mb-16">
      <Tabs
        value={activeLinkIndex}
        onChange={activeLinkChange}
        className="bg-white rounded-md"
      >
        <Tab
          sx={{
            "&.MuiButtonBase-root": {
              flexGrow: { xs: 1 },
              px: { md: 6 },
            },
            marginRight: { md: 1 },
          }}
          className={`text-gray-600 futura text-lg`}
          label="Tasks"
        />
        <Tab
          sx={{
            "&.MuiButtonBase-root": {
              flexGrow: { xs: 1 },
              px: { md: 6 },
            },
            marginRight: { md: 1 },
          }}
          className={`text-gray-600 futura text-lg`}
          label="History"
        />
      </Tabs>

      <DetailScriptModal
        openDetailScript={openDetailScript}
        setOpenDetailScript={setOpenDetailScript}
      />

      <Table className=" bg-white rounded-md shadow-sm flex flex-col">
        <TableHead>
          <TableRow>
            <TableCell className="border-none p-0"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableTask
              key={task.id}
              image={task.image}
              title={task.title}
              description={task.description}
              setOpenDetailScript={setOpenDetailScript}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListTasks;
