import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import beautySmall from "@assets/images/beauty-small.jpg";

const MyScriptsArray = [
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

const MyScripts = () => {
  return (
    <Table className="mt-4 sm:mt-6 bg-white rounded-md shadow-primary  py-5 xl:py-8 flex flex-col mb-16">
      <TableHead>
        <TableRow className="flex">
          <TableCell className="flex-1 pl-5 sm:pl-10 xl:pb-8 pb-5 pt-0 xl:pl-16">
            <Typography
              variant="h6"
              className="text-primary-700 font-medium futura"
            >
              Script
            </Typography>
          </TableCell>
          <TableCell className=" hidden md:flex xl:pb-8 pb-5 pt-0"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-5  xl:px-12 overflow-hidden">
        {MyScriptsArray.map((bid) => (
          <TableRow
            data-aos="fade-up"
            key={bid.id}
            sx={{
              "& td, & th": {
                borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
              },
              "&:last-child td, &:last-child th": { border: 0 },
            }}
            className="flex flex-1"
          >
            <TableCell
              className="flex flex-1 flex-wrap sm:flex-nowrap items-start sm:py-6 xl:py-10 gap-2"
              sx={{
                "&.MuiTableCell-root": {
                  px: { xs: 0, sm: 2 },
                },
              }}
            >
              <Image
                width="64"
                height="64"
                className="rounded-md"
                loading="lazy"
                src={bid.image}
                alt={bid.title}
              />
              <div className="flex-grow sm:flex-1 sm:max-w-[271px] min-w-[170px] sm:ml-2">
                <Typography
                  variant="body1"
                  className="futura font-semibold text-primary-700"
                >
                  {bid.title}
                </Typography>
                <Typography variant="caption" className="text-stone-800">
                  {bid.description}
                </Typography>
              </div>
              <Button
                variant="text"
                sx={{
                  border: "1px solid #7953B5",
                  borderRadius: 1.5,
                }}
                className=" sm:hidden mb-2 mt-1"
              >
                View script
              </Button>
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  pl: { lg: 0 },
                },
              }}
              className="hidden sm:flex items-center sm:py-6 xl:py-10 justify-end"
            >
              <Button
                variant="text"
                sx={{
                  paddingY: 1,
                  border: "1px solid #7953B5",
                  borderRadius: 1.5,
                }}
                className="md:ml-auto xl:ml-0"
              >
                View script
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MyScripts;
