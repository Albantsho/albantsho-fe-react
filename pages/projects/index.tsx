import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import SearchDashboard from "@shared/Layouts/DashboardLayout/SearchDashboard/SearchDashboard";
import RoutingButton from "components/ProjectsPage/RoutingButton/RoutingButton";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";
import AccordionProjects from "components/ProjectsPage/AccordionProjects/AccordionProjects";
import ModalProject from "components/ProjectsPage/ModalProject/ModalProject";
import ListScriptsPage from "components/ArchivesPage/ListScriptsPage/ListScriptsPage";
import ModalArchive from "components/ArchivesPage/ModalArchive/ModalArchive";
import { useState } from "react";
import { Button } from "@mui/material";

const Projects: NextPageWithLayout = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openArchive, setOpenArchive] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const { query } = useRouter();
  console.log(query);

  return (
    <>
      <Head>
        <title>Albantsho || Projects </title>
      </Head>
      <main>
        <RoutingButton />
        <SearchDashboard />
        {query.type === "scripts" && (
          <>
            <AccordionProjects />
            <ModalProject open={open} setOpen={setOpen} />
            <Button
              onClick={handleOpen}
              className="bg-primary-700 hover:bg-primary-700 block md:hidden fixed right-10 bottom-6 text-white text-3xl rounded-2xl w-14 h-14"
            >
              +
            </Button>
          </>
        )}

        {query.type === "archives" && (
          <>
            <ListScriptsPage setOpenArchive={setOpenArchive} />
            <ModalProject open={open} setOpen={setOpen} />
            <ModalArchive
              openArchive={openArchive}
              setOpenArchive={setOpenArchive}
            />
            <Button
              onClick={handleOpen}
              className="bg-primary-700 hover:bg-primary-700 block md:hidden fixed right-10 bottom-6 text-white text-3xl rounded-2xl w-14 h-14"
            >
              +
            </Button>
          </>
        )}
      </main>
    </>
  );
};

Projects.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Projects;
