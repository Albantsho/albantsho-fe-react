import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import SearchDashboard from "@shared/Layouts/DashboardLayout/SearchDashboard/SearchDashboard";
import RoutingButton from "components/ProjectsPage/RoutingButton/RoutingButton";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const Projects: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Projects </title>
      </Head>
      <main className="bg-tinted-50 px-5 py-2 md:pl-16 md:pr-24 sm:px-10">
        <RoutingButton />
        <SearchDashboard />
      </main>
    </>
  );
};

Projects.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Projects;
