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
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);
  const [openUnArchive, setOpenUnArchive] = useState<boolean>(false);
  const handleOpen = () => setOpenCreateScript(true);
  const { query, pathname } = useRouter();
  const user = useUserStore((state) => state.user);
  const { push } = useRouter();

  // useEffect(() => {
  //   if (user.user_type === "writer") {
  //     push("/dashboard/scripts");
  //   }
  // }, [pathname]);

  return (
    <>
      <Head>
        <title>Albantsho || Projects</title>
      </Head>
      <div>
        <TabButtons />
        <DashboardSearch setOpenCreateScript={setOpenCreateScript} />
        {(!query.tab || query.tab === "scripts") && <ProjectAccordionList />}
        {query.tab === "archives" && (
          <>
            <ArchiveList setOpenUnArchive={setOpenUnArchive} />
            <UnArchiveModal
              openUnArchive={openUnArchive}
              setOpenUnArchive={setOpenUnArchive}
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
    </>
  );
};

Projects.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Projects;
