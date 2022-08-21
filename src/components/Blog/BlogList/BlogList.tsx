import { Box } from "@mui/material";
import BlogCard from "../BlogCard/BlogCard";

const BlogList = () => {
  return (
    <Box
      className="grid gap-4 md:gap-8 py-7 md:py-14"
      gridTemplateColumns={{ sm: "repeat(auto-fill, minmax(280px, auto))" }}
    >
      {Array.from(new Array(6)).map((_, i) => (
        <BlogCard
          key={i}
          post={{
            title: "Lorem ipsum",
            image: `https://picsum.photos/600/400?random=${i + 1}`,
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo in tempore atque incidunt maiores! Consectetur",
          }}
        />
      ))}
    </Box>
  );
};

export default BlogList;
