import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { IWeblog } from "interfaces/weblog";
import Link from "next/link";
import routes from "routes/routes";

interface IProps {
  post: IWeblog;
}

const BlogCard = ({ post }: IProps) => {
  const convertToSlug = (Text: string) => {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  return (
    <Card
      className="rounded-lg"
      sx={{ boxShadow: " 0px 2px 7px rgba(117, 88, 162, 0.15)" }}
    >
      <CardMedia
        loading="lazy"
        component="img"
        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${post.media}`}
        className="max-h-[250px] object-center"
      />
      <CardHeader
        className="pb-0"
        title={post.title}
        titleTypographyProps={{
          color: "primary.main",
          variant: "h4",
          className: "leading-normal futura font-medium",
        }}
      />
      <CardContent className="pt-0">
        <Typography color="gray.400">{post.description}</Typography>
      </CardContent>
      <CardActions className="px-4 pb-4">
        <Link
          href={routes.oneBlog.dynamicUrl(post._id, convertToSlug(post.title))}
          className="underline text-primary-700"
        >
          Read more
        </Link>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
