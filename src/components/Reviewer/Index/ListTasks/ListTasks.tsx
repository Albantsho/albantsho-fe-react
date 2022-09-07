import {
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";

import { useState } from "react";
import Image from "next/image";
import beautySmall from "@assets/images/beauty-small.jpg";

const Tasks = [
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

  const activeLinkChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveLinkIndex(newValue);
  };

  return (
    <div className="flex flex-col flex-1">
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

      <Table className=" bg-white rounded-md shadow-sm flex flex-col mb-16">
        <TableHead>
          <TableRow>
            <TableCell className="border-none p-0"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Tasks.map((listItem) => (
            <TableRow
              key={listItem.id}
              className="flex"
              sx={{
                "&:last-child td, &:last-child th": { border: 0 }
              }}
            >
              <TableCell className="flex flex-1 items-center flex-wrap sm:flex-nowrap gap-y-2 gap-x-4 py-8 px-12">
                <div className="flex-shrink-0 mt-2">
                  <Image
                    className="rounded-md"
                    loading="lazy"
                    src={listItem.image}
                    alt={listItem.title}
                  />
                </div>
                <div className="flex-growsm:pl-3 sm:max-w-[271px] min-w-[170px]">
                  <Typography
                    variant="body1"
                    className="futura font-semibold text-primary-700"
                  >
                    {listItem.title}
                  </Typography>
                  <Typography variant="caption" className="text-stone-800">
                    {listItem.description}
                  </Typography>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListTasks;
