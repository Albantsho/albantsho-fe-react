import { TableCell, TableRow, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  image: StaticImageData;
  title: string;
  description: string;
  setOpenDetailScript: Dispatch<SetStateAction<boolean>>;
}

const TableTask = ({
  image,
  title,
  description,
  setOpenDetailScript,
}: IProps) => {
  return (
    <TableRow
      onClick={() => {
        setOpenDetailScript(true);
      }}
      className="flex cursor-pointer md:cursor-auto"
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell className="flex flex-1 items-center flex-wrap sm:flex-nowrap gap-y-2 gap-x-4 py-2 sm:py-4 lg:py-8 px-3 sm:px-6 lg:px-12">
        <div className="flex-shrink-0 mt-2">
          <Image
            className="rounded-md"
            loading="lazy"
            src={image}
            alt={title}
          />
        </div>
        <div className="flex-growsm:pl-3 sm:max-w-[271px] min-w-[170px]">
          <Typography
            variant="body1"
            className="futura font-semibold text-primary-700"
          >
            {title}
          </Typography>
          <Typography variant="caption" className="text-stone-800">
            {description}
          </Typography>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableTask;
