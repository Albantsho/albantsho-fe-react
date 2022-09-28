import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { Dispatch, SetStateAction, Suspense } from "react";
import UncompletedList from "./UncompletedList/UncompletedList";

const UnlistedList = dynamic(() => import("./UnlistedList/UnlistedList"));

interface IProps {
  setOpenAddToScript: Dispatch<SetStateAction<boolean>>;
  setOpenRelistScript: Dispatch<SetStateAction<boolean>>;
}

const DraftsList = ({ setOpenRelistScript, setOpenAddToScript }: IProps) => {
  return (
    <div className="my-8">
      <div className="bg-white p-3 inline-block rounded-md shadow-primary">
        <Typography
          variant="h6"
          color="primary.700"
          className="futura font-medium"
        >
          Uncompleted Listings
        </Typography>
      </div>
      <UncompletedList setOpenAddToScript={setOpenAddToScript} />
      <div className="bg-white p-3 inline-block rounded-md mt-10 px-6 shadow-primary">
        <Typography
          variant="h6"
          color="primary.700"
          className="futura font-medium"
        >
          Unlisted
        </Typography>
      </div>
      <Suspense fallback={null}>
        <UnlistedList setOpenRelistScript={setOpenRelistScript} />
      </Suspense>
    </div>
  );
};

export default DraftsList;
