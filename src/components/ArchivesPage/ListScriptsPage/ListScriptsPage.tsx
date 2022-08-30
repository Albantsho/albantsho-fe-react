import {
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import projectArchive from "./assets/project-archive.png";

const listScripts = [
  {
    id: 1,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 2,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 3,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 4,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 5,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
];

interface IProps {
  setOpenArchive: Dispatch<SetStateAction<boolean>>;
}

const ListScriptsPage = ({ setOpenArchive }: IProps) => {
  const handleOpen = () => setOpenArchive(true);
  return (
    <div className="mt-4 bg-white rounded-md shadow-sm px-3 py-5">
      <div className="mb-5 flex border-b pb-5 sm:pb-6 gap-2 sm:gap-4 md:gap-8 xl:gap-10 2xl:gap-14">
        <Typography
          variant="body1"
          className="futura flex-1 text-primary-700 font-medium "
        >
          Script
        </Typography>
        <Typography
          variant="body1"
          className="futura hidden flex-1  md:block  text-primary-700 font-medium "
        >
          Script Type
        </Typography>
      </div>

      <div className="flex flex-col  gap-5 md:gap-10">
        {listScripts.map((script) => {
          return (
            <div key={script.id} className="sm:px-4 md:px-6 xl:px-10 2xl:px-12">
              <div className="flex mb-7 flex-col  sm:flex-row gap-2 sm:gap-4 md:gap-8 xl:gap-10 2xl:gap-14">
                <div className="flex flex-1 sm:gap-5 flex-wrap sm:flex-nowrap gap-2">
                  <div className="flex-shrink-0 max-w-[80px] mx-auto my-auto">
                    <Image
                      className="rounded-md "
                      loading="lazy"
                      src={script.image}
                      alt={script.title}
                    />
                  </div>
                  <div className="">
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

                <div className="flex-1 flex justify-between items-center sm:flex-grow-0 md:flex-grow">
                  <div className=" py-2 px-4   hidden md:block bg-slate-100 rounded-sm  text-neutral-800">
                    <span>{script.type}</span>
                  </div>
                  <Button
                    onClick={handleOpen}
                    variant="text"
                    sx={{
                      paddingY: 1.5,
                      paddingX: 2,
                      border: "1px solid #7953B5",
                      borderRadius: 1.5,
                    }}
                    className="ml-auto w-full sm:w-auto"
                  >
                    Unarchive
                  </Button>
                </div>
              </div>
              <Divider className="hidden md:flex" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListScriptsPage;

// md:ml-6 lg:ml-10 2xl:ml-14

// <Table>
// <TableHead>
//   <TableRow>
//     <TableCell>Dessert (100g serving)</TableCell>
//     <TableCell className="hidden md:block"> Script Type</TableCell>
//     <TableCell align="right"></TableCell>
//   </TableRow>
// </TableHead>
// <TableBody>
//   {listScripts.map((script) => (
//     <TableRow
//     className=""
//       key={script.id}
//       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//     >
//       <TableCell component="th" scope="row">
//         <div className="flex sm:gap-5 flex-wrap sm:flex-nowrap">
//           <div className="flex-shrink-0">
//             <Image
//               className="rounded-md "
//               loading="lazy"
//               src={script.image}
//               alt={script.title}
//             />
//           </div>
//           <div className="md:max-w-[400px]">
//             <Typography
//               variant="body1"
//               className="futura font-semibold text-primary-700"
//             >
//               {script.title}
//             </Typography>
//             <Typography variant="caption" className="text-stone-800">
//               {script.description}
//             </Typography>
//           </div>
//         </div>
//       </TableCell>
//       <TableCell className="hidden min-h-[130px] md:flex items-center justify-center">
//         <div className=" py-3 px-4 min-w-[98px] h-full flex mx-auto ml-auto justify-center bg-slate-100 rounded-sm  text-neutral-800">
//           <span>{script.type}</span>
//         </div>
//       </TableCell>
//       <TableCell align="right">

//           <Button
//             onClick={handleOpen}
//             variant="text"
//             sx={{
//               paddingY: 1.5,
//               paddingX: 2,
//               border: "1px solid #7953B5",
//               borderRadius: 1.5,
//             }}

//           >
//             Unarchive
//           </Button>

//       </TableCell>
//     </TableRow>
//   ))}
// </TableBody>
// </Table>
