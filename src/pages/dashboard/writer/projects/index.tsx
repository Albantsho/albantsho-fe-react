import { Fab } from "@mui/material";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import DashboardSearch from "@shared/Layouts/DashboardLayout/DashboardSearch/DashboardSearch";
import useScriptsApi from "apis/Scripts.api";
import ArchiveList from "components/Dashboard/Writer/Projects/Archive/ArchiveList/ArchiveList";
import ProjectAccordionList from "components/Dashboard/Writer/Projects/Scripts/ProjectAccordionList/ProjectAccordionList";
import TabButtons from "components/Dashboard/Writer/Projects/TabButtons/TabButtons";
import { IWriterScript } from "interfaces/script";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../../../_app";
import querystring from "query-string";

const CreateScriptModal = dynamic(
  () => import("@shared/Modals/CreateScriptModal/CreateScriptModal")
);

const Projects: NextPageWithLayout = () => {
  const [listScripts, setListScripts] = useState<Array<IWriterScript>>([]);
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { query } = useRouter();
  const { getWriterAllScripts } = useScriptsApi();

  const handleOpen = () => setOpenCreateScript(true);

  useEffect(() => {
    async function getWriterAllScriptsFunc() {
      try {
        setListScripts([]);
        setLoading(true);
        const res = await getWriterAllScripts(querystring.stringify(query));
        setListScripts(res.data.scripts);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }
    getWriterAllScriptsFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, openCreateScript]);

  return (
    <>
      <Head>
        <title>Albantsho || Projects</title>
      </Head>
      {loading ? (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      ) : (
        <div>
          <TabButtons />
          <DashboardSearch setOpenCreateScript={setOpenCreateScript} />
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
          <CreateScriptModal
            openCreateScript={openCreateScript}
            setOpenCreateScript={setOpenCreateScript}
          />
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
