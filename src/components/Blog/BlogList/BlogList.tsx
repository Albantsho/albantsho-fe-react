import {
  Box,
  Card,
  Pagination,
  Skeleton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomPaginationComponent from "@shared/CustomPaginationComponent/CustomPaginationComponent";
import { IWeblog } from "interfaces/weblog";
import { useRouter } from "next/router";
import BlogCard from "../BlogCard/BlogCard";

interface IProps {
  blogList: IWeblog[];
  loading: boolean;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  pageCount: number;
}

const BlogList = ({
  blogList,
  loading,
  currentPage,
  setCurrentPage,
  pageCount,
}: IProps) => {
  const { push } = useRouter();
  const handleActivePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    push(`?page=${page}`, undefined, { shallow: true });
    setCurrentPage(page);
  };

  return (
    <div className="max-w-screen-2xl w-full px-5 sm:px-10">
      <Box
        className="grid gap-4 md:gap-8 py-7 md:py-14"
        gridTemplateColumns={{
          sm: "repeat(auto-fill, minmax(280px, auto))",
          md: "repeat(auto-fill, minmax(350px, auto))",
          xl: "repeat(auto-fill, minmax(510px, auto))",
        }}
      >
        {loading
          ? Array.from(new Array(3)).map((_, index) => (
              <Card
                key={index}
                className="rounded-lg"
                sx={{ boxShadow: " 0px 2px 7px rgba(117, 88, 162, 0.15)" }}
              >
                <Skeleton
                  sx={{ height: 250 }}
                  animation="wave"
                  variant="rectangular"
                />
                <Skeleton
                  className="mx-5"
                  animation="wave"
                  height={20}
                  width="60%"
                  style={{ marginBottom: 6, marginTop: 6 }}
                />
                <Skeleton className="mx-5" animation="wave" height={15} />
                <Skeleton className="mx-5" animation="wave" height={15} />
                <Skeleton className="mx-5" animation="wave" height={15} />
                <Skeleton className="mx-5 mb-5" animation="wave" height={15} />
              </Card>
            ))
          : blogList.map((blog) => <BlogCard key={blog._id} post={blog} />)}
      </Box>

      {pageCount >= 2 && (
        <CustomPaginationComponent
          pageCount={pageCount}
          currentPage={currentPage}
          handleActivePage={handleActivePage}
        />
      )}
    </div>
  );
};

export default BlogList;
