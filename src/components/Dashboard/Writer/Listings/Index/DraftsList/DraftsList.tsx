import { Typography } from "@mui/material";
import Loader from "@shared/Loader/Loader";
import useScriptsApi from "apis/Scripts.api";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Suspense } from "react";
import { useQuery } from "react-query";
import UncompletedList from "./UncompletedList/UncompletedList";

const UnlistedList = dynamic(() => import("./UnlistedList/UnlistedList"));

interface IProps {
  searchQuery: string;
}

const DraftsList = ({ searchQuery }: IProps) => {
  const { getWriterAllUnPublishedScripts, getWriterAllInCompletedScripts } =
    useScriptsApi();
  const { query } = useRouter();

  const {
    data: unPublishedScriptsData,
    isLoading: loadingGetUnPublishedScripts,
    refetch,
  } = useQuery(["unpublished-scripts", searchQuery, query], () =>
    getWriterAllUnPublishedScripts(searchQuery)
  );

  const {
    data: unCompletedScriptsData,
    isLoading: loadingGetUnCompletedScripts,
  } = useQuery(["uncomplited-scripts", searchQuery, query], () =>
    getWriterAllInCompletedScripts(searchQuery)
  );

  return !loadingGetUnPublishedScripts &&
    !loadingGetUnCompletedScripts &&
    unPublishedScriptsData &&
    unCompletedScriptsData &&
    unPublishedScriptsData.scripts &&
    unCompletedScriptsData.scripts ? (
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
    <Loader setCustomHeight="min-h-[55vh]" />
  );
};

export default DraftsList;
