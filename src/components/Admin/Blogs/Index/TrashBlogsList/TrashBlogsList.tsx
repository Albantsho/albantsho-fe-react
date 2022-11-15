import { IWeblog } from "interfaces/weblog";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import blogIcon from "../assets/blog-icon.png";
import emptyBlogs from "../assets/empty-blogs.png";
import TrashBlog from "./TrashBlog/TrashBlog";

const listBlogs = [
  {
    id: 1,
    title: "Blog Title",
    image: blogIcon,
    blogDescription:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
  {
    id: 2,
    title: "Blog Title",
    image: blogIcon,
    blogDescription:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
  {
    id: 3,
    title: "Blog Title",
    image: blogIcon,
    blogDescription:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
  {
    id: 4,
    title: "Blog Title",
    image: blogIcon,
    blogDescription:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
  {
    id: 5,
    title: "Blog Title",
    image: blogIcon,
    blogDescription:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
  {
    id: 6,
    title: "Blog Title",
    image: blogIcon,
    blogDescription:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
];

interface IProps {
  trashBlogs: IWeblog[];
}

const TrashBlogsList = ({ trashBlogs }: IProps) => {
  const [trashBlogList, setTrashBlogList] = useState<null | Array<IWeblog>>(
    null
  );

  useEffect(() => {
    setTrashBlogList(trashBlogs);
  }, [trashBlogs]);

  return (
    <div className="mt-4 pb-14 flex flex-col gap-4 overflow-hidden">
      {trashBlogList === null ? (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      ) : (
        <>
          {trashBlogList.length > 0 ? (
            <>
              {trashBlogList.map((blog) => (
                <TrashBlog blog={blog} key={blog._id} />
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
    </div>
  );
};

export default TrashBlogsList;
