import { Typography } from "@mui/material";
import useScriptsApi from "apis/Scripts.api";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useQuery } from "react-query";
import { DotLoader } from "react-spinners";
import UncompletedList from "./UncompletedList/UncompletedList";

const UnlistedList = dynamic(() => import("./UnlistedList/UnlistedList"));

interface IProps {
  searchQuery: string;
}

const DraftsList = ({ searchQuery }: IProps) => {
  const { getWriterAllUnPublishedScripts, getWriterAllInCompletedScripts } =
    useScriptsApi();

  const {
    data: unPublishedScriptsData,
    isLoading: loadingGetUnPublishedScripts,
    refetch,
  } = useQuery("script", () => getWriterAllUnPublishedScripts(searchQuery));

  const {
    data: unCompletedScriptsData,
    isLoading: loadingGetUnCompletedScripts,
  } = useQuery("script", () => getWriterAllInCompletedScripts(searchQuery));

  return !loadingGetUnPublishedScripts &&
    !loadingGetUnCompletedScripts &&
    unPublishedScriptsData &&
    unCompletedScriptsData ? (
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
      <UncompletedList unCompletedScripts={unCompletedScriptsData.scripts} />
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
          refetch={refetch}
          unListedScripts={unPublishedScriptsData.scripts}
        />
      </Suspense>
    </div>
  ) : (
    <DotLoader color="#7953B5" className="mx-auto mt-10" />
  );
};

export default DraftsList;
