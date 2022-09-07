import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import SearchDashboard from "@shared/Layouts/DashboardLayout/SearchDashboard/SearchDashboard";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";
import AccordionProjectsList from "components/Dashboard/Projects/Scripts/AccordionProjects/AccordionScriptsList";
import CreateScript from "@shared/Modals/CreateScript/CreateScript";
import ListScriptsPage from "components/Dashboard/Projects/Archive/ListScripts/ListScripts";
import ModalArchive from "components/Dashboard/Projects/Archive/ModalArchive/ModalArchive";
import { useState } from "react";
import { Fab } from "@mui/material";
import TabButtons from "components/Dashboard/Projects/TabButtons/TabButtons";

const Projects: NextPageWithLayout = () => {
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);
  const [openModalUnArchive, setOpenModalUnArchive] = useState<boolean>(false);
  const handleOpen = () => setOpenCreateScript(true);
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Albantsho || Projects </title>
      </Head>
      <main>
        <TabButtons />
        <SearchDashboard setOpenCreateScript={setOpenCreateScript} />
        {(!query.type || query.type === "scripts") && <AccordionProjectsList />}
        {query.type === "archives" && (
          <>
            <ListScriptsPage setOpenModalUnArchive={setOpenModalUnArchive} />
            <ModalArchive
              openModalUnArchive={openModalUnArchive}
              setOpenModalUnArchive={setOpenModalUnArchive}
            />
          </>
        )}
        <CreateScript
          openCreateScript={openCreateScript}
          setOpenCreateScript={setOpenCreateScript}
        />
        <Fab
          color="primary"
          onClick={handleOpen}
          className=" block md:hidden fixed right-10 bottom-6  text-3xl rounded-2xl"
        >
          +
        </Fab>
      </main>
    </>
  );
};

Projects.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Projects;
