import beautySmall from "@assets/images/beauty-small.jpg";
import {
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";

const listCurrentRequests = [
  {
    id: 1,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Type A",
    reviewer: "Jane Doe",
  },
  {
    id: 2,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Type B",
    reviewer: "Kurt Jarvis",
  },
  {
    id: 3,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Type A",
    reviewer: "Jane Doe",
  },
  {
    id: 4,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Type A",
    reviewer: "Maxwell Blackwell cqw df wqeqe",
  },
  {
    id: 5,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Type B",
    reviewer: "Orlando Kidd",
  },
];

const AssignedRequests = () => {
  return (
    <Table className="mt-4 bg-white rounded-md shadow-primary  py-5 xl:py-8 flex flex-col mb-16">
      <TableHead>
        <TableRow className="flex">
          <TableCell className="flex-1 pl-7  xl:pl-16  xl:max-w-xl  md:pr-0 pt-0 xl:pb-8 pb-5">
            <Typography
              variant="h6"
              className="futura font-medium text-primary-700"
            >
              Script
            </Typography>
          </TableCell>
          <TableCell
            sx={{
              "&.MuiTableCell-root": {
                px: { xs: 0, sm: 2 },
              },
            }}
            className="w-28 xl:flex-0 flex-[0.5] md:flex-[0.4] xl:pl-0 xl:pb-8 pb-5 pt-0 hidden sm:flex"
          >
            <Typography
              variant="h6"
              className="futura font-medium text-primary-700"
            >
              Script Type
            </Typography>
          </TableCell>
          <TableCell
            sx={{
              "&.MuiTableCell-root": {},
            }}
            className="flex-[0.4] md:flex-[0.35] xl:pb-8 pb-5 pt-0 hidden sm:flex"
          >
            <Typography
              variant="h6"
              className="futura font-medium text-primary-700"
            >
              Reviewer
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-6 xl:px-14 overflow-hidden">
        {listCurrentRequests.map((script) => (
          <TableRow
            data-aos="fade-up"
            sx={{
              "& td, & th": {
                borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
              },
              "&:last-child td, &:last-child th": { border: 0 },
            }}
            className="flex flex-1"
            key={script.id}
          >
            <TableCell
              scope="script"
              className="flex flex-1 py-4 pl-0 flex-col sm:flex-row  sm:py-6 xl:py-10 items-start sm:items-center xl:max-w-lg gap-4 sm:gap-8"
            >
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <div className="mt-1">
                  <Image
                    width={64}
                    height={64}
                    layout="fixed"
                    className="rounded-md "
                    loading="lazy"
                    src={script.image}
                    alt={script.title}
                  />
                  {/* <Chip
                    className="bg-primary-50 text-primary-700"
                    label={script.reviewer}
                  /> */}
                </div>

                <div className="flex-grow sm:max-w-[360px]">
                  <Typography
                    variant="body1"
                    className="futura font-semibold text-primary-700"
                  >
                    {script.title}
                  </Typography>
                  <Typography variant="caption" className="text-stone-800">
                    {script.description}
                  </Typography>
                </div>
              </div>
              <Chip
                className="sm:hidden py-5 px-4  rounded-lg text-white bg-primary-700"
                label={script.type}
              />
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  px: { xs: 0, sm: 2 },
                },
              }}
              className="hidden py-4 min-w-[150px] sm:py-6 xl:py-10 sm:flex flex-[0.45] items-center"
            >
              <Chip
                label={script.type}
                className="py-5 px-4 md:ml-3 hidden sm:flex rounded-md bg-primary-700  text-white"
              />
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  px: { xs: 0, sm: 2 },
                },
              }}
              className="hidden py-4 sm:py-6 xl:py-10 sm:flex flex-[0.35] items-center"
            >
              <Avatar className="w-8 h-8 mr-1 md:mr-2">J</Avatar>
              <Typography variant="body1">{script.reviewer}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AssignedRequests;
