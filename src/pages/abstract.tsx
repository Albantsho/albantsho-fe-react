import DashboardNav from "@shared/Layouts/DashboardLayout/DashboardNav/DashboardNav";
import Abstract from "components/Abstract/Index/Abstract";
import Head from "next/head";

const AbstractPage = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Abstract</title>
      </Head>
      <DashboardNav color="inherit" position="static" />

      <div className="px-5 sm:px-10 py-10 md:py-20 bg-gray-50">
        <Abstract />
      </div>
    </>
  );
};

export default AbstractPage;
