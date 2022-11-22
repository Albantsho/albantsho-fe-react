import beautySmall from "@assets/images/beauty-small.jpg";
import {
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
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

const AssignedOrCompletedRequests = () => {
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
            className="w-28 xl:flex-0 flex-[0.35] lg:hidden xl:flex xl:pl-0 xl:pb-8 pb-5 pt-0 hidden md:flex xl:flex-0"
          >
            <Typography
              variant="h6"
              className="futura font-medium text-primary-700"
            >
              Script Type
            </Typography>
          </TableCell>
          <TableCell className="flex-[0.35] xl:pb-8 pb-5 pt-0 hidden md:flex lg:hidden xl:flex xl:justify-end xl:pr-16">
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
            data-aos-anchor-placement="top-bottom"
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
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <div className="mt-1 flex items-end gap-1 ">
                  <Image
                    width={64}
                    height={64}
                    layout="fixed"
                    className="rounded-md "
                    loading="lazy"
                    src={script.image}
                    alt={script.title}
                  />
                  <Chip
                    className="sm:hidden py-5 px-4  rounded-lg text-white bg-primary-700"
                    label={script.type}
                  />
                </div>
                <div className="sm:hidden flex gap-1 items-center">
                  <Avatar className="w-8 h-8">J</Avatar>
                  <Tooltip title={script.reviewer}>
                    <Typography variant="body1">
                      {script.reviewer.substring(0, 13)}
                    </Typography>
                  </Tooltip>
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
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  px: { xs: 0, md: 0 },
                },
              }}
              className="hidden py-4 min-w-[150px] md:py-6 xl:py-10 md:flex lg:hidden xl:flex flex-[0.4] items-center"
            >
              <Chip
                label={script.type}
                className="py-5 px-4 md:ml-3 hidden sm:flex rounded-md bg-primary-700  text-white"
              />
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  px: { xs: 0 },
                },
              }}
              className="hidden py-4 sm:py-6 xl:py-10 sm:flex flex-[0.35] md:flex-[0.4] justify-center flex-col md:items-center gap-2"
            >
              <Chip
                label={script.type}
                className="py-5 px-4 hidden sm:flex md:hidden lg:flex xl:hidden rounded-md bg-primary-700 w-full text-white"
              />
              <div className="flex gap-2 items-center xl:ml-auto">
                <Avatar className="w-8 h-8">J</Avatar>
                <Tooltip title={script.reviewer}>
                  <Typography variant="body1">
                    {script.reviewer.substring(0, 8)}
                    {script.reviewer.length > 8 && "..."}
                  </Typography>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AssignedOrCompletedRequests;
