import { Fab } from "@mui/material";
import CustomPaginationComponent from "@shared/CustomPaginationComponent/CustomPaginationComponent";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import DashboardSearch from "@shared/Layouts/DashboardLayout/DashboardSearch/DashboardSearch";
import Loader from "@shared/Loader/Loader";
import useScriptsApi from "apis/Scripts.api";
import ArchiveList from "components/Dashboard/Writer/Projects/Archive/ArchiveList/ArchiveList";
import ProjectAccordionList from "components/Dashboard/Writer/Projects/Scripts/ProjectAccordionList/ProjectAccordionList";
import TabButtons from "components/Dashboard/Writer/Projects/TabButtons/TabButtons";
import { debounce } from "lodash";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import querystring from "query-string";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { NextPageWithLayout } from "../../../_app";

const CreateScriptModal = dynamic(
  () => import("@shared/Modals/CreateScriptModal/CreateScriptModal")
);

const Projects: NextPageWithLayout = () => {
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { query, push } = useRouter();
  const { getWriterAllScripts } = useScriptsApi();

  const handleOpen = () => setOpenCreateScript(true);

  const handleActivePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    !query
      ? push(`?page=${page}`, undefined, { shallow: true })
      : query.archive === "false"
      ? push(`?archive=false&page=${page}`, undefined, { shallow: true })
      : push(`?archive=true&page=${page}`, undefined, { shallow: true });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.trim());
      },
      2000,
      { leading: false }
    ),
    [searchQuery]
  );

  const { data, isLoading, refetch } = useQuery(
    ["script", querystring.stringify(query), searchQuery, currentPage],
    () => getWriterAllScripts(querystring.stringify(query), searchQuery)
  );

  useEffect(() => {
    setCurrentPage(+`${query.page}` || 1);
  }, [query]);

  return (
    <>
      <Head>
        <title>Albantsho || Projects</title>
      </Head>
      <TabButtons />
      <DashboardSearch
        handleSearch={handleSearch}
        setOpenCreateScript={setOpenCreateScript}
      />
      {data && !isLoading ? (
        <div className="space-y-10 mb-16">
          {(!query.archive || query.archive === "false") && (
            <ProjectAccordionList
              refetch={refetch}
              listScripts={data.scripts}
            />
          )}
          {query.archive === "true" && (
            <ArchiveList refetch={refetch} listScripts={data.scripts} />
          )}
          {data.pagesCount > 1 && (
            <CustomPaginationComponent
              key={Math.random()}
              pageCount={data.pagesCount}
              currentPage={currentPage}
              handleActivePage={handleActivePage}
            />
          )}
          <Suspense fallback={null}>
            {openCreateScript ? (
              <CreateScriptModal
                refetch={refetch}
                openCreateScript={openCreateScript}
                setOpenCreateScript={setOpenCreateScript}
              />
            ) : null}
          </Suspense>
          <Fab
            color="primary"
            onClick={handleOpen}
            className="block md:hidden fixed right-10 bottom-6  text-3xl rounded-2xl"
          >
            +
          </Fab>
        </div>
      ) : (
        <Loader setCustomHeight="min-h-[60vh]" />
      )}
    </>
  );
};

Projects.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Projects;
