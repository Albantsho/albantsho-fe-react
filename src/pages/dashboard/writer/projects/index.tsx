import { Fab } from "@mui/material";
import CustomPaginationComponent from "@shared/CustomPaginationComponent/CustomPaginationComponent";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import DashboardSearch from "@shared/Layouts/DashboardLayout/DashboardSearch/DashboardSearch";
import useScriptsApi from "apis/Scripts.api";
import ArchiveList from "components/Dashboard/Writer/Projects/Archive/ArchiveList/ArchiveList";
import ProjectAccordionList from "components/Dashboard/Writer/Projects/Scripts/ProjectAccordionList/ProjectAccordionList";
import TabButtons from "components/Dashboard/Writer/Projects/TabButtons/TabButtons";
import { IWriterScript } from "interfaces/script";
import { debounce } from "lodash";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import querystring from "query-string";
import { Suspense, useCallback, useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import { NextPageWithLayout } from "../../../_app";

const CreateScriptModal = dynamic(
  () => import("@shared/Modals/CreateScriptModal/CreateScriptModal")
);

const Projects: NextPageWithLayout = () => {
  const [listScripts, setListScripts] = useState<Array<IWriterScript>>([]);
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const { query, push } = useRouter();
  const { getWriterAllScripts } = useScriptsApi();

  const handleOpen = () => setOpenCreateScript(true);

  const handleActivePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
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

  useEffect(() => {
    async function getWriterAllScriptsFunc() {
      try {
        setListScripts([]);
        setLoading(true);
        const res = await getWriterAllScripts(
          querystring.stringify(query),
          searchQuery
        );
        setListScripts(res.data.scripts);
        setPageCount(res.data.pagesCount);
        setCurrentPage(res.data.currentPage);
        setLoading(false);
      } catch (error) {
        ("");
      }
    }
    getWriterAllScriptsFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, openCreateScript, searchQuery]);

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
      {loading ? (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      ) : (
        <div className="space-y-10 mb-6">
          {(!query.archive || query.archive === "false") && (
            <ProjectAccordionList
              listScripts={listScripts}
              setListScripts={setListScripts}
            />
          )}
          {query.archive === "true" && (
            <ArchiveList
              listScripts={listScripts}
              setListScripts={setListScripts}
            />
          )}
          {pageCount >= 2 && (
            <CustomPaginationComponent
              pageCount={pageCount}
              currentPage={currentPage}
              handleActivePage={handleActivePage}
            />
          )}
          <Suspense fallback={null}>
            {openCreateScript ? (
              <CreateScriptModal
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
      )}
    </>
  );
};

Projects.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Projects;
