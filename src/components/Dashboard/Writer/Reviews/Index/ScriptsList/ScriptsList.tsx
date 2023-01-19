import DefaultImage from "@assets/default-image-script.svg";
import {
  Button,
  Chip,
  Divider,
  Paper,
  SvgIcon,
  Typography,
} from "@mui/material";
import { IWriterReview } from "interfaces/reviews";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import routes from "routes/routes";
import emptyBlogs from "@assets/images/empty-blogs.png";

interface IProps {
  reviewsList: IWriterReview[];
}

const ScriptsList = ({ reviewsList }: IProps) => {
  return reviewsList.length > 0 ? (
    <Paper elevation={0} className="mt-4 bg-white mb-16 shadow-primary">
      <div className="border-b border-tinted-100 px-5 py-5 xl:px-14 xl:py-8 flex">
        <Typography
          variant="h6"
          className="futura w-1/2 sm:w-full md:max-w-[317px]  lg:max-w-full xl:max-w-[510px] font-medium text-primary-700"
        >
          Script
        </Typography>

        <Typography
          variant="h6"
          className="futura hidden sm:block self-start md:self-center md:mx-auto lg:ml-5  sm:mr-8 md:text-center lg:text-start lg:mr-7 font-medium text-primary-700"
        >
          Status
        </Typography>
        <Typography></Typography>
      </div>
      <div className="px-5 xl:px-14 overflow-hidden">
        {reviewsList.map((script, index) => (
          <React.Fragment key={script._id}>
            <div
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              className="flex py-6 xl:py-10 items-center sm:justify-between md:justify-end 2xl:justify-start"
            >
              <div className="sm:flex md:w-fit xl:mr-14 lg:max-w-[445px] 2xl:max-w-[425px] 2xl:mr-[75px]">
                <div className="flex gap-4 sm:mr-3 xl:mr-[85px]">
                  <div className="flex-shrink-0 w-[72px] h-[72px]">
                    {script.image ? (
                      <Image
                        width="72"
                        height="72"
                        className="rounded-md h-[72px]"
                        loading="lazy"
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${script.image}`}
                        alt={script.title}
                      />
                    ) : (
                      <SvgIcon
                        className="mt-1"
                        inheritViewBox
                        fontSize="large"
                        component={DefaultImage}
                      />
                    )}
                  </div>
                  <Chip
                    label={script.reviewed ? "Reviewed" : "In Review"}
                    className={`${
                      script.reviewed
                        ? "text-success-500 bg-success-300/20"
                        : "text-warning-500 bg-warning-300/20"
                    } text-sm  rounded-sm sm:hidden mb-1 w-full max-w-[100px] self-end py-5 `}
                  />
                </div>
                <div className="sm:flex-1 sm:max-w-[300px] md:min-w-[360px] lg:max-w-[320px] xl:max-w-[300px]">
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
                {script.reviewed && (
                  <Link
                    passHref
                    href={routes.oneReviewInformation.dynamicUrl(script._id)}
                  >
                    <Button
                      variant="text"
                      sx={{
                        paddingY: 1.2,
                        paddingX: 1.5,
                        border: "1px solid #7953B5",
                        borderRadius: 1.5,
                        display: { xs: "block", sm: "none" },
                        mt: 1,
                      }}
                    >
                      See review
                    </Button>
                  </Link>
                )}
              </div>
              <div className="hidden sm:flex sm:min-w-[100px] md:w-1/2 gap-4 justify-start  flex-col items-center  lg:items-end xl:items-start xl:ml-2">
                <Chip
                  label={script.reviewed ? "Reviewed" : "In Review"}
                  className={`${
                    script.reviewed
                      ? "text-success-500 bg-success-300/20"
                      : "text-warning-500 bg-warning-300/20"
                  }  py-5  hidden sm:flex rounded-sm text-center md:mt-3 lg:mt-0 xl:mt-3 max-w-[101px] w-full`}
                />
                {script.reviewed && (
                  <Link
                    passHref
                    href={routes.oneReviewInformation.dynamicUrl(script._id)}
                  >
                    <Button
                      className="md:hidden lg:block xl:hidden"
                      variant="text"
                      sx={{
                        paddingY: 1.2,
                        paddingX: 1.5,
                        border: "1px solid #7953B5",
                        borderRadius: 1.5,
                      }}
                    >
                      See review
                    </Button>
                  </Link>
                )}
              </div>
              <div className="sm:min-w-[116px] justify-end xl:py-10 sm:pr-0 items-center hidden md:flex lg:hidden xl:flex">
                {script.reviewed && (
                  <Link
                    passHref
                    href={routes.oneReviewInformation.dynamicUrl(script._id)}
                  >
                    <Button
                      variant="text"
                      sx={{
                        paddingY: 1.2,
                        paddingX: 1.5,
                        border: "1px solid #7953B5",
                        borderRadius: 1.5,
                      }}
                    >
                      See review
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            {index < reviewsList.length - 1 && (
              <Divider className="hidden sm:flex" />
            )}
          </React.Fragment>
        ))}
      </div>
    </Paper>
  ) : (
    <div className="flex items-center">
      <Image
        width={384}
        height={384}
        loading="lazy"
        className="w-fit h-fit mx-auto mt-14 lg:mt-24"
        src={emptyBlogs}
        alt="empty blog list"
      />
    </div>
  );
};

export default ScriptsList;
