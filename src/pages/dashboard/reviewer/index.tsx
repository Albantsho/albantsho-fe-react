import ProfileNav from "@shared/ProfileNav/ProfileNav";
import useReviewsApi from "apis/Reviews.api";
import TasksList from "components/Dashboard/Reviewer/Index/TasksList/TasksList";
import { IReviewerTask } from "interfaces/reviews";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";
import questString from "query-string";
import { useRouter } from "next/router";

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
        console.log(res);

        setReviewerTaskList(res.data.scripts);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
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
      <div className="pt-10 px-5 sm:px-10 bg-[#f6f8fc] min-h-screen flex gap-6 lg:gap-10 justify-between overflow-hidden">
        {loading ? (
          <DotLoader color="#7953B5" className="mx-auto mt-10" />
        ) : (
          <TasksList reviewerTaskList={reviewerTaskList} />
        )}
      </div>
    </>
  );
};

export default Reviewer;
