import { Typography } from "@mui/material";
import useScriptsApi from "apis/Scripts.api";
import { IUnCompletedScript, IUnlistedScript } from "interfaces/script";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";
import UncompletedList from "./UncompletedList/UncompletedList";

const UnlistedList = dynamic(() => import("./UnlistedList/UnlistedList"));

interface IProps {
  searchQuery: string;
}

const DraftsList = ({ searchQuery }: IProps) => {
  const [unListedScripts, setUnListedScripts] = useState<
    Array<IUnlistedScript>
  >([]);
  const [unCompletedScripts, setUnCompletedScripts] = useState<
    Array<IUnCompletedScript>
  >([]);
  const [loading, setLoading] = useState(true);
  const { getWriterAllUnPublishedScripts, getWriterAllInCompletedScripts } =
    useScriptsApi();

  useEffect(() => {
    async function getScriptsFunc() {
      try {
        setLoading(true);
        const resUnPublished = await getWriterAllUnPublishedScripts(
          searchQuery
        );
        setUnListedScripts(resUnPublished.data.scripts);
        const resUnCompleted = await getWriterAllInCompletedScripts(
          searchQuery
        );
        setUnCompletedScripts(resUnCompleted.data.scripts);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }
    getScriptsFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return loading ? (
    <DotLoader color="#7953B5" className="mx-auto mt-10" />
  ) : (
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
      <UncompletedList unCompletedScripts={unCompletedScripts} />
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
          setUnListedScripts={setUnListedScripts}
        />
      </Suspense>
    </div>
  );
};

export default DraftsList;
