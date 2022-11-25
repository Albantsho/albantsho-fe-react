import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import DashboardSearch from "@shared/Layouts/DashboardLayout/DashboardSearch/DashboardSearch";
import Head from "next/head";
import { NextPageWithLayout } from "../../../_app";
import { useRouter } from "next/router";
import ArchiveList from "components/Dashboard/Writer/Projects/Archive/ArchiveList/ArchiveList";
import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import TabButtons from "components/Dashboard/Writer/Projects/TabButtons/TabButtons";
import ProjectAccordionList from "components/Dashboard/Writer/Projects/Scripts/ProjectAccordionList/ProjectAccordionList";
import dynamic from "next/dynamic";
import useUserStore from "app/user.store";
import useScriptsApi from "apis/Scripts.api";
import errorHandler from "utils/error-handler";
import { IWriterScript } from "interfaces/script";
import { DotLoader } from "react-spinners";

const UnArchiveModal = dynamic(
  () =>
    import(
      "components/Dashboard/Writer/Projects/Archive/UnArchiveModal/UnArchiveModal"
    )
);
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
        const res = await getWriterAllScripts();
        setListScripts(res.data.scripts);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }
    getWriterAllScriptsFunc();
  }, [query]);

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
          {(!query.tab || query.tab === "scripts") && (
            <ProjectAccordionList
              listScripts={listScripts}
              setListScripts={setListScripts}
            />
          )}
          {query.tab === "archives" && (
            <>
              <ArchiveList
                listScripts={listScripts}
                setListScripts={setListScripts}
              />
            </>
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
