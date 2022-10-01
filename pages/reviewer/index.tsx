import ProfileNav from "@shared/ProfileNav/ProfileNav";
import ScriptCart from "components/Reviewer/Index/ScriptCart/ScriptCart";
import TasksList from "components/Reviewer/Index/TasksList/TasksList";
import Head from "next/head";

const Reviewer = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Reviewer</title>
      </Head>
      <ProfileNav color="inherit" position="static" />
      <div className="pt-10 px-5 sm:px-10 bg-[#f6f8fc] min-h-screen flex gap-6 lg:gap-10 justify-between overflow-hidden">
        <TasksList />
        <ScriptCart />
      </div>
    </>
  );
};

export default Reviewer;
