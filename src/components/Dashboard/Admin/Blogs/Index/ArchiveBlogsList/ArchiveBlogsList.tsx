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

// const listBlogs = [
//   {
//     id: 1,
//     title: "Blog Title",
//     image: blogIcon,
//     blogDescription:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
//   },
//   {
//     id: 2,
//     title: "Blog Title",
//     image: blogIcon,
//     blogDescription:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
//   },
//   {
//     id: 3,
//     title: "Blog Title",
//     image: blogIcon,
//     blogDescription:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
//   },
//   {
//     id: 4,
//     title: "Blog Title",
//     image: blogIcon,
//     blogDescription:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
//   },
//   {
//     id: 5,
//     title: "Blog Title",
//     image: blogIcon,
//     blogDescription:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
//   },
//   {
//     id: 6,
//     title: "Blog Title",
//     image: blogIcon,
//     blogDescription:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
//   },
// ];

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
  }, [query!]);

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
              <div className="mx-auto mt-14 lg:mt-24 max-w-sm h-96">
                <Image
                  className="w-full h-full"
                  src={emptyBlogs}
                  alt="empty blog list"
                />
              </div>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default ArchiveBlogsList;