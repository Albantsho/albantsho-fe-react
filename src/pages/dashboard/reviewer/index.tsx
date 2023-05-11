import Loader from "@shared/Loader/Loader";
import ProfileNav from "@shared/ProfileNav/ProfileNav";
import useReviewsApi from "apis/Reviews.api";
import TasksList from "components/Dashboard/Reviewer/Index/TasksList/TasksList";
import { IReviewerTask } from "interfaces/reviews";
import Head from "next/head";
import { useRouter } from "next/router";
import questString from "query-string";
import { useEffect, useState } from "react";

const Reviewer = () => {
  const [reviewerTaskList, setReviewerTaskList] = useState<
    Array<IReviewerTask>
  >([]);
  const [loading, setLoading] = useState(false);
  const { getAllReviewerTasks } = useReviewsApi();
  const { query } = useRouter();

  useEffect(() => {
    async function getAllReviewerTasksFunc() {
      try {
        setLoading(true);
        const res = await getAllReviewerTasks(questString.stringify(query));
        setReviewerTaskList(res.data.scripts);
        setLoading(false);
      } catch (error) {
        ("");
      }
    }

    getAllReviewerTasksFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <Head>
        <title>Albantsho || Reviewer</title>
      </Head>
      <ProfileNav color="inherit" position="static" />
      <main
        className={`${
          loading ? "justify-center" : "justify-between"
        } pt-10 px-5 sm:px-10 bg-[#f6f8fc] min-h-[85vh] flex gap-6 lg:gap-10 overflow-hidden`}
      >
        {loading ? (
          <Loader setCustomHeight="min-h-[60vh]" />
        ) : (
          <TasksList reviewerTaskList={reviewerTaskList} />
        )}
      </main>
    </>
  );
};

export default Reviewer;
