import Image from "next/image";
import blogIcon from "../assets/blog-icon.png";
import emptyBlogs from "../assets/empty-blogs.png";
import LiveBlog from "./LiveBlog/LiveBlog";

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

const LiveBlogsList = ({ liveBlogs }: any) => {
  return (
    <div className="mt-4 pb-14 flex flex-col gap-4 overflow-hidden">
      {listBlogs.length > 0 ? (
        <>
          {listBlogs.map((blog) => (
            <LiveBlog blog={blog} key={blog.id} />
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
    </div>
  );
};

export default LiveBlogsList;
