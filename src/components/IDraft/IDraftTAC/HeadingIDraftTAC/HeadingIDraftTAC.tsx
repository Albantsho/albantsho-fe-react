import { Typography } from "@mui/material";
import Link from "next/link";
import routes from "routes/routes";

const HeadingIDraftTAC = () => {
  return (
    <div className="px-5 sm:px-10 md:flex  lg:min-w-[1024px] lg:mx-auto pt-16">
      <Typography
        variant="h5"
        color="grey.900"
        className="max-w-sm sm:max-w-md  leading-normal font-semibold"
      >
        TERMS AND CONDITONS FOR
        <Link href={routes.iDraft.url} className="text-purple-700">
          {" "}
          IDRAFT{" "}
        </Link>
        <span className="md:mr-36">WORKSHOP</span> APPLICATION
      </Typography>
    </div>
  );
};

export default HeadingIDraftTAC;
