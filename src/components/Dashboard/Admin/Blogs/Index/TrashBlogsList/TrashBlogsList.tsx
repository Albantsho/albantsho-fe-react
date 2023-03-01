import emptyBlogs from "@assets/images/empty-blogs.png";
import { IWeblog } from "interfaces/weblog";
import Image from "next/image";
import TrashBlog from "./TrashBlog/TrashBlog";

interface IProps {
  blogList: IWeblog[];
}

const TrashBlogsList = ({ blogList }: IProps) => {
  return (
    <div className="mt-4 pb-14 flex flex-col gap-4 overflow-hidden">
      {blogList.length > 0 ? (
        <>
          {blogList.map((blog) => (
            <TrashBlog blogList={blogList} blog={blog} key={blog._id} />
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
    </div>
  );
};

export default TrashBlogsList;
