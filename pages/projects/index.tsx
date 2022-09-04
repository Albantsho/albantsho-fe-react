import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import SearchDashboard from "@shared/Layouts/DashboardLayout/SearchDashboard/SearchDashboard";
import RoutingButton from "components/Dashboard_ProjectsPage/RoutingButton/RoutingButton";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";
import AccordionProjectsList from "components/Dashboard_ProjectsPage/ScriptsRoute/AccordionProjects/AccordionProjectsList";
import ModalProject from "components/Dashboard_ProjectsPage/ModalProject/ModalProject";
import ListScriptsPage from "components/Dashboard_ProjectsPage/ArchiveRoute/ListArchiveScripts";
import ModalArchive from "components/Dashboard_ProjectsPage/ArchiveRoute/ModalArchive/ModalArchive";
import { useState } from "react";
import { Fab } from "@mui/material";

const Projects: NextPageWithLayout = () => {
  const [openModalCreateScript, setOpenModalCreateScript] = useState<boolean>(false);
  const [openArchive, setOpenArchive] = useState<boolean>(false);
  const handleOpen = () => setOpenModalCreateScript(true);
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Albantsho || Projects </title>
      </Head>
      <main>
        <RoutingButton />
        <SearchDashboard setOpenModalCreateScript={setOpenModalCreateScript} />
        {(!query.type || query.type === "scripts") && <AccordionProjectsList />}
        {query.type === "archives" && (
          <>
            <ListScriptsPage setOpenArchive={setOpenArchive} />
            <ModalArchive
              openArchive={openArchive}
              setOpenArchive={setOpenArchive}
            />
          </>
        )}
        <ModalProject openModalCreateScript={openModalCreateScript} setOpenModalCreateScript={setOpenModalCreateScript} />
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
