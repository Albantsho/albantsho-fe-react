import {
  Chip,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import projectArchive from "./assets/project-archive.png";
import { IoIosMore } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

const listScripts = [
  {
    id: 1,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 4,
  },
  {
    id: 2,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 2,
  },
  {
    id: 3,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 1,
  },
  {
    id: 4,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 0,
  },
  {
    id: 5,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 3,
  },
];

const OpeningLists = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Table className="mt-4 bg-white rounded-md shadow-sm px-3 py-5 flex flex-col min-h-screen">
      <TableHead>
        <TableRow className="flex">
          <TableCell className="flex-1">Script</TableCell>
          <TableCell className="hidden sm:flex">Script Type</TableCell>
          <TableCell className="hidden sm:flex">Bids</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {listScripts.map((script) => (
          <TableRow
            key={script.id}
            sx={{
              "& td, & th": {
                borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
              },
              "&:last-child td, &:last-child th": { border: 0 },
            }}
            className="flex flex-1 flex-col sm:flex-row"
          >
            <TableCell className="flex flex-1 min-w-[165px] gap-3 sm:gap-5  items-center">
              <div className="">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-md w-full h-full"
                      loading="lazy"
                      src={script.image}
                      alt={script.title}
                    />
                  </div>
                  <span
                    className={`${
                      script.bids === 0
                        ? "text-gray-300 border-gray-300"
                        : "text-success-500 border-success-500"
                    } w-8 h-8 sm:hidden border rounded-full flex justify-center items-center`}
                  >
                    {script.bids}
                  </span>
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
            </TableCell>
            <TableCell>
              <div className="mr-4 md:mr-0 xl:mr-4 2xl:flex-1 hidden sm:block ">
                <Chip
                  className="py-5 px-4 bg-tinted-50/80 rounded-md  text-neutral-800"
                  label={script.type}
                />
              </div>
            </TableCell>
            <TableCell className="hidden sm:flex">
              <span
                className={`${
                  script.bids === 0
                    ? "text-gray-300 border-gray-300"
                    : "text-success-500 border-success-500"
                } w-8 h-8 md:ml-auto  border rounded-full flex justify-center items-center`}
              >
                {script.bids}
              </span>
            </TableCell>
            <TableCell>
              <IconButton onClick={handleClick}>
                <IoIosMore className="text-2xl  text-primary-700" />
              </IconButton>
              <Menu
                sx={{
                  "& .MuiPaper-root": {
                    boxShadow: "1px 1px 10px rgba(0,0,0,0.055)",
                  },
                }}
                className="shadow-none"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Link href={`/listings/${script.id}`} passHref>
                  <MenuItem
                    sx={{
                      "&:hover": {
                        color: "#9A7EC7",
                        backgroundColor: "#F7F5F8",
                      },
                    }}
                    onClick={handleClose}
                  >
                    View Script
                  </MenuItem>
                </Link>
                <MenuItem
                  sx={{
                    ".MuiButtonBase-root:hover": {
                      color: "#9A7EC7",
                      backgroundColor: "#F7F5F8",
                    },
                  }}
                  onClick={handleClose}
                >
                  Unlist Script
                </MenuItem>
              </Menu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OpeningLists;

// import {
//   Chip,
//   Divider,
//   IconButton,
//   Menu,
//   MenuItem,
//   Typography,
// } from "@mui/material";
// import Image from "next/image";
// import projectArchive from "./assets/project-archive.png";
// import { IoIosMore } from "react-icons/io";
// import { useState } from "react";
// import Link from "next/link";

// const listScripts = [
//   {
//     id: 1,
//     image: projectArchive,
//     title: "The Long man of Long Beach",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
//     type: "Tv Pilot",
//     bids: 4,
//   },
//   {
//     id: 2,
//     image: projectArchive,
//     title: "The Long man of Long Beach",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
//     type: "Tv Pilot",
//     bids: 2,
//   },
//   {
//     id: 3,
//     image: projectArchive,
//     title: "The Long man of Long Beach",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
//     type: "Tv Pilot",
//     bids: 1,
//   },
//   {
//     id: 4,
//     image: projectArchive,
//     title: "The Long man of Long Beach",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
//     type: "Tv Pilot",
//     bids: 0,
//   },
//   {
//     id: 5,
//     image: projectArchive,
//     title: "The Long man of Long Beach",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
//     type: "Tv Pilot",
//     bids: 3,
//   },
// ];

// const OpeningLists = () => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <div className="mt-4 bg-white rounded-md shadow-sm px-3 py-5">
//       <div className="mb-5 flex border-b pb-5 sm:pb-6 gap-2 sm:gap-4 md:gap-8 xl:gap-10 2xl:gap-14">
//         <Typography
//           variant="body1"
//           className="futura flex-1  text-primary-700 font-medium "
//         >
//           Script
//         </Typography>
//         <Typography
//           variant="body1"
//           className="futura hidden 2xl:flex-1 mr-20 md:mr-10 md:ml-16 lg:mr-9  sm:block  text-primary-700 font-medium "
//         >
//           Script Type
//         </Typography>
//         <Typography
//           variant="body1"
//           className="futura mr-1 sm:mr-6 md:mr-32  text-primary-700 font-medium "
//         >
//           Bids
//         </Typography>
//       </div>

//       <div className="flex flex-col  gap-5 md:gap-10">
//         {listScripts.map((script, index) => {
//           return (
//             <div key={script.id} className="sm:px-4 md:px-6 xl:px-10 2xl:px-12">
//               <div className="flex mb-7 gap-3 sm:gap-4 md:gap-8 xl:gap-10 2xl:gap-14 items-center">
//                 <div className="flex flex-1 min-w-[165px] gap-3 sm:gap-5 flex-wrap lg:flex-nowrap items-center">
//                   <div className="flex-shrink-0">
//                     <Image
//                       className="rounded-md w-full h-full"
//                       loading="lazy"
//                       src={script.image}
//                       alt={script.title}
//                     />
//                   </div>
//                   <div className="max-w-[220px] lg:max-w-[320px]">
//                     <Typography
//                       variant="body1"
//                       className="futura font-semibold text-primary-700"
//                     >
//                       {script.title}
//                     </Typography>
//                     <Typography variant="caption" className="text-stone-800">
//                       {script.description}
//                     </Typography>
//                   </div>
//                 </div>

//                 <div className="mr-4 md:mr-0 xl:mr-4 2xl:flex-1 hidden sm:block ">
//                   <Chip
//                     className="py-5 px-4 bg-tinted-50/80 rounded-md  text-neutral-800"
//                     label={script.type}
//                   />
//                 </div>

//                 <div className="  md:ml-auto  flex flex-wrap justify-between items-center  md:gap-16 xl:-mr-6">
//                   <span
//                     className={`${
//                       script.bids === 0
//                         ? "text-gray-300 border-gray-300"
//                         : "text-success-500 border-success-500"
//                     } w-8 h-8 md:ml-auto  border rounded-full flex justify-center items-center`}
//                   >
//                     {script.bids}
//                   </span>
//                   <IconButton onClick={handleClick}>
//                     <IoIosMore className="text-2xl  text-primary-700" />
//                   </IconButton>
//                   <Menu
//                     sx={{
//                       "& .MuiPaper-root": {
//                         boxShadow: "1px 1px 10px rgba(0,0,0,0.055)",
//                       },
//                     }}
//                     className="shadow-none"
//                     anchorEl={anchorEl}
//                     open={open}
//                     onClose={handleClose}
//                     anchorOrigin={{
//                       vertical: "bottom",
//                       horizontal: "left",
//                     }}
//                     transformOrigin={{
//                       vertical: "top",
//                       horizontal: "right",
//                     }}
//                   >
//                     <Link href={`/listings/${script.id}`} passHref>
//                       <MenuItem
//                         sx={{
//                           "&:hover": {
//                             color: "#9A7EC7",
//                             backgroundColor: "#F7F5F8",
//                           },
//                         }}
//                         onClick={handleClose}
//                       >
//                         View Script
//                       </MenuItem>
//                     </Link>
//                     <MenuItem
//                       sx={{
//                         ".MuiButtonBase-root:hover": {
//                           color: "#9A7EC7",
//                           backgroundColor: "#F7F5F8",
//                         },
//                       }}
//                       onClick={handleClose}
//                     >
//                       Unlist Script
//                     </MenuItem>
//                   </Menu>
//                 </div>
//               </div>
//               {index < listScripts.length - 1 && (
//                 <Divider className="hidden md:flex" />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default OpeningLists;
