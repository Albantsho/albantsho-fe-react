import {
  Avatar,
  Chip,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
  SvgIcon,
} from "@mui/material";
import { bgArray } from "assets/colors/color-list";
import { IAssignedOrCompletedRequest } from "interfaces/reviews";
import Image from "next/image";
import { useMemo } from "react";
import DefaultImage from "@assets/default-image-script.svg";

interface IProps {
  script: IAssignedOrCompletedRequest;
}

const AssignedOrCompletedRequest = ({ script }: IProps) => {
  return (
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
    >
      <TableCell
        scope="script"
        className="flex flex-1 py-4 pl-0 flex-col sm:flex-row  sm:py-6 xl:py-10 items-start sm:items-center xl:max-w-lg gap-4 sm:gap-8"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          <div className="mt-1 flex items-end gap-1 ">
            {script.image ? (
              <Image
                width={64}
                height={64}
                style={{ width: "64px", height: "64px" }}
                className="rounded-md"
                loading="lazy"
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${script.image}`}
                alt={script.title}
                unoptimized
              />
            ) : (
              <div className="flex justify-center w-[64px] h-[64px] items-center self-start  bg-tinted-100/60 rounded-md">
                <SvgIcon
                  inheritViewBox
                  fontSize="large"
                  component={DefaultImage}
                />
              </div>
            )}

            <Chip
              className="sm:hidden py-5 px-4  rounded-lg text-white bg-primary-700"
              label={
                script.reviewPlan === "A"
                  ? "Type A"
                  : script.reviewPlan === "B"
                  ? "Type B"
                  : ""
              }
            />
          </div>
          <div className="sm:hidden flex gap-1 items-center">
            <Avatar className="w-8 h-8">J</Avatar>
            <Tooltip
              title={`${script.reviewer.firstName} ${script.reviewer.lastName}`}
            >
              <Typography variant="body1">
                {`${script.reviewer.firstName}
                ${script.reviewer.lastName}`.substring(0, 13)}
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
              {script.tagline}
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
          label={
            script.reviewPlan === "A"
              ? "Type A"
              : script.reviewPlan === "B"
              ? "Type B"
              : ""
          }
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
          label={
            script.reviewPlan === "A"
              ? "Type A"
              : script.reviewPlan === "B"
              ? "Type B"
              : ""
          }
          className="py-5 px-4 hidden sm:flex md:hidden lg:flex xl:hidden rounded-md bg-primary-700 w-full text-white"
        />
        <div className="flex gap-2 items-center xl:ml-auto">
          <Avatar
            style={{
              backgroundColor: useMemo(
                () => bgArray[Math.floor(Math.random() * 14)],
                []
              ),
            }}
            className="w-8 h-8"
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${script.reviewer.image}`}
            alt={script.reviewer.firstName}
          />
          <Tooltip
            title={`${script.reviewer.firstName} ${script.reviewer.lastName}`}
          >
            <Typography variant="body1">
              {`${script.reviewer.firstName} ${script.reviewer.lastName}`.substring(
                0,
                8
              )}
              {`${script.reviewer.firstName} ${script.reviewer.lastName}`
                .length > 8 && "..."}
            </Typography>
          </Tooltip>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default AssignedOrCompletedRequest;
