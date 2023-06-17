import DefaultImage from "@assets/default-image-script.svg";
import { Chip, SvgIcon, TableCell, TableRow, Typography } from "@mui/material";
import { ICurrentRequest } from "interfaces/reviews";
import Image from "next/image";
import { useRouter } from "next/router";
import routes from "utils/routes";

interface IProps {
  request: ICurrentRequest;
}

const CurrentRequest = ({
  request: { tagline, _id, image, title, reviewPlan },
}: IProps) => {
  const { push } = useRouter();

  const openOneCurrentRequest = () =>
    push(routes.reviewerAdminDashboard.url(_id));

  return (
    <TableRow
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      sx={{
        "& td, & th": {
          borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
        },
        "&:last-child td, &:last-child th": { border: 0 },
      }}
      className="flex flex-1 cursor-pointer"
      onClick={openOneCurrentRequest}
    >
      <TableCell
        scope="script"
        className="flex flex-1 py-4 pl-0 flex-col sm:flex-row  sm:py-6 xl:py-10 items-start sm:items-center xl:max-w-lg gap-4 sm:gap-8"
      >
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className="mt-1">
            {image ? (
              <Image
                style={{ width: "64px", height: "64px" }}
                width={64}
                height={64}
                layout="fixed"
                className="rounded-md "
                loading="lazy"
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${image}`}
                alt={title}
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
          </div>

          <div className="flex-grow sm:max-w-[360px]">
            <Typography
              variant="body1"
              className="futura font-semibold text-primary-700"
            >
              {title}
            </Typography>
            <Typography variant="caption" className="text-stone-800">
              {tagline}
            </Typography>
          </div>
        </div>
        <Chip
          className="sm:hidden py-5 px-4  rounded-lg text-white bg-primary-700"
          label={
            reviewPlan === "A" ? "Type A" : reviewPlan === "B" ? "Type B" : ""
          }
        />
      </TableCell>
      <TableCell
        sx={{
          "&.MuiTableCell-root": {
            px: { xs: 0, sm: 2 },
          },
        }}
        className="hidden py-4  sm:py-6 xl:py-10 sm:flex flex-[0.45] items-center xl:flex-[0.4]"
      >
        <Chip
          label={
            reviewPlan === "A" ? "Type A" : reviewPlan === "B" ? "Type B" : ""
          }
          className="py-5 px-4 md:ml-3 hidden sm:flex rounded-md bg-primary-700  text-white"
        />
      </TableCell>
    </TableRow>
  );
};

export default CurrentRequest;
