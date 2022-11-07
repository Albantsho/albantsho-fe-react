import beautySmall from "@assets/images/beauty-small.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CurrentRequest from "./CurrentRequest/CurrentRequest";

const listCurrentRequests = [
  {
    id: 1,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Type A",
  },
  {
    id: 2,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Type B",
  },
  {
    id: 3,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Type A",
  },
  {
    id: 4,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Type A",
  },
  {
    id: 5,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Type B",
  },
];

const CurrentRequestsList = () => {
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
            className="w-28 xl:flex-0 flex-[0.5] md:flex-[0.45] xl:pl-0 xl:pb-8 pb-5 pt-0 hidden sm:flex"
          >
            <Typography
              variant="h6"
              className="futura font-medium text-primary-700"
            >
              Script Type
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-6 xl:px-14 overflow-hidden">
        {listCurrentRequests.map((request) => (
          <CurrentRequest request={request} key={request.id} />
        ))}
      </TableBody>
    </Table>
  );
};

export default CurrentRequestsList;
