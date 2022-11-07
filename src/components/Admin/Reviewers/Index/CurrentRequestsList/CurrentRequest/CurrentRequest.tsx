import { TableRow, TableCell, Typography, Chip } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import routes from "routes/routes";

interface IProps {
  request: {
    id: number;
    image: StaticImageData;
    title: string;
    description: string;
    type: string;
  };
}

const CurrentRequest = ({
  request: { description, id, image, title, type },
}: IProps) => {
  return (
    <Link href={routes.reviewerAdminDashboard(`${id}`)} passHref>
      <a>
        <TableRow
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          sx={{
            "& td, & th": {
              borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
            },
            "&:last-child td, &:last-child th": { border: 0 },
          }}
          className="flex flex-1"
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
                  src={image}
                  alt={title}
                />
              </div>

              <div className="flex-grow sm:max-w-[360px]">
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
            </div>
            <Chip
              className="sm:hidden py-5 px-4  rounded-lg text-white bg-primary-700"
              label={type}
            />
          </TableCell>
          <TableCell
            sx={{
              "&.MuiTableCell-root": {
                px: { xs: 0, sm: 2 },
              },
            }}
            className="hidden py-4  sm:py-6 xl:py-10 sm:flex flex-[0.45] items-center"
          >
            <Chip
              label={type}
              className="py-5 px-4 md:ml-3 hidden sm:flex rounded-md bg-primary-700  text-white"
            />
          </TableCell>
        </TableRow>
      </a>
    </Link>
  );
};

export default CurrentRequest;
