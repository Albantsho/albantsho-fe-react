import DashboardNav from "@shared/Layouts/DashboardLayout/DashboardNav/DashboardNav";
import CartScript from "components/Reviewer/Index/CartScript/CartScript";
import ListTasks from "components/Reviewer/Index/ListTasks/ListTasks";
import Head from "next/head";

const Reviewer = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Reviewer</title>
      </Head>
      <DashboardNav color="inherit" position="static" />
      <div className="pt-10 px-5 sm:px-10 bg-[#f6f8fc] min-h-screen flex gap-6 lg:gap-10  justify-between">
        <ListTasks />
        <CartScript />
      </div>
    </>
  );
};

export default Reviewer;
