import { Typography } from "@mui/material";
import { IProduct } from "interfaces/product";
import dynamic from "next/dynamic";
import { Dispatch, SetStateAction, Suspense } from "react";
import UncompletedList from "./UncompletedList/UncompletedList";

const UnlistedList = dynamic(() => import("./UnlistedList/UnlistedList"));

interface IProps {
  setOpenAddToScript: Dispatch<SetStateAction<boolean>>;
  setOpenRelistScript: Dispatch<SetStateAction<boolean>>;
  scripts: IProduct[];
}

const DraftsList = ({
  setOpenRelistScript,
  setOpenAddToScript,
  scripts,
}: IProps) => {
  const unListedScripts = scripts.filter(
    (script) => script.script_listed === false
  );
  const unCompletedScripts = scripts.filter(
    (script) => script.script_accepted === false
  );

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
      <UncompletedList
        unCompletedScripts={unCompletedScripts}
        setOpenAddToScript={setOpenAddToScript}
      />
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
        <UnlistedList
          unListedScripts={unListedScripts}
          setOpenRelistScript={setOpenRelistScript}
        />
      </Suspense>
    </div>
  );
};

export default DraftsList;
