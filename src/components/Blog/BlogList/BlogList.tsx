import { Box } from "@mui/material";
import { IWeblog } from "interfaces/weblog";
import BlogCard from "../BlogCard/BlogCard";

interface IProps {
  blogList: IWeblog[];
}

const BlogList = ({ blogList }: IProps) => {
  return (
    <div className="max-w-screen-2xl w-full px-5 sm:px-10">
      <Box
        className="grid gap-4 md:gap-8 py-7 md:py-14"
        gridTemplateColumns={{
          sm: "repeat(auto-fill, minmax(280px, auto))",
          md: "repeat(auto-fill, minmax(350px, auto))",
        }}
      >
        {blogList.map((blog) => (
          <BlogCard key={blog._id} post={blog} />
        ))}
        {/* {Array.from(new Array(6)).map((_, i) => (
          <BlogCard
            key={i}
            post={{
              title: "Lorem ipsum",
              image: `https://picsum.photos/600/400?random=${i + 1}`,
              desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo in tempore atque incidunt maiores! Consectetur",
            }}
          />
        ))} */}
      </Box>
    </div>
  );
};

export default BlogList;
