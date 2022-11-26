import useWeblogApi from "apis/Weblog.api";
import { IWeblog } from "interfaces/weblog";
import Image from "next/image";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";
import emptyBlogs from "../assets/empty-blogs.png";
import ArchiveBlog from "./ArchiveBlog/ArchiveBlog";

const ArchiveBlogsList = () => {
  const [archiveBlogList, setArchiveBlogList] = useState<Array<IWeblog>>([]);

  const [loading, setLoading] = useState(true);
  const { query } = useRouter();
  const { getAllWeblogsForAdmin } = useWeblogApi();

  useEffect(() => {
    async function getAllWeblogs() {
      try {
        const res = await getAllWeblogsForAdmin(queryString.stringify(query));
        setArchiveBlogList(res.data.weblogs);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }
    getAllWeblogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="mt-4 pb-14 flex flex-col gap-4 overflow-hidden">
      <>
        {loading ? (
          <DotLoader color="#7953B5" className="mx-auto mt-10" />
        ) : (
          <>
            {archiveBlogList.length > 0 ? (
              <>
                {archiveBlogList.map((blog) => (
                  <ArchiveBlog
                    setArchiveBlogList={setArchiveBlogList}
                    blog={blog}
                    key={blog._id}
                  />
                ))}
              </>
            ) : (
              <Image
                width={384}
                height={384}
                loading="lazy"
                className="w-fit h-fit mx-auto mt-14 lg:mt-24"
                src={emptyBlogs}
                alt="empty blog list"
              />
            )}
          </>
        )}
      </>
    </div>
  );
};

export default ArchiveBlogsList;
